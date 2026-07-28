// Google Analytics 4 tracking utilities

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Track pageviews
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag && GA_TRACKING_ID) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = (
  action: string,
  { category, label, value, ...rest }: { category?: string; label?: string; value?: number; [key: string]: unknown } = {}
) => {
  if (typeof window !== "undefined" && window.gtag) {
    const params: Record<string, unknown> = {
      event_category: category,
      event_label: label,
      value: value,
      ...rest,
    };
    window.gtag("event", action, params);
  }
};

"use client";

import dynamic from "next/dynamic";

// Dynamically load interactive non-critical widgets with SSR false inside client wrapper
const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/ui/ScrollProgress"), { ssr: false });
const WhatsAppButton = dynamic(() => import("@/components/ui/WhatsAppButton"), { ssr: false });
const CallButton = dynamic(() => import("@/components/ui/CallButton"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/ui/BackToTop"), { ssr: false });

export default function InteractiveProviders() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <CallButton />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}

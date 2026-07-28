export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  forWho: string;
  whyMatters: string;
  deliverables: string[];
  heroTitle: string;
  heroSubtitle: string;
  benefits: { title: string; desc: string }[];
  features: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  testimonials: { quote: string; author: string; role: string }[];
  relatedServices: string[];
}

export const servicesData: ServiceItem[] = [
  {
    slug: "portfolio-websites",
    title: "Portfolio Websites",
    description: "Premium personal portfolio websites for freelancers, creators, and professionals. Build your personal brand and stand out online.",
    keywords: ["portfolio website", "personal brand site", "cv website", "freelancer portfolio"],
    forWho: "Freelancers, creators, job seekers, and students looking for a professional digital resume.",
    whyMatters: "A custom interactive site showcases your work and builds instant credibility online.",
    deliverables: ["Custom work showcase", "Downloadable resume integration", "Fast contact setups", "Self-hosted setup guide"],
    heroTitle: "Build a Brand That Attracts Opportunities",
    heroSubtitle: "Your portfolio is your 24/7 digital lobby. We construct premium, interactive portfolio sites that display your expertise, projects, and achievements with sleek animations and perfect responsive designs.",
    benefits: [
      { title: "First-Class Impression", desc: "A website is much more professional than a PDF CV. Stand out in a crowded inbox instantly." },
      { title: "Search Indexable Resume", desc: "Appear in searches for local or global clients searching for your specific skill sets." },
      { title: "Zero Monthly Fees", desc: "We host your portfolio on global high-speed CDNs with no monthly platform subscriptions." }
    ],
    features: [
      { title: "Interactive Case Studies", desc: "Show off the exact challenge, solution, and performance outcomes of your project work." },
      { title: "One-Click Resume DL", desc: "Clean PDF integrations so prospective hiring managers can download files directly." },
      { title: "Social Connects", desc: "Link GitHub, LinkedIn, Twitter, and email directly into smooth hover layouts." }
    ],
    process: [
      { step: "01", title: "Asset Review", desc: "We review your work history, projects, and testimonials." },
      { step: "02", title: "Visual Style Guide", desc: "We define your personal typography, color palettes, and profile assets." },
      { step: "03", title: "Figma Draft & Code", desc: "We create a premium visual flow and build it with clean Next.js animations." }
    ],
    faqs: [
      { question: "Can I update the portfolio projects myself later?", answer: "Yes. We design the codebase cleanly so adding or editing projects is as simple as updating a single JSON file or text document." },
      { question: "Is the hosting really free?", answer: "Yes. For portfolios, Vercel and Netlify offer excellent free tiers for bandwidth and traffic, meaning zero monthly fees." }
    ],
    testimonials: [
      { quote: "makePortfolio.in built my design portfolio in 5 days. I landed a remote contract job within two weeks of sharing the link!", author: "Preksha Sen", role: "UI/UX Designer" }
    ],
    relatedServices: ["website-redesign", "seo-services", "performance-tuneup"]
  },
  {
    slug: "business-websites",
    title: "Business Websites",
    description: "High-converting corporate and business websites for clinics, shops, local agencies, and service providers. Build trust and generate leads.",
    keywords: ["business website", "agency web design", "corporate website", "local business site"],
    forWho: "Local shops, clinics, consultancies, and service providers building authority.",
    whyMatters: "A professional site establishes client trust and serves as a 24/7 informational hub.",
    deliverables: ["Core pages (About/Services)", "Brand identity alignment", "Google Maps setup", "Lead capture forms"],
    heroTitle: "Convert Browsers Into Long-Term Clients",
    heroSubtitle: "A modern corporate website establishes direct authority, hosts critical client resources, and routes high-intent search leads straight to your team's inbox.",
    benefits: [
      { title: "Credibility Booster", desc: "81% of shoppers research businesses online before engaging. Having no site is a major customer drop-off point." },
      { title: "Streamlined Intake", desc: "Collect customer requests, consultation forms, and inquiries automatically." },
      { title: "Local Search Optimization", desc: "Appear on maps and localized searches to attract clients in your geographic service area." }
    ],
    features: [
      { title: "Custom Intake Forms", desc: "Configured fields that validate customer data before sending submissions to SMTP servers." },
      { title: "Map & NAP Integration", desc: "Clean Google Maps widget embed and structured NAP listings for Local SEO sync." },
      { title: "Modular Architecture", desc: "Ready to scale with database dashboards, blogs, or booking frameworks as you grow." }
    ],
    process: [
      { step: "01", title: "Discovery Call", desc: "We understand your brand voice, services, target audience, and key CTAs." },
      { step: "02", title: "Copywriting & Wireframing", desc: "We construct structured page layouts and draft high-converting header copy." },
      { step: "03", title: "Launch & Google Setup", desc: "We deploy the website, submit the sitemap to Google Search Console, and verify index status." }
    ],
    faqs: [
      { question: "Will my business site rank on local Google searches?", answer: "Yes, we configure structured LocalBusiness schema tags and optimize page header hierarchies to target local keywords." },
      { question: "Do you integrate third-party booking tools?", answer: "Absolutely. We can embed widgets for Calendly, WhatsApp, or proprietary booking platforms seamlessly." }
    ],
    testimonials: [
      { quote: "Our consulting firm's inbound inquiries went up by 40% after launching the new site. The clean layout makes a massive difference.", author: "Blesson Joseph", role: "Managing Director" }
    ],
    relatedServices: ["ecommerce-websites", "seo-services", "maintenance"]
  },
  {
    slug: "ecommerce-websites",
    title: "E-Commerce Shops",
    description: "Launch your online store with automated shopping carts, secure payment gateways, and highly optimized product listing displays.",
    keywords: ["ecommerce website", "online shop development", "shopify store alternative", "custom store builder"],
    forWho: "Boutique owners, local brands, and creators selling items directly online.",
    whyMatters: "Allows you to expand your customer base nationwide with automated checkout flows.",
    deliverables: ["Product catalogs", "Shopping cart database", "Secure payment gateway", "WhatsApp order link"],
    heroTitle: "Build a Store That Runs 24/7 Nationwide",
    heroSubtitle: "Scale your boutique or retail brand with a fast, modern digital store. Avoid heavy SaaS cuts by building an optimized next-gen custom checkout pipeline.",
    benefits: [
      { title: "Nationwide Outreach", desc: "Sell to customers across regions, managing inventory, orders, and products digitally." },
      { title: "Instant Mobile Checkout", desc: "Optimized mobile flow with quick payment processing (UPI, Cards, Wallets)." },
      { title: "Blazing Speed Catalogs", desc: "Next.js static site generation (SSG) lets customers browse products instantly without lag." }
    ],
    features: [
      { title: "Shopping Cart & DB", desc: "Dynamic client-side state combined with secure backend processing." },
      { title: "Payment Integration", desc: "Razorpay, Stripe, or PhonePe setup for reliable secure transaction captures." },
      { title: "WhatsApp Direct Order", desc: "Fallback options letting customers send orders with items pre-filled to your WhatsApp." }
    ],
    process: [
      { step: "01", title: "Catalog Organization", desc: "Structured product specifications, pricing model, and images." },
      { step: "02", title: "Checkout Mapping", desc: "Define payment gateways, delivery partner webhooks, and confirmation templates." },
      { step: "03", title: "Security Testing", desc: "Auditing forms, SSL parameters, and transaction loops to ensure user safety." }
    ],
    faqs: [
      { question: "What payment gateways are supported?", answer: "We support major local and international gateways including Razorpay, Paytm, PhonePe, Stripe, and PayPal." },
      { question: "Is my product database secure?", answer: "Yes, all data streams are encrypted over HTTPS, and payment gateways handle compliance tokens securely." }
    ],
    testimonials: [
      { quote: "Our spice boutique went from local store sales to shipping nationwide in under a month. The payment workflow is incredibly simple.", author: "Tissymol Blesson", role: "Co-Founder, FarmSpice" }
    ],
    relatedServices: ["website-redesign", "seo-services", "performance-tuneup"]
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    description: "Transform your slow, outdated website into a fast, responsive, and high-converting modern experience. We preserve your SEO rankings.",
    keywords: ["website redesign", "migrate to nextjs", "modernize website", "improve conversion rates"],
    forWho: "Businesses with slow, outdated, or mobile-unfriendly legacy websites.",
    whyMatters: "Modern layouts retain visitor attention, load faster, and improve search rankings.",
    deliverables: ["Fresh UI/UX redesign", "Existing content migration", "Page speed optimization", "Canonical URL redirects"],
    heroTitle: "Revitalize Your Brand & Triple Conversions",
    heroSubtitle: "If your current site takes more than 3 seconds to load or looks awkward on mobile, you are losing over half your prospective customers. We redesign with performance at the core.",
    benefits: [
      { title: "Reduced Bounce Rates", desc: "Faster loading page transitions prevent visitors from abandoning your site." },
      { title: "Upgraded Brand Image", desc: "Match your current quality standards with elegant glassmorphism, responsive grids, and modern layout spacing." },
      { title: "Maintain SEO Equity", desc: "We migrate your structure using 301 redirects, ensuring your existing Google search ranks remain intact." }
    ],
    features: [
      { title: "Awwwards-Level UI", desc: "Clean styling tailored in Figma and implemented in high-performance code." },
      { title: "Mobile-First UX", desc: "Responsive breakpoints and interactive touch layouts designed specifically for modern screens." },
      { title: "Performance Upgrade", desc: "Migrate clunky platforms (like WordPress) to clean TypeScript and React frameworks." }
    ],
    process: [
      { step: "01", title: "Legacy Audit", desc: "Analyze slow points, broken redirect links, and layout gaps on your existing site." },
      { step: "02", title: "Content Migration Map", desc: "Create a URL redirect table to preserve organic backlinks." },
      { step: "03", title: "Build & Deploy", desc: "Launch the rebuilt site onto rapid CDNs with perfect SEO schema parity." }
    ],
    faqs: [
      { question: "Will my current search ranking drop after a redesign?", answer: "No, because we maintain exact URL mappings or set up robust redirects, and the performance upgrade typically improves rankings." },
      { question: "How long does a website migration take?", answer: "Most standard site migrations and redesigns are completed within 10 to 14 days." }
    ],
    testimonials: [
      { quote: "Our old website was slow and difficult to browse. The redesign load speed is night-and-day, and clients love the new branding.", author: "Dr. Morris Joseph", role: "Director, MEA" }
    ],
    relatedServices: ["performance-tuneup", "seo-services", "maintenance"]
  },
  {
    slug: "seo-services",
    title: "SEO Optimization",
    description: "technical search engine optimization (SEO) audits, sitemap setup, keyword mapping, and JSON-LD schema integration to rank your services.",
    keywords: ["technical seo", "search ranking optimize", "schema markup", "google indexation"],
    forWho: "Brands struggling with low search visibility who want organic business traffic.",
    whyMatters: "Ranks your services for search intents, driving free web traffic with no ad spend.",
    deliverables: ["Technical indexing audits", "Keyword meta tag mappings", "XML sitemaps creation", "Schema structured markup"],
    heroTitle: "Rank Higher & Earn Free Organic Leads",
    heroSubtitle: "A beautiful website is useless if no one can find it. We inject technical SEO blueprints, structured metadata, and Google Search Essentials compliance straight into your codebase.",
    benefits: [
      { title: "Free Organic Traffic", desc: "Reduce reliance on expensive paid ads. Get discovered naturally by customers who need your services." },
      { title: "Enhanced Click-Throughs", desc: "JSON-LD schema configuration shows reviews, prices, and FAQs directly inside search results." },
      { title: "Rapid Crawling & Indexing", desc: "Perfect sitemaps and semantic structures mean search engine bots crawl your site without error." }
    ],
    features: [
      { title: "JSON-LD Schema Markup", desc: "Dynamic script injections for local businesses, breadcrumbs, articles, and reviews." },
      { title: "Meta tag structures", desc: "Configuring unique meta titles, descriptions, and OG tags for every subpage." },
      { title: "Search Engine Console", desc: "Setup, integration, and verification of Google Search console index requests." }
    ],
    process: [
      { step: "01", title: "Keyword Audit", desc: "Identify what search intents and questions your target customer is typing." },
      { step: "02", title: "On-Page Execution", desc: "Optimize headings, alt texts, schema codes, and metadata." },
      { step: "03", title: "Search Console Sync", desc: "Submit dynamic sitemaps and request crawl sweeps for rapid indexing." }
    ],
    faqs: [
      { question: "How long until I see rankings on Google?", answer: "SEO is a medium-term strategy. While search bots index technical changes within days, ranking shifts typically manifest over 4 to 8 weeks." },
      { question: "Is this a one-time optimization?", answer: "Yes, our on-page setup is a permanent code upgrade, though publishing recurring articles/blogs helps maintain domain authority." }
    ],
    testimonials: [
      { quote: "Our local store didn't show up on search maps at all. The optimization plan put us on the front page for local intent keywords.", author: "Shaji T. A.", role: "Founder, local brand" }
    ],
    relatedServices: ["performance-tuneup", "website-redesign", "maintenance"]
  },
  {
    slug: "maintenance",
    title: "Website Maintenance",
    description: "Reliable website maintenance, backups, security audits, page updates, and server monitoring to keep your site running safely.",
    keywords: ["website maintenance", "site backups", "security audit", "uptime monitoring"],
    forWho: "Busy business owners needing website upkeep without technical overhead.",
    whyMatters: "Regular checks prevent security threats, broken layouts, and database slowdowns.",
    deliverables: ["Code version upgrades", "Automated backups", "Form testing audits", "Monthly content changes"],
    heroTitle: "Keep Your Website Secure, Fast, & Always Online",
    heroSubtitle: "Leave the technical monitoring to us. We run monthly code patches, verify form deliverability, perform backups, and monitor page load speeds to prevent issues before they affect your clients.",
    benefits: [
      { title: "Complete Peace of Mind", desc: "Focus on running your business while we handle hosting, domains, forms, and updates." },
      { title: "Guaranteed Security", desc: "Stay safe from web vulnerabilities by keeping software scripts, dependencies, and SSL certs updated." },
      { title: "Zero Downtime", desc: "Uptime monitoring alerts us immediately if your site ever experiences an issue, allowing rapid resolve." }
    ],
    features: [
      { title: "Monthly File Backups", desc: "Automated archives of codebases and database items saved in secure cloud vaults." },
      { title: "Deliverability Audits", desc: "Testing contact forms and API checkouts to ensure messages never drop." },
      { title: "Content Refresh Package", desc: "Simple text updates, team photo uploads, pricing reviews, or banner changes each month." }
    ],
    process: [
      { step: "01", title: "Setup Dashboard", desc: "Configure monitoring endpoints, automated backups, and log alerts." },
      { step: "02", title: "Monthly Updates", desc: "Upgrade dependency libraries, re-test forms, and check Google Console reports." },
      { step: "03", title: "Support Sweeps", desc: "Deliver quick updates or adjustments within 24 hours of client requests." }
    ],
    faqs: [
      { question: "What is included in content changes?", answer: "Content changes cover text edits, uploading new images, adding team profiles, updating prices, or posting blogs you provide." },
      { question: "Is there a contract or commitment?", answer: "No, our maintenance package operates on a flexible month-to-month plan. You can cancel at any point." }
    ],
    testimonials: [
      { quote: "Having makePortfolio monitor our site lets me run my academy without worrying about hosting issues or broken forms. Prompt support!", author: "Morris Team", role: "Academy Admin" }
    ],
    relatedServices: ["seo-services", "performance-tuneup", "website-redesign"]
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    description: "Highly focused, conversion-optimized single-page layouts designed for marketing campaigns, product launches, or lead generation.",
    keywords: ["landing page design", "conversion landing page", "one-page website", "lead capture page"],
    forWho: "Startups, SaaS launches, and marketing managers running focused campaigns.",
    whyMatters: "A single-action focus cuts distractions and directly boosts user sign-ups or downloads.",
    deliverables: ["Single-page layout", "Optimized CTAs & headlines", "Analytics integration", "Form integrations"],
    heroTitle: "Maximize ROI on Your Advertising Campaigns",
    heroSubtitle: "Don't waste ad clicks on a generic homepage. We construct hyper-focused single landing pages designed to drive one specific conversion goal, from sales to form completions.",
    benefits: [
      { title: "Higher Conversion Rates", desc: "Removing navigation clutter guides users toward a single clear call-to-action." },
      { title: "Rapid Turnaround", desc: "Get highly-optimized campaign pages up and running in just a few days." },
      { title: "Seamless Ad Tracking", desc: "Integrate meta pixels, GA4 events, and custom conversion points straight out of the box." }
    ],
    features: [
      { title: "Above-the-Fold Optimizations", desc: "Copywriting frameworks built to capture visitor attention in under 2 seconds." },
      { title: "Dynamic Lead Routing", desc: "Instantly route inquiries to your email CRM, WhatsApp, or Google Sheets." },
      { title: "A/B Testing Friendly", desc: "Clean modular block structures that make testing layout variations simple." }
    ],
    process: [
      { step: "01", title: "Goal Definition", desc: "Identify key conversion goals (downloads, signups, call requests)." },
      { step: "02", title: "Copywriting", desc: "Draft high-intent headings, benefits, and pain-point hooks." },
      { step: "03", title: "Development & Analytics", desc: "Deploy static pages and verify conversion event scripts are operational." }
    ],
    faqs: [
      { question: "Can I connect this to my email newsletter software?", answer: "Yes, we integrate with Mailchimp, ConvertKit, ActiveCampaign, HubSpot, and other major CRM applications." },
      { question: "Are landing pages responsive?", answer: "Yes, every landing page layout is thoroughly optimized for mobile, tablet, and desktop display." }
    ],
    testimonials: [
      { quote: "We ran Google Ads to the new landing page and saw our cost-per-lead drop by 35%. Excellent turnaround time and layout flow.", author: "Marketing Lead", role: "SaaS Start-up" }
    ],
    relatedServices: ["performance-tuneup", "website-redesign", "seo-services"]
  },
  {
    slug: "performance-tuneup",
    title: "Performance Tuneup",
    description: "Core Web Vitals and Lighthouse speed optimization. We speed up assets, split JavaScript, and resolve layout shifts (CLS).",
    keywords: ["website speed tuneup", "lighthouse optimization", "core web vitals fix", "reduce cls"],
    forWho: "Websites suffering from slow load speeds and high user bounce drop-offs.",
    whyMatters: "Fast loading directly improves visitor retention and elevates search placement.",
    deliverables: ["Asset compression details", "Javascript code splitting", "Layout shift (CLS) fixes", "Lighthouse 95+ score target"],
    heroTitle: "Achieve Instant Loading & Score 95+ on Lighthouse",
    heroSubtitle: "A slow website is a leaking bucket. We re-engineer assets, audit bundle sizes, configure server response parameters, and resolve layout shifts to make your pages load instantly.",
    benefits: [
      { title: "Lower Ad Bounce Rates", desc: "Fast pages retain traffic from social media platforms and mobile browsers." },
      { title: "Direct Ranking Gains", desc: "Google ranks sites with fast Core Web Vitals (LCP, INP, CLS) higher in search layouts." },
      { title: "Fluid User Experience", desc: "Instant page interaction leads to highly satisfied users and higher conversion rates." }
    ],
    features: [
      { title: "Code Splitting & Bundle Audits", desc: "De-clutter unused javascript and dynamically load heavy page components." },
      { title: "Image Compression (Next-gen)", desc: "Set up WebP/AVIF file exports, proper width/height constraints, and smart preloading." },
      { title: "Layout Shift Prevents", desc: "Anchor visual boxes to block jittery elements during loading, maintaining layout stability." }
    ],
    process: [
      { step: "01", title: "Performance Diagnostics", desc: "Trace layout shifts, server response latency, and large JS file bundles." },
      { step: "02", title: "Code Refactoring", desc: "Apply Next.js dynamics, optimize CSS structures, and adjust font loader subsets." },
      { step: "03", title: "CWV Validation", desc: "Test pages using Google PageSpeed Insights to verify scores surpass 95+." }
    ],
    faqs: [
      { question: "What is LCP, CLS, and INP?", answer: "LCP measures loading speed, CLS checks layout stability during loads, and INP tracks interactive responsiveness. They represent Google's Core Web Vitals." },
      { question: "Can you optimize WordPress speed?", answer: "While we can optimize WordPress sites via plugins, migrating the frontend to Next.js guarantees the best performance scores." }
    ],
    testimonials: [
      { quote: "Our mobile bounce rates dropped significantly after the team optimized our assets. The site is fast and smooth.", author: "Tech Lead", role: "E-Commerce Director" }
    ],
    relatedServices: ["website-redesign", "seo-services", "maintenance"]
  }
];

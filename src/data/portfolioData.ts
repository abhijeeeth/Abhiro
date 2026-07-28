export interface Project {
  id: number;
  slug: string;
  name: string;
  url: string;
  category: string;
  description: string;
  technologies: string[];
  featured: boolean;
  client: string;
  bgGradient: string;
  clientOverview: string;
  caseStudy: {
    challenge: string;
    solution: string;
    timeline: string;
    result: string;
  };
  lighthouse: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  seoImprovements: string[];
  performanceMetrics: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export const portfolioData: Project[] = [
  {
    id: 1,
    slug: "farmspice",
    name: "FarmSpice",
    url: "https://farmspice.vercel.app/",
    category: "E-Commerce",
    description: "A modern e-commerce platform for premium Kerala spices featuring responsive design, product catalog, and a seamless shopping experience.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "Zod"],
    featured: true,
    client: "FarmSpice Premium Spices",
    bgGradient: "from-amber-950/60 to-orange-950/80",
    clientOverview: "FarmSpice is a direct-to-consumer brand specializing in sourcing and exporting high-grade natural spices from the foothills of Kerala, India. They wanted to expand their reach across urban centers via an intuitive, visual web store.",
    caseStudy: {
      challenge: "Building an immersive shopping experience that conveys the quality of premium spices while maintaining lightning-fast load times on cellular connections.",
      solution: "Implemented Next.js Server Components for static product listings, optimized image sizes, and streamlined the customer shopping path.",
      timeline: "3 Weeks",
      result: "Successfully launched the store with 100% responsive design and direct, fast shopping checkouts."
    },
    lighthouse: {
      performance: 98,
      accessibility: 100,
      bestPractices: 100,
      seo: 100
    },
    seoImprovements: [
      "Dynamic Product Schema structured markup implementation",
      "Custom semantic HTML tag hierarchy matching product catalogs",
      "XML sitemap indexation and Search Console integration"
    ],
    performanceMetrics: [
      "LCP (Largest Contentful Paint) reduced to 1.1s",
      "CLS (Cumulative Layout Shift) locked to 0.0",
      "Images converted to WebP formats reducing payload size by 70%"
    ],
    testimonial: {
      quote: "Our online storefront looks and runs beautifully. Customer retention increased, and shipping checkouts are fully automated.",
      author: "Tissymol Blesson",
      role: "Co-Founder, FarmSpice"
    }
  },
  {
    id: 2,
    slug: "morris-english-academy",
    name: "Morris English Academy",
    url: "https://www.morrisenglishacademy.com/",
    category: "Education",
    description: "Professional website for an English language academy showcasing courses, admissions, faculty, and student-focused learning resources.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    featured: true,
    client: "Morris English Academy",
    bgGradient: "from-blue-950/60 to-indigo-950/80",
    clientOverview: "Morris English Academy provides specialized IELTS, OET, and English language fluency courses to students and healthcare professionals moving abroad.",
    caseStudy: {
      challenge: "Presenting detailed information on admissions, faculties, and learning resources without overwhelming new applicants.",
      solution: "Designed a clean, tabbed layout structure and an interactive admissions helper component to guide users step-by-step.",
      timeline: "4 Weeks",
      result: "Successfully established a professional web presence with streamlined digital enrollment forms, significantly reducing administrative intake workloads."
    },
    lighthouse: {
      performance: 96,
      accessibility: 98,
      bestPractices: 100,
      seo: 100
    },
    seoImprovements: [
      "Organization and Course Schema markup integration",
      "Dynamic title structures for local course searches",
      "Accessible heading levels for keyboard compatibility"
    ],
    performanceMetrics: [
      "TTFB (Time to First Byte) under 80ms on global CDNs",
      "Bundle size reduced by lazy loading interactive maps",
      "Zero layout shifts during font loads using swap attributes"
    ],
    testimonial: {
      quote: "The digital enrollment flow has cut administrative paperwork in half. The site loads instantly and conveys our academy's professional standards.",
      author: "Dr. Morris Joseph",
      role: "Director, Morris English Academy"
    }
  },
  {
    id: 3,
    slug: "momeira",
    name: "Momeira",
    url: "https://www.momeira.com/",
    category: "Business",
    description: "Corporate website designed to strengthen brand identity with a clean interface, responsive layouts, and lead generation features.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Nodemailer"],
    featured: true,
    client: "Momeira Group",
    bgGradient: "from-slate-900/60 to-zinc-950/80",
    clientOverview: "Momeira is a diversified business group operating in construction materials and real estate consulting, requiring an authoritative, high-end online home.",
    caseStudy: {
      challenge: "Strengthening the corporate brand identity with clean layouts while maintaining a high volume of lead generations.",
      solution: "Developed custom corporate landing sections, interactive service pages, and highly conversion-optimized lead capture forms.",
      timeline: "3 Weeks",
      result: "Created a modern corporate identity that cleanly communicates services and has simplified the customer inquiry flow."
    },
    lighthouse: {
      performance: 97,
      accessibility: 96,
      bestPractices: 100,
      seo: 100
    },
    seoImprovements: [
      "LocalBusiness and Corporation JSON-LD schema config",
      "Secure HTTPS metadata parameters",
      "Optimized anchor link labels for search accessibility"
    ],
    performanceMetrics: [
      "Fully responsive grid architecture operating down to 320px screen widths",
      "Critical CSS code-splitting",
      "Interactive consultation widget loads asynchronously"
    ],
    testimonial: {
      quote: "A premium corporate presence that accurately reflects our group's size and values. Lead generation forms have worked flawlessly since launch.",
      author: "Blesson Joseph",
      role: "Managing Director, Momeira Group"
    }
  },
  {
    id: 4,
    slug: "momeira-landing-page",
    name: "Momeira Landing Page",
    url: "https://momeira-blessonandtissymol.vercel.app/",
    category: "Landing Page",
    description: "A modern promotional landing page built for fast performance, high conversion rates, and mobile-first responsiveness.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    featured: false,
    client: "Momeira Promotions",
    bgGradient: "from-emerald-950/60 to-teal-950/80",
    clientOverview: "Momeira Promotions ran a high-budget paid social campaign requiring a distraction-free, lightning-fast landing page to convert ad clicks into hot leads.",
    caseStudy: {
      challenge: "Maximizing conversion rates and performance for promotional campaigns on mobile devices.",
      solution: "Built a highly optimized, single-page promotional layout with compressed webp resources and static HTML exports.",
      timeline: "1.5 Weeks",
      result: "Delivered a lightning-fast promotional page with a 99% performance score, providing a friction-free intake channel for advertising campaigns."
    },
    lighthouse: {
      performance: 99,
      accessibility: 100,
      bestPractices: 100,
      seo: 100
    },
    seoImprovements: [
      "Noindex headers configured for private promotion paths to prevent duplicate content flags",
      "Strict h1 single-heading layouts targeting campaign keywords"
    ],
    performanceMetrics: [
      "Total bundle size under 45KB",
      "LCP clocking in at 0.7s on mobile connections",
      "Fully responsive flexbox form flow optimized for thumbs"
    ],
    testimonial: {
      quote: "Our ad campaign's conversion rate increased. The speed of this page on mobile is incredible.",
      author: "Promo Campaign Coordinator",
      role: "Marketing Manager"
    }
  },
  {
    id: 5,
    slug: "sachu-preksha",
    name: "Sachu & Preksha",
    url: "https://sachupreksha.vercel.app/",
    category: "Personal Website",
    description: "A beautifully designed personal website featuring elegant visuals, smooth animations, and a responsive user experience.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    featured: false,
    client: "Sachu & Preksha Personal Brand",
    bgGradient: "from-pink-950/60 to-rose-950/80",
    clientOverview: "Sachu & Preksha are a creative couple working in media production and wedding planning who wanted a premium personal website to show their collaborative works.",
    caseStudy: {
      challenge: "Creating an elegant personal brand statement featuring smooth, premium motion dynamics without slowing down mobile browsers.",
      solution: "Used Framer Motion layout sync and lightweight SVG paths to implement custom, performant visual animations.",
      timeline: "2 Weeks",
      result: "Delivered a gorgeous interactive layout running at 60fps on all devices."
    },
    lighthouse: {
      performance: 95,
      accessibility: 98,
      bestPractices: 100,
      seo: 100
    },
    seoImprovements: [
      "Image alt structures for visual search placement",
      "Personal profile schema markup integration",
      "Breadcrumbs configuration for crawlers"
    ],
    performanceMetrics: [
      "Animation frames running at a locked 60fps on mobile browsers",
      "GPU-accelerated animations using CSS transform layer overrides"
    ],
    testimonial: {
      quote: "Our site captures our creative style perfectly. The motion and transitions are incredibly premium.",
      author: "Sachu & Preksha",
      role: "Co-Creators"
    }
  },
  {
    id: 6,
    slug: "roshni-boutiques",
    name: "Roshni Boutiques",
    url: "https://roshniboutiques.com/",
    category: "Fashion",
    description: "Boutique website showcasing fashion collections with an elegant interface, responsive layouts, and customer-friendly navigation.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Embla Carousel"],
    featured: true,
    client: "Roshni Boutiques",
    bgGradient: "from-purple-900/60 to-violet-950/80",
    clientOverview: "Roshni Boutiques is a designer wedding outfit and ethnic wear showroom catering to domestic and global premium client bases.",
    caseStudy: {
      challenge: "Designing a visual, elegant fashion catalog that facilitates easy collection discovery and customer navigation.",
      solution: "Engineered a minimalist interactive layout, simple filter controls, and clean gallery cards with high-contrast font combinations.",
      timeline: "3 Weeks",
      result: "Significantly improved customer engagement and catalog page retention rates."
    },
    lighthouse: {
      performance: 96,
      accessibility: 100,
      bestPractices: 100,
      seo: 100
    },
    seoImprovements: [
      "Structured product catalog listing tags",
      "High-contrast text markers mapping accessibility standards",
      "Semantic image descriptions for all designer patterns"
    ],
    performanceMetrics: [
      "Optimized carousels using CSS snap-scroll layouts",
      "Images compressed into WebP reducing render times",
      "CLS score of 0.01 during layout state updates"
    ],
    testimonial: {
      quote: "The visual lookup and ethnic wear collection displays look incredibly luxurious. Customer retention times on catalog pages doubled.",
      author: "Roshni Shaji",
      role: "Founder, Roshni Boutiques"
    }
  }
];

export const COMPANY = {
  name: "Tapas Growth",
  legalName: "Tapas Growth Inc.",
  email: "hello@tapasgrowth.com",
  url: "https://tapasgrowth.com",
} as const;

export const STRIPE_LINKS = {
  growth: "https://buy.stripe.com/PLACEHOLDER_GROWTH",
  scale: "https://buy.stripe.com/PLACEHOLDER_SCALE",
} as const;

export const SERVICES = [
  {
    name: "Paywall Experiments",
    description:
      "We design and run data-backed experiments to test pricing, design, and messaging. We pinpoint exactly what drives conversion so you don't have to guess.",
  },
  {
    name: "Pricing Strategy",
    description:
      "We find what's leaking and fix pricing inefficiencies. Stop leaving money on the table with a one-size-fits-all model.",
  },
  {
    name: "Onboarding Optimization",
    description:
      "Reduce activation energy. We refine your onboarding flows so users experience the core value of your app instantly, dramatically boosting paid conversions.",
  },
  {
    name: "Lifecycle & ASO",
    description:
      "Full funnel growth. From App Store listing keyword strategy to lifecycle retention hooks, we build systems that generate compounding, predictable revenue.",
  },
] as const;

export const STATS = [
  { value: 50, suffix: "M+", label: "in App Revenue Driven" },
  { value: 10000, suffix: "+", label: "Paywalls Optimized" },
  { value: 50, suffix: "+", label: "Apps Scaled" },
] as const;

export const PRICING = {
  growth: {
    name: "Growth Partner",
    badge: "No Growth, No Payment",
    price: "$1,500",
    priceDetail: "/mo + 20% of attributed revenue above baseline",
    commitment: "3-month commitment, then month-to-month",
    qualifier: "For apps making $50K+/mo",
    valueProp: "Guaranteed results. We only make money if you make money.",
    features: [
      "Unlimited paywall experiments",
      "Dynamic pricing structure design",
      "Onboarding conversion optimization",
      "Revenue leak audit & monitoring",
      "Weekly strategy & performance updates",
      "Everything on the menu",
    ],
    stripeLink: STRIPE_LINKS.growth,
  },
  scale: {
    name: "Revenue Intensive",
    badge: "Full Service Scaling",
    price: "$7,000",
    priceDetail: "/mo flat rate",
    commitment: "Month-to-month",
    qualifier: "For apps ready to dominate their category",
    valueProp: null,
    features: [
      "Dedicated growth strategy leadership",
      "Aggressive experiment velocity (1-2/week)",
      "Full onboarding & lifecycle redesigns",
      "Comprehensive ASO & keyword management",
      "Custom user psychographic modeling",
      "Priority execution across all services",
    ],
    stripeLink: STRIPE_LINKS.scale,
  },
} as const;


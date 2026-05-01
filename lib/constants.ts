export const COMPANY = {
  name: "Tapas Growth",
  legalName: "Tapas Growth Inc.",
  email: "hello@tapasgrowth.com",
  url: "https://tapasgrowth.com",
  bookingUrl: "https://cal.com/jonathandparra/30min",
} as const;

export const STRIPE_LINKS = {
  experiment: "https://buy.stripe.com/cNi8wP1LhaMdazJ9z1aR205",
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
      "Full funnel consumer app growth. From App Store listing keyword strategy to lifecycle retention hooks, we build systems that generate compounding, predictable revenue.",
  },
] as const;

export const STATS = [
  { value: 50, suffix: "M+", label: "in Revenue Driven" },
  { value: 10000, suffix: "+", label: "Paywalls Optimized" },
  { value: 55, suffix: "+", label: "Apps Scaled" },
] as const;

export const FRAMEWORK_STEPS = [
  {
    step: "01",
    title: "Revenue Audit",
    description:
      "We tear apart your paywall, pricing, onboarding, and lifecycle flows to find exactly where revenue is leaking.",
  },
  {
    step: "02",
    title: "Design & Test",
    description:
      "We design high-converting paywalls and run rapid A/B experiments. No guessing — every change is data-backed.",
  },
  {
    step: "03",
    title: "Lifecycle & Onboarding",
    description:
      "We rebuild your onboarding flow and lifecycle hooks so users hit the aha-moment faster and stay longer.",
  },
  {
    step: "04",
    title: "Ongoing Optimization",
    description:
      "We keep optimizing weekly. New experiments, new learnings, compounding revenue growth month over month.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What kind of apps do you work with?",
    answer:
      "Consumer subscription apps making $50K+/mo in revenue. We specialize in health, fitness, productivity, lifestyle, and media apps — any category where subscriptions drive the business.",
  },
  {
    question: "How does the à la carte experiment work?",
    answer:
      "Pick one onboarding flow or other placement you want to test. We design the hypothesis, build the variants, run the experiment, and deliver a written analysis with next steps. One flat $1,500 fee — one-time, no subscription, no commitment.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "First experiments go live within 2 weeks. Most clients see meaningful revenue uplift within 30–60 days as we iterate on paywall design, pricing, and onboarding flows.",
  },
  {
    question: "What tools do you work with?",
    answer:
      "We're tool-agnostic but deeply experienced with RevenueCat, Superwall, Adapty, Amplitude, and Mixpanel. We integrate with your existing stack — no need to migrate.",
  },
  {
    question: "Do you replace our in-house growth team?",
    answer:
      "No — we're a force multiplier. Think of us as a specialized growth kitchen working alongside your team, bringing paywall expertise and experiment velocity you'd struggle to build internally.",
  },
  {
    question: "What's the minimum commitment?",
    answer:
      "À La Carte: one-time, no commitment. Scale: month-to-month from day one. No long-term lock-ins.",
  },
  {
    question: "How is Tapas Growth different from other agencies?",
    answer:
      "4,500+ paywalls designed, two co-founders with complementary skills (paywall design + full-funnel growth), and a low-risk à la carte option so you can test the kitchen before committing. We don't just advise — we execute.",
  },
] as const;

export const PRICING = {
  experiment: {
    name: "À La Carte",
    subtitle: "Single Experiment",
    price: "$1,500",
    priceDetail: "per experiment",
    commitment: "One-time, no subscription",
    qualifier: "For apps that want to optimize one placement",
    valueProp: "One fully-managed experiment. Zero strings attached.",
    cta: "Run an Experiment",
    features: [
      "One end-to-end onboarding or other placement experiment",
      "Hypothesis & success-metric definition",
      "Custom design in Figma or any no-code builder",
      "Statistical analysis & written write-up",
      "Recommended next steps",
    ],
    stripeLink: STRIPE_LINKS.experiment,
  },
  scale: {
    name: "Scale",
    badge: "Most Popular",
    subtitle: "Complete lifecycle management",
    price: "$7,000",
    priceDetail: "/mo flat rate",
    commitment: "Month-to-month — cancel anytime",
    qualifier: "For apps that want complete experimentation coverage",
    valueProp: "Unlimited experiments and design requests",
    cta: "Start Scaling",
    features: [
      "Everything on the menu",
      "Dedicated growth strategy leadership",
      "Aggressive experiment velocity (2–3/week)",
      "Strategy doc written with you to map full month's experimentation",
      "Priority execution across all services",
    ],
    stripeLink: STRIPE_LINKS.scale,
  },
} as const;


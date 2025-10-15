import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type MenuItem = {
    name: string;
    description: string;
    price: string;
    tag?: string;
};

type MenuCategory = {
    category: string;
    description: string;
    items: MenuItem[];
};

const menuItems: MenuCategory[] = [
    {
        category: "Memberships",
        description: "Ongoing growth partnerships tailored to your stage",
        items: [
            {
                name: "Starter",
                description:
                    "For indies or budding studios (MRR $10K-50K). 1 monthly experiment with design, setup, monitoring, and reporting. Monthly insights and growth recommendations.",
                price: "$1,500/mo",
                tag: "Popular",
            },
            {
                name: "Growth",
                description:
                    "For mid-sized apps or growing studios (MRR $50K-$500K). 4 monthly experiments, weekly strategy calls, dedicated Slack channel, and partial growth management.",
                price: "$5,000/mo",
                tag: "Best Value",
            },
            {
                name: "Scale",
                description:
                    "For larger portfolios (MRR $500K+). 4 experiments per app across unlimited apps, daily updates, weekly strategy calls, end-to-end ASO, full app audit, and full growth management.",
                price: "$19,950/mo",
                tag: "1 Spot Open",
            },
        ],
    },
    {
        category: "À la carte",
        description: "One-time services to jumpstart your growth",
        items: [
            {
                name: "Custom Paywall Design",
                description:
                    "We'll design a paywall concept for you based on high-performing paywalls we've seen/done for other apps. Across Superwall, RevenueCat, or Adapty. Doesn't include experiment setups or management.",
                price: "$800",
            },
            {
                name: "1 experiment",
                description:
                    "Experiment design, setup, monitoring, and growth recommendations (async report).",
                price: "$1,500",
            },
            {
                name: "ASO review",
                description:
                    "App Store listing review with new screenshots, a preview video, and optimized metadata to boost conversions.",
                price: "$1,500",
            },
        ],
    },
];

export function ServicesMenu() {
    return (
        <section id="services" className="py-20 bg-card/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
                        Our Menu
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Each service is carefully prepared with your success in
                        mind. Mix and match to create the perfect growth recipe
                        for your app.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card className="border-2 shadow-xl bg-gradient-to-b from-primary/5 to-transparent">
                        <CardHeader className="text-center pb-8">
                            <CardTitle className="text-3xl font-serif">
                                Growth Services
                            </CardTitle>
                            <CardDescription className="text-lg mt-2">
                                Expertly Crafted Solutions
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-8">
                            {menuItems.map((category, categoryIndex) => (
                                <div key={category.category}>
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold mb-2 text-primary font-serif">
                                            {category.category}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-6">
                                            {category.description}
                                        </p>

                                        <div className="space-y-4">
                                            {category.items.map(
                                                (item, itemIndex) => (
                                                    <div
                                                        key={itemIndex}
                                                        className="flex justify-between items-start gap-4"
                                                    >
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <h4 className="font-semibold text-lg">
                                                                    {item.name}
                                                                </h4>
                                                                {item.tag && (
                                                                    <Badge
                                                                        variant="secondary"
                                                                        className="text-xs"
                                                                    >
                                                                        {
                                                                            item.tag
                                                                        }
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                            <p className="text-sm text-muted-foreground">
                                                                {
                                                                    item.description
                                                                }
                                                            </p>
                                                        </div>
                                                        <span className="text-sm font-medium text-primary whitespace-nowrap">
                                                            {item.price}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {categoryIndex < menuItems.length - 1 && (
                                        <Separator className="my-8" />
                                    )}
                                </div>
                            ))}

                            <div className="mt-8 p-6 bg-secondary/10 rounded-lg text-center">
                                <p className="text-sm text-muted-foreground mb-2">
                                    All services are customized to your specific
                                    needs
                                </p>
                                <p className="font-semibold text-primary">
                                    Contact us for a personalized quote
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

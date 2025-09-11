import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const menuItems = [
  {
    category: "Appetizers",
    description: "Start your growth journey",
    items: [
      {
        name: "Growth Audit",
        description: "A comprehensive analysis of your app's current state",
        price: "Coming Soon",
        tag: "Popular",
      },
      {
        name: "Market Research",
        description: "Deep dive into your competitive landscape",
        price: "Coming Soon",
      },
      {
        name: "User Persona Mapping",
        description: "Understanding your ideal customer profile",
        price: "Coming Soon",
      },
    ],
  },
  {
    category: "Main Courses",
    description: "Full-service growth solutions",
    items: [
      {
        name: "Acquisition Strategy",
        description: "Multi-channel user acquisition planning and execution",
        price: "Premium",
        tag: "Chef's Special",
      },
      {
        name: "Retention Optimization",
        description: "Keep users engaged and coming back for more",
        price: "Premium",
      },
      {
        name: "Monetization Enhancement",
        description: "Maximize revenue per user with proven tactics",
        price: "Premium",
      },
    ],
  },
  {
    category: "Desserts",
    description: "Sweet finishing touches",
    items: [
      {
        name: "A/B Testing Suite",
        description: "Continuous optimization through experimentation",
        price: "À la carte",
      },
      {
        name: "Analytics Setup",
        description: "Track what matters with proper instrumentation",
        price: "À la carte",
      },
      {
        name: "Growth Loops Design",
        description: "Create self-sustaining growth mechanisms",
        price: "À la carte",
        tag: "New",
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
            Each service is carefully prepared with your success in mind. 
            Mix and match to create the perfect growth recipe for your app.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 shadow-xl">
            <CardHeader className="text-center pb-8 bg-gradient-to-b from-primary/5 to-transparent">
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
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-lg">
                                {item.name}
                              </h4>
                              {item.tag && (
                                <Badge variant="secondary" className="text-xs">
                                  {item.tag}
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                          <span className="text-sm font-medium text-primary whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {categoryIndex < menuItems.length - 1 && (
                    <Separator className="my-8" />
                  )}
                </div>
              ))}
              
              <div className="mt-8 p-6 bg-secondary/10 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  All services are customized to your specific needs
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
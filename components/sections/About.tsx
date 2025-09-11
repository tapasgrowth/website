import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Meet Your <span className="text-primary">Growth Chef</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Like a master chef crafting the perfect tapas experience, I bring together 
              the finest ingredients of growth strategy to create something extraordinary 
              for your app.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              With over a decade of experience helping consumer apps reach millions of users, 
              I&apos;ve perfected the recipe for sustainable, scalable growth. From scrappy startups 
              to established brands, I&apos;ve served growth strategies that deliver real results.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">100M+</div>
                  <div className="text-sm text-muted-foreground">Users Acquired</div>
                </CardContent>
              </Card>
              <Card className="border-secondary/20 bg-secondary/5">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-muted-foreground">Apps Scaled</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden border-2 shadow-xl">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4 font-serif">
                      🍽️
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Experience Matters</h3>
                    <p className="text-muted-foreground">
                      Former growth lead at top consumer apps
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-full p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-xs">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
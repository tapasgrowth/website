import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge 
            variant="secondary" 
            className="mb-6 px-4 py-1 text-sm font-medium bg-secondary/20 text-secondary-foreground border-secondary/30"
          >
            Now Serving Growth Strategies
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-[family-name:var(--font-playfair)]">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tapas Growth
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Small plates. Big results. Savor expertly crafted growth strategies for consumer apps, served one delicious insight at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
            >
              Reserve Your Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 font-semibold px-8 py-6 text-lg"
            >
              View the Menu
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>5-Star Service</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📱</span>
              <span>100M+ Users Served</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span>10+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
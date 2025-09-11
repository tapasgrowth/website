import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto border-2 shadow-xl overflow-hidden">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Ready to <span className="text-primary">Taste Success?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help your app reach its full potential. 
              Book a free consultation and discover what&apos;s possible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
              >
                Schedule Your Free Consultation
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>30-minute call</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Actionable insights</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
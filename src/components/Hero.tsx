import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fitness-coach.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            TRANSFORM YOUR
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              BODY & MIND
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Elite personal training and online coaching programs designed to help you achieve your fitness goals with expert guidance and proven results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" className="text-lg">
              Start Training Today
            </Button>
            <Button variant="outline" size="xl" className="text-lg border-2 border-primary hover:bg-primary hover:text-primary-foreground">
              View Programs
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl">
            <div>
              <div className="text-4xl font-black text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Transformations</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

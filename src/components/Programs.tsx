import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Trophy, Zap } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Weight Loss Transformation",
      description: "Sustainable fat loss through personalized training and nutrition. Get the body you've always wanted.",
      features: ["Custom meal plans", "3-5 workouts/week", "Weekly progress tracking", "24/7 support"],
      duration: "12 weeks",
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Strength & Muscle Building",
      description: "Build serious strength and muscle mass with proven progressive overload programs.",
      features: ["Periodized training", "Supplement guidance", "Form video analysis", "Strength assessments"],
      duration: "16 weeks",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Online Coaching",
      description: "Train anywhere with full remote coaching, custom programming, and unlimited support.",
      features: ["App-based workouts", "Video check-ins", "Flexible scheduling", "Lifestyle integration"],
      duration: "Monthly",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            TRAINING <span className="bg-gradient-accent bg-clip-text text-transparent">PROGRAMS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the program that fits your goals and lifestyle. All programs include personalized support and proven results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {program.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{program.title}</CardTitle>
                <CardDescription className="text-base">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-border mt-4">
                    <span className="text-sm text-muted-foreground">Duration: </span>
                    <span className="text-primary font-semibold">{program.duration}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="energy" className="w-full">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;

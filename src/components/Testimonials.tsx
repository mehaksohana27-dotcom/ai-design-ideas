import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      result: "Lost 45 lbs in 4 months",
      text: "Alex completely changed my relationship with fitness. The personalized program and constant support made all the difference. I've never felt stronger or more confident!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      result: "Gained 20 lbs muscle",
      text: "After years of spinning my wheels at the gym, Alex's structured approach helped me finally build the muscle I wanted. His knowledge of nutrition and training is unmatched.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      result: "Completed first marathon",
      text: "I went from couch to marathon finisher in 6 months. Alex's progressive training kept me injury-free and motivated every step of the way. Couldn't have done it without him!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            CLIENT <span className="bg-gradient-accent bg-clip-text text-transparent">SUCCESS STORIES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real transformations from real people. These are just a few of the amazing results my clients have achieved.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-secondary text-xl">★</span>
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-primary font-semibold text-sm">{testimonial.result}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

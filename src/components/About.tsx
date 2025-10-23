const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-center">
            ABOUT YOUR 
            <span className="block bg-gradient-accent bg-clip-text text-transparent">COACH</span>
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I'm Alex Morgan, a certified personal trainer with over 15 years of experience in transforming lives through fitness. My journey started as a competitive athlete, and I've dedicated my career to helping others achieve their peak physical and mental performance.
            </p>
            
            <p>
              My approach combines science-backed training methods with personalized nutrition guidance and mindset coaching. I believe that true fitness transformation goes beyond the gym—it's about building sustainable habits that enhance every aspect of your life.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-3">Certifications</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• NASM Certified Personal Trainer</li>
                  <li>• Sports Nutrition Specialist</li>
                  <li>• Functional Movement Screen</li>
                  <li>• Precision Nutrition Level 2</li>
                </ul>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-secondary mb-3">Specializations</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Strength & Conditioning</li>
                  <li>• Weight Loss Transformation</li>
                  <li>• Athletic Performance</li>
                  <li>• Lifestyle Coaching</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

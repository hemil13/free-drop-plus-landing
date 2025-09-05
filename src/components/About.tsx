const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
            Our Mission
          </h2>
          
          <div className="glass-effect rounded-2xl p-8 md:p-12 wave-shadow">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-muted-foreground">
              At <span className="font-bold text-primary">FreeDropPlus</span>, we believe that access to clean, refreshing water 
              should never be a barrier. Our innovative advertising-supported model makes premium hydration 
              accessible to everyone, everywhere.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">100% Free</h3>
                <p className="text-muted-foreground">No hidden costs, no subscriptions. Pure water, pure value.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Your Choice</h3>
                <p className="text-muted-foreground">Select between sustainable glass or convenient plastic bottles.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Community First</h3>
                <p className="text-muted-foreground">Building healthier communities through accessible hydration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in">
              Innovative <span className="gradient-text">Technology Solutions</span> for Modern Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              BR Tech provides cutting-edge POS systems and mobile commerce applications to streamline your business operations and boost customer engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button className="bg-brtech-600 hover:bg-brtech-700 text-white px-8 py-6 text-lg">
                Explore Products
              </Button>
              <Button variant="outline" className="border-brtech-600 text-brtech-600 hover:bg-brtech-50 px-8 py-6 text-lg">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="flex-1 relative w-full h-64 md:h-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-purple opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-brtech-400 opacity-20 rounded-full blur-2xl"></div>
            <div className="relative z-10 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                alt="Technology solutions" 
                className="rounded-lg shadow-2xl max-w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

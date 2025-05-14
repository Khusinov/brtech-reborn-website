
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductFeature from '@/components/ProductFeature';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { CreditCard, Smartphone } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Products Section */}
        <section id="products" className="py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Products</span></h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our innovative solutions designed to help your business thrive in the digital age.
              </p>
            </div>
            
            <ProductFeature 
              title="Advanced POS System"
              description="Our state-of-the-art Point of Sale system streamlines your business operations, making transactions faster and management easier."
              imgSrc="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
              features={[
                "Intuitive touch-screen interface",
                "Real-time inventory management",
                "Multi-location support",
                "Comprehensive reporting and analytics",
                "Integrated payment processing",
                "Customer loyalty program integration"
              ]}
              buttonText="Learn More About POS"
              icon={<CreditCard className="h-6 w-6" />}
            />
            
            <ProductFeature 
              title="E-commerce Mobile Apps"
              description="Extend your reach with our customized e-commerce applications for both iOS and Android platforms, providing your customers with a seamless shopping experience."
              imgSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
              features={[
                "Beautiful, intuitive user interface",
                "Secure payment gateways",
                "Customer account management",
                "Push notifications for promotions",
                "Order tracking and history",
                "Integrated loyalty rewards system"
              ]}
              buttonText="Explore Mobile Solutions"
              reversed={true}
              icon={<Smartphone className="h-6 w-6" />}
            />
          </div>
        </section>
        
        <Features />
        
        <Testimonials />
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

import React from 'react';
import { Check, Zap, Clock, Lock, Globe, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-brtech-600" />,
      title: 'Fast Performance',
      description: "Lightning-fast systems that won't slow down your business operations"
    },
    {
      icon: <Shield className="h-6 w-6 text-brtech-600" />,
      title: 'Secure Transactions',
      description: 'Best-in-class security protocols to protect customer data'
    },
    {
      icon: <Clock className="h-6 w-6 text-brtech-600" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance whenever you need it'
    },
    {
      icon: <Globe className="h-6 w-6 text-brtech-600" />,
      title: 'Global Compatibility',
      description: 'Solutions that work across different regions and currencies'
    },
    {
      icon: <Check className="h-6 w-6 text-brtech-600" />,
      title: 'Easy Integration',
      description: 'Seamless integration with your existing business systems'
    },
    {
      icon: <Lock className="h-6 w-6 text-brtech-600" />,
      title: 'Data Analytics',
      description: 'Powerful insights to help your business make better decisions'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="gradient-text">BRTech</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our solutions are designed with your business needs in mind, offering unmatched features that set us apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brtech-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

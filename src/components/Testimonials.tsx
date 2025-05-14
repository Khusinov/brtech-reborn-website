
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "BRTech's POS system revolutionized how we handle transactions. It's intuitive, fast and our staff love using it.",
      author: "Sarah Johnson",
      role: "Restaurant Owner",
      company: "Taste of Home"
    },
    {
      quote: "The e-commerce app developed by BRTech helped us increase our mobile sales by 40% within just three months.",
      author: "Michael Chen",
      role: "Marketing Director",
      company: "Urban Clothing Co."
    },
    {
      quote: "The support team at BRTech is exceptional. Any issues we've had were resolved quickly and professionally.",
      author: "Alex Rodriguez",
      role: "Operations Manager",
      company: "Metro Supermarkets"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied clients have to say about our solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="mb-4 text-brtech-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

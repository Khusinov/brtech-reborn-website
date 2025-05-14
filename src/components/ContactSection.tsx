
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="gradient-text">Touch</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our products or services? Reach out to us and our team will be happy to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-1">
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-brtech-100 rounded-full text-brtech-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email Us</h4>
                  <p className="text-gray-600 mt-1">info@brtech.uz</p>
                  <p className="text-gray-600">support@brtech.uz</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-brtech-100 rounded-full text-brtech-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Call Us</h4>
                  <p className="text-gray-600 mt-1">+998 99 123 45 67</p>
                  <p className="text-gray-600">+998 99 765 43 21</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-brtech-100 rounded-full text-brtech-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Visit Us</h4>
                  <p className="text-gray-600 mt-1">
                    123 Business Avenue, Tashkent
                  </p>
                  <p className="text-gray-600">Uzbekistan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <form className="bg-white p-6 rounded-xl shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                  <Input id="name" placeholder="John Doe" className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="w-full" />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                <Input id="subject" placeholder="How can we help you?" className="w-full" />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  rows={5}
                  className="w-full"
                />
              </div>

              <Button className="bg-brtech-600 hover:bg-brtech-700 w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

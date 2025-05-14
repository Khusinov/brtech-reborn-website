
import React from 'react';
import { Button } from "@/components/ui/button";

interface ProductFeatureProps {
  title: string;
  description: string;
  imgSrc: string;
  features: string[];
  buttonText: string;
  reversed?: boolean;
  icon: React.ReactNode;
}

const ProductFeature = ({
  title,
  description,
  imgSrc,
  features,
  buttonText,
  reversed = false,
  icon
}: ProductFeatureProps) => {
  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 py-16`}>
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brtech-100 text-brtech-600 mb-4">
          {icon}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="text-lg text-gray-600">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brtech-600 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="pt-4">
          <Button className="bg-brtech-600 hover:bg-brtech-700">{buttonText}</Button>
        </div>
      </div>
      <div className="flex-1 w-full relative">
        <div className={`absolute inset-0 bg-gradient-to-r ${reversed ? 'from-accent-purple/20 to-brtech-400/20' : 'from-brtech-400/20 to-accent-purple/20'} rounded-xl blur-xl opacity-50 -z-10 transform scale-95`}></div>
        <img 
          src={imgSrc}
          alt={title}
          className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]"
        />
      </div>
    </div>
  );
};

export default ProductFeature;

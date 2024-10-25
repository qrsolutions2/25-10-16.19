import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PricingSection: React.FC<{ id: string }> = ({ id }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');
  const [currentSlide, setCurrentSlide] = useState(0);

  const plans = [
    {
      name: 'Basic Plan',
      monthlyPrice: 45,
      quarterlyPrice: 120,
      description: '15 QR codes • Ideal for small teams',
      isPopular: false
    },
    {
      name: 'Standard Plan',
      monthlyPrice: 135,
      quarterlyPrice: 360,
      description: '50 QR codes • For mid-sized businesses',
      isPopular: true
    },
    {
      name: 'Ultimate Plan',
      monthlyPrice: 250,
      quarterlyPrice: 675,
      description: '90 QR codes • For large organizations',
      isPopular: false
    },
    {
      name: 'VIP',
      monthlyPrice: null,
      quarterlyPrice: null,
      description: 'Custom solutions & managed services',
      isPopular: false
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % plans.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + plans.length) % plans.length);
  };

  return (
    <section id={id} className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
          <div className="inline-flex items-center bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'monthly' ? 'bg-blue-600 text-white' : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'quarterly' ? 'bg-blue-600 text-white' : 'text-gray-600'
              }`}
            >
              Every 3 months
            </button>
          </div>
        </div>
        
        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto relative">
            {plans.map((plan) => (
              <div key={plan.name} className="flex flex-col">
                {plan.isPopular && (
                  <div className="text-center mb-2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className={`flex-1 rounded-lg ${
                  plan.isPopular 
                    ? 'bg-white shadow-xl ring-2 ring-blue-600 transform -translate-y-2' 
                    : 'bg-white border border-gray-200'
                  } p-6`}
                >
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm h-12">{plan.description}</p>
                  </div>
                  
                  {(billingCycle === 'monthly' ? plan.monthlyPrice : plan.quarterlyPrice) ? (
                    <div className="text-center mb-6">
                      <span className="text-4xl font-bold">
                        £{billingCycle === 'monthly' ? plan.monthlyPrice : plan.quarterlyPrice}
                      </span>
                      <span className="text-gray-500 text-sm">
                        /{billingCycle === 'monthly' ? 'mo' : '3mo'}
                      </span>
                    </div>
                  ) : (
                    <div className="text-center mb-6">
                      <span className="text-2xl font-bold">Custom Pricing</span>
                    </div>
                  )}
                  
                  <button
                    className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                      plan.isPopular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {plan.monthlyPrice ? 'Subscribe Now' : 'Contact Sales'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {plans.map((plan) => (
                <div key={plan.name} className="w-full flex-shrink-0 px-4">
                  {plan.isPopular && (
                    <div className="text-center mb-2">
                      <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <div className={`rounded-lg ${
                    plan.isPopular 
                      ? 'bg-white shadow-xl ring-2 ring-blue-600' 
                      : 'bg-white border border-gray-200'
                    } p-6`}
                  >
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-gray-600 text-sm">{plan.description}</p>
                    </div>
                    
                    {(billingCycle === 'monthly' ? plan.monthlyPrice : plan.quarterlyPrice) ? (
                      <div className="text-center mb-6">
                        <span className="text-4xl font-bold">
                          £{billingCycle === 'monthly' ? plan.monthlyPrice : plan.quarterlyPrice}
                        </span>
                        <span className="text-gray-500 text-sm">
                          /{billingCycle === 'monthly' ? 'mo' : '3mo'}
                        </span>
                      </div>
                    ) : (
                      <div className="text-center mb-6">
                        <span className="text-2xl font-bold">Custom Pricing</span>
                      </div>
                    )}
                    
                    <button
                      className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                        plan.isPopular
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {plan.monthlyPrice ? 'Subscribe Now' : 'Contact Sales'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex justify-center mt-4 gap-2">
            {plans.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
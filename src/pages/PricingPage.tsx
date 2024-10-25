import React, { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Basic Plan',
      monthlyPrice: 45,
      quarterlyPrice: 120,
      description: 'Perfect for small teams or individual users',
      features: [
        'Up to 15 QR codes',
        'Basic analytics',
        'Standard support',
        'Single user access'
      ],
      isPopular: false
    },
    {
      name: 'Standard Plan',
      monthlyPrice: 135,
      quarterlyPrice: 360,
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 QR codes',
        'Advanced analytics',
        'Priority support',
        'Team collaboration'
      ],
      isPopular: true
    },
    {
      name: 'Professional Plan',
      monthlyPrice: 250,
      quarterlyPrice: 675,
      description: 'For organizations needing advanced features',
      features: [
        'Up to 90 QR codes',
        'Custom branding',
        'API access',
        'Advanced integrations'
      ],
      isPopular: false
    },
    {
      name: 'Enterprise',
      monthlyPrice: null,
      quarterlyPrice: null,
      description: 'Custom solutions for large organizations',
      features: [
        'Unlimited QR codes',
        'Dedicated support',
        'Custom development',
        'SLA guarantee'
      ],
      isPopular: false
    }
  ];

  const handlePlanAction = (plan: typeof plans[0]) => {
    if (plan.name === 'Enterprise') {
      navigate('/contact');
    } else {
      // Handle subscription logic for other plans
      console.log(`Subscribe to ${plan.name}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-8">Pricing</h1>
          <div className="inline-flex items-center bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'monthly' ? 'bg-green-500 text-white' : 'text-gray-600'
              }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-8 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'quarterly' ? 'bg-green-500 text-white' : 'text-gray-600'
              }`}
            >
              ANNUALLY
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`bg-white rounded-lg p-8 ${
                plan.isPopular 
                  ? 'ring-2 ring-green-500 shadow-xl relative transform hover:-translate-y-1' 
                  : 'border border-gray-200 hover:shadow-lg'
              } transition-all duration-200`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-orange-400 text-white text-xs font-bold px-4 py-1 rounded-full">
                    RECOMMENDED
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
              
              {(billingCycle === 'monthly' ? plan.monthlyPrice : plan.quarterlyPrice) ? (
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">£</span>
                    <span className="text-5xl font-bold">
                      {billingCycle === 'monthly' ? plan.monthlyPrice : plan.quarterlyPrice}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">
                      /{billingCycle === 'monthly' ? 'mo' : 'year'}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="mb-6">
                  <div className="text-2xl font-bold">Custom Pricing</div>
                </div>
              )}

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => handlePlanAction(plan)}
                className={`w-full py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  plan.isPopular
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {plan.name === 'Enterprise' ? 'CONTACT US' : 'SIGN UP TODAY'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
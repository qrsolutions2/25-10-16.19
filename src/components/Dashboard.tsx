import React from 'react';
import { Check } from 'lucide-react';

const features = [
  'Real-time QR code generation',
  'Customizable QR code designs',
  'Analytics and tracking',
  'Bulk QR code creation',
  'Dynamic QR codes',
  'Integration with popular marketing tools',
  'Mobile-friendly interface',
  'Secure data management'
];

const Dashboard: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">The Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full h-[500px] bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://i.imgur.com/SKTp2CQ.png" 
              alt="QR Solutions Dashboard Interface"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Features</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
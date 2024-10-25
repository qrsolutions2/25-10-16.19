import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clipboard, BarChart2, Users, Home, CheckCircle } from 'lucide-react';
import AssetContactForm from './AssetContactForm';

const features = [
  {
    icon: Shield,
    title: 'Enhanced Safety Protocols',
    description: 'Implement and track safety measures across your organization with QR-enabled checkpoints.'
  },
  {
    icon: Clipboard,
    title: 'Asset Tracking',
    description: 'Efficiently manage and track your assets using QR codes for quick access to asset information and history.'
  },
  {
    icon: BarChart2,
    title: 'Real-time Reporting',
    description: 'Generate instant reports on safety compliance and asset utilization with our advanced analytics.'
  },
  {
    icon: Users,
    title: 'Employee Training',
    description: 'Streamline safety training processes with QR-coded materials and progress tracking.'
  }
];

const sectors = [
  { name: 'Manufacturing', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000&h=667' },
  { name: 'Construction', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000&h=667' },
  { name: 'Healthcare', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000&h=667' },
  { name: 'Logistics', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000&h=667' },
];

const faqs = [
  {
    question: "How can QR codes improve asset management?",
    answer: "QR codes provide instant access to asset information, maintenance history, and usage instructions. By scanning the code, employees can quickly retrieve relevant data, reducing errors and improving efficiency."
  },
  {
    question: "Can QR codes help with safety compliance?",
    answer: "Yes, QR codes can be used to access safety protocols, equipment manuals, and training materials. They can also be used to log safety checks and inspections, ensuring compliance and creating an audit trail."
  },
  {
    question: "How secure is the information linked to QR codes?",
    answer: "Our QR code system uses encrypted links and secure servers to protect sensitive information. Access can be restricted to authorized personnel only, ensuring data security and confidentiality."
  },
  {
    question: "Can the system integrate with our existing asset management software?",
    answer: "Yes, our QR-based asset and safety management system is designed to integrate with most popular asset management and ERP systems. We offer custom integration services to ensure seamless operation with your existing infrastructure."
  },
];

const AssetSafetyManagement: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4">
        <div className="flex justify-between items-center py-8">
          <h1 className="text-4xl font-bold">Asset and Safety Management</h1>
          <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800">
            <Home className="w-5 h-5 mr-2" />
            Other Solutions
          </Link>
        </div>
        
        <section className="mb-16">
          <p className="text-lg mb-8">
            Enhance your organization's asset management and safety protocols with our QR-based solutions. 
            Streamline processes, improve compliance, and boost overall efficiency.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sectors.map((sector) => (
              <div key={sector.name} className="relative">
                <img src={sector.image} alt={sector.name} className="w-full h-40 object-cover rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                  <span className="text-white text-lg font-semibold">{sector.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">1. Generate QR Codes</h3>
              <p className="text-gray-600">Create unique QR codes for your assets and safety checkpoints using our intuitive dashboard.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">2. Deploy and Scan</h3>
              <p className="text-gray-600">Place QR codes on assets and at key locations. Employees can easily scan codes with their smartphones.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">3. Manage and Monitor</h3>
              <p className="text-gray-600">Access real-time data, generate reports, and update information instantly through our central platform.</p>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact-form-section" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Get Started with Asset & Safety Management</h2>
          <AssetContactForm />
        </section>
      </main>
    </div>
  );
};

export default AssetSafetyManagement;
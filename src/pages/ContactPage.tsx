import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Link to="/pricing" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Pricing
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Enterprise Solutions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team to discuss custom solutions tailored to your organization's needs.
            We'll work with you to create a package that perfectly fits your requirements.
          </p>
        </div>

        <ContactForm id="enterprise-contact" />
      </div>
    </div>
  );
};

export default ContactPage;
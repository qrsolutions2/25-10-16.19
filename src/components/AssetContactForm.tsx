import React, { useState } from 'react';
import axios from 'axios';

const AssetContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    industry: '',
    assetsCount: '',
    locations: '',
    currentSystem: '',
    requirements: '',
    message: '',
    managementType: 'self-managed'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post('/api/send-email', {
        ...formData,
        subject: 'Asset Management Inquiry'
      });
      setSubmitMessage('Thank you for your interest. Our asset management team will contact you shortly.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        industry: '',
        assetsCount: '',
        locations: '',
        currentSystem: '',
        requirements: '',
        message: '',
        managementType: 'self-managed'
      });
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-4">Select Management Type</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => handleChange({ target: { name: 'managementType', value: 'self-managed' } } as any)}
            className={`p-4 border rounded-lg text-left transition-all ${
              formData.managementType === 'self-managed' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <h3 className="font-semibold mb-2">Self-Managed Platform</h3>
            <p className="text-sm text-gray-600">
              Access to our platform with full control over your asset management system. Includes training and support.
            </p>
          </button>
          <button
            type="button"
            onClick={() => handleChange({ target: { name: 'managementType', value: 'fully-managed' } } as any)}
            className={`p-4 border rounded-lg text-left transition-all ${
              formData.managementType === 'fully-managed' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <h3 className="font-semibold mb-2">Fully Managed Service</h3>
            <p className="text-sm text-gray-600">
              Our team handles everything for you, from setup to ongoing management and maintenance.
            </p>
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company *</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry *</label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select Industry</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Construction">Construction</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Logistics">Logistics</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="assetsCount" className="block text-sm font-medium text-gray-700">Number of Assets</label>
            <input
              type="text"
              id="assetsCount"
              name="assetsCount"
              value={formData.assetsCount}
              onChange={handleChange}
              placeholder="Approximate number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="locations" className="block text-sm font-medium text-gray-700">Number of Locations</label>
          <input
            type="text"
            id="locations"
            name="locations"
            value={formData.locations}
            onChange={handleChange}
            placeholder="How many locations need asset management?"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="currentSystem" className="block text-sm font-medium text-gray-700">Current Asset Management System</label>
          <input
            type="text"
            id="currentSystem"
            name="currentSystem"
            value={formData.currentSystem}
            onChange={handleChange}
            placeholder="What system are you currently using?"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">Key Requirements</label>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows={3}
            placeholder="What are your main requirements for an asset management system?"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Information</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
          >
            {isSubmitting ? 'Sending...' : 'Request Consultation'}
          </button>
        </div>

        {submitMessage && (
          <div className="mt-4 text-center text-green-600 font-medium">
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default AssetContactForm;
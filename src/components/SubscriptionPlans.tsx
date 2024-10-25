import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

let stripePromise: Promise<any> | null = null;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

// ... rest of the file remains the same

const SubscriptionPlans: React.FC<{ id: string }> = ({ id }) => {
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Initialize Stripe
    getStripe();
  }, []);

  const handleSubscribe = async (planName: string, productKey: string) => {
    setLoading(planName);
    setError(null);
    const stripe = await getStripe();

    // ... rest of the handleSubscribe function remains the same
  };

  // ... rest of the component remains the same
};

export default SubscriptionPlans;
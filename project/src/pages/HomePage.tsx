import React from 'react';
import Hero from '../components/home/Hero';
import FeatureSection from '../components/home/FeatureSection';
import TestimonialSection from '../components/home/TestimonialSection';
import Button from '../components/ui/Button';
import { useNavigation } from '../hooks/useNavigation';

const HomePage: React.FC = () => {
  const { navigateTo } = useNavigation();
  
  return (
    <div>
      <Hero />
      <FeatureSection />
      <TestimonialSection />
      
      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Renewable Journey?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Take the first step toward energy independence and sustainability.
            Our AI-powered simulator will help you create the perfect plan.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-green-700 hover:bg-green-50 focus:ring-white px-8 py-3"
            onClick={() => navigateTo('simulator')}
          >
            Try the Simulator
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
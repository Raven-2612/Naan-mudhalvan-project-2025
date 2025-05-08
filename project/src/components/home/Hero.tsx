import React from 'react';
import Button from '../ui/Button';
import { useNavigation } from '../../hooks/useNavigation';

const Hero: React.FC = () => {
  const { navigateTo } = useNavigation();
  
  return (
    <div className="relative text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-800/90 to-blue-900/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Plan Your Renewable Energy Future
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 animate-fade-in-delay">
            Use AI-powered tools to simulate, evaluate, and optimize small-scale renewable energy projects for your home or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <Button 
              size="lg" 
              variant="primary" 
              className="bg-green-500 hover:bg-green-600 focus:ring-green-400 px-8"
              onClick={() => navigateTo('simulator')}
            >
              Start Planning
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white px-8"
              onClick={() => navigateTo('resources')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
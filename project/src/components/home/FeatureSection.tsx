import React from 'react';
import { Card, CardContent } from '../ui/Card';
import { Calculator, BarChart, PieChart, Zap, Leaf, DollarSign } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <Calculator className="h-8 w-8 text-green-600" />,
      title: 'AI-Powered Simulator',
      description: 'Use our advanced AI to simulate different renewable energy setups based on your specific needs and location.'
    },
    {
      icon: <BarChart className="h-8 w-8 text-blue-600" />,
      title: 'Financial Analytics',
      description: 'Get detailed projections on costs, savings, payback periods, and long-term financial benefits.'
    },
    {
      icon: <PieChart className="h-8 w-8 text-purple-600" />,
      title: 'Project Comparison',
      description: 'Compare different renewable energy options side-by-side to find the best fit for your situation.'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-yellow-600" />,
      title: 'Incentive Finder',
      description: 'Discover available tax credits, rebates, and other incentives based on your location.'
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: 'Environmental Impact',
      description: 'Visualize the positive environmental impact of your renewable energy investments.'
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: 'Energy Optimization',
      description: 'Optimize your energy usage patterns to maximize the benefits of your renewable energy system.'
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Plan With Confidence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our intelligent tools help you make informed decisions about renewable energy projects, saving you time and money.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-gray-100 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
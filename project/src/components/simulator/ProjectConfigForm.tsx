import React, { useState } from 'react';
import Slider from '../ui/Slider';
import Button from '../ui/Button';
import { Card, CardContent, CardFooter } from '../ui/Card';
import { formatCurrency } from '../../utils/formatters';
import { energyUsageOptions } from '../../data/mockData';
import { MapPin } from 'lucide-react';

interface ProjectConfigFormProps {
  config: any;
  onChange: (config: any) => void;
  onCalculate: () => void;
}

const ProjectConfigForm: React.FC<ProjectConfigFormProps> = ({
  config,
  onChange,
  onCalculate,
}) => {
  const [address, setAddress] = useState('');
  
  const handleChange = (field: string, value: any) => {
    onChange({ ...config, [field]: value });
  };
  
  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate geocoding for India
    handleChange('location', {
      latitude: 28.6139,  // New Delhi coordinates
      longitude: 77.2090,
      address: address,
    });
  };
  
  return (
    <Card className="mt-8">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-6">Configure Your Project</h2>
        
        <div className="space-y-8">
          {/* Location */}
          <div>
            <h3 className="text-md font-medium mb-2">Location</h3>
            <form onSubmit={handleAddressSubmit} className="flex gap-2">
              <div className="relative flex-grow">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input 
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address in India"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <Button type="submit">Set Location</Button>
            </form>
            {config.location?.address && (
              <div className="mt-2 text-sm text-green-600">
                Location set: {config.location.address}
              </div>
            )}
          </div>
          
          {/* Budget */}
          <div>
            <Slider
              min={100000}
              max={5000000}
              step={50000}
              value={config.budget}
              onChange={(value) => handleChange('budget', value)}
              label="Budget"
              formatter={formatCurrency}
            />
          </div>
          
          {/* Property Size */}
          <div>
            <Slider
              min={100}
              max={10000}
              step={100}
              value={config.propertySize}
              onChange={(value) => handleChange('propertySize', value)}
              label="Property Size (sq ft)"
              formatter={(value) => `${value.toLocaleString()} sq ft`}
            />
          </div>
          
          {/* Energy Usage */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Energy Usage
            </label>
            <select
              value={config.energyUsage}
              onChange={(e) => handleChange('energyUsage', Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {energyUsageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          {/* Timeline */}
          <div>
            <Slider
              min={5}
              max={30}
              step={1}
              value={config.timeline}
              onChange={(value) => handleChange('timeline', value)}
              label="Investment Timeline"
              formatter={(value) => `${value} years`}
            />
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="px-6 py-4 bg-gray-50 flex justify-end">
        <Button 
          onClick={onCalculate}
          disabled={!config.location?.address}
        >
          Calculate AI Estimate
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectConfigForm;
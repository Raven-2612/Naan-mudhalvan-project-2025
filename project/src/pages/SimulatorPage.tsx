import React, { useState, useEffect } from 'react';
import ProjectTypeSelector from '../components/simulator/ProjectTypeSelector';
import ProjectConfigForm from '../components/simulator/ProjectConfigForm';
import ResultsDashboard from '../components/simulator/ResultsDashboard';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { simulateAIEstimation, defaultSimulationResult } from '../data/mockData';
import { SimulationResult } from '../types';
import Button from '../components/ui/Button';

const defaultConfig = {
  projectType: 'solar',
  location: {
    latitude: 0,
    longitude: 0,
    address: '',
  },
  budget: 20000,
  propertySize: 2000,
  energyUsage: 11000,
  timeline: 25,
};

const SimulatorPage: React.FC = () => {
  const [projectConfig, setProjectConfig] = useLocalStorage('projectConfig', defaultConfig);
  const [results, setResults] = useState<SimulationResult>(defaultSimulationResult);
  const [isCalculating, setIsCalculating] = useState(false);
  
  // Function to handle project type selection
  const handleSelectProjectType = (type: string) => {
    setProjectConfig({ ...projectConfig, projectType: type });
  };
  
  // Function to handle configuration changes
  const handleConfigChange = (newConfig: any) => {
    setProjectConfig({ ...projectConfig, ...newConfig });
  };
  
  // Function to handle calculation
  const handleCalculate = () => {
    setIsCalculating(true);
    
    // Simulate API call with a slight delay to show loading state
    setTimeout(() => {
      const simulatedResults = simulateAIEstimation(projectConfig);
      setResults(simulatedResults);
      setIsCalculating(false);
    }, 1500);
  };
  
  // Clear the form and results
  const handleReset = () => {
    setProjectConfig(defaultConfig);
    setResults(defaultSimulationResult);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Renewable Energy Project Simulator</h1>
          <p className="text-lg text-gray-600">
            Customize your project parameters to receive AI-powered cost and benefit estimations.
          </p>
        </div>
        
        <div className="space-y-8">
          <ProjectTypeSelector 
            selectedType={projectConfig.projectType}
            onSelectType={handleSelectProjectType}
          />
          
          <ProjectConfigForm 
            config={projectConfig}
            onChange={handleConfigChange}
            onCalculate={handleCalculate}
          />
          
          <ResultsDashboard 
            results={results}
            isLoading={isCalculating}
          />
          
          {Object.values(results).some(value => value !== 0) && (
            <div className="flex justify-end">
              <Button 
                variant="outline" 
                onClick={handleReset}
              >
                Reset Simulator
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimulatorPage;
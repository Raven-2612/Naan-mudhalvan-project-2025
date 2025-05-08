import { ProjectComparison, SimulationResult } from '../types';

export const defaultSimulationResult: SimulationResult = {
  initialCost: 0,
  rebatesAndIncentives: 0,
  netCost: 0,
  annualSavings: 0,
  paybackPeriod: 0,
  roi: 0,
  carbonOffset: 0,
  energyProduction: 0,
};

export const projectTypes = [
  {
    id: 'solar',
    name: 'Solar Panels',
    description: 'Harness the sun\'s energy to power your home or business',
    icon: 'sun',
    baseEfficiency: 0.2,
    costPerUnit: 75000, // ₹75,000 per panel
    unitType: 'panel',
  },
  {
    id: 'wind',
    name: 'Wind Turbine',
    description: 'Generate electricity from wind energy with a small turbine',
    icon: 'wind',
    baseEfficiency: 0.3,
    costPerUnit: 250000, // ₹2,50,000 per turbine
    unitType: 'turbine',
  },
  {
    id: 'geothermal',
    name: 'Geothermal Heat Pump',
    description: 'Utilize stable ground temperatures for heating and cooling',
    icon: 'thermometer',
    baseEfficiency: 0.4,
    costPerUnit: 500000, // ₹5,00,000 per system
    unitType: 'system',
  },
  {
    id: 'hydroelectric',
    name: 'Micro Hydroelectric',
    description: 'Generate power from flowing water on your property',
    icon: 'droplets',
    baseEfficiency: 0.5,
    costPerUnit: 600000, // ₹6,00,000 per system
    unitType: 'system',
  },
];

export const energyUsageOptions = [
  { value: 8000, label: 'Small Home (8,000 kWh/year)' },
  { value: 11000, label: 'Average Home (11,000 kWh/year)' },
  { value: 14000, label: 'Large Home (14,000 kWh/year)' },
  { value: 25000, label: 'Small Business (25,000 kWh/year)' },
  { value: 50000, label: 'Medium Business (50,000 kWh/year)' },
];

export const sampleComparisons: ProjectComparison[] = [
  {
    id: '1',
    name: 'Basic Solar Setup',
    projectType: 'solar',
    initialCost: 450000, // ₹4,50,000
    paybackPeriod: 8.5,
    roi: 11.7,
    carbonOffset: 5.2,
  },
  {
    id: '2',
    name: 'Premium Solar Array',
    projectType: 'solar',
    initialCost: 850000, // ₹8,50,000
    paybackPeriod: 7.2,
    roi: 13.9,
    carbonOffset: 9.8,
  },
  {
    id: '3',
    name: 'Small Wind System',
    projectType: 'wind',
    initialCost: 700000, // ₹7,00,000
    paybackPeriod: 9.1,
    roi: 10.9,
    carbonOffset: 7.5,
  },
];

export const rebatesByState: Record<string, number> = {
  'Maharashtra': 0.40,
  'Gujarat': 0.35,
  'Karnataka': 0.30,
  'Tamil Nadu': 0.30,
  'Rajasthan': 0.35,
  'Delhi': 0.30,
  'Telangana': 0.25,
  'Kerala': 0.25,
  'Madhya Pradesh': 0.30,
  'Uttar Pradesh': 0.25,
  'Punjab': 0.30,
  'Haryana': 0.25,
  'Default': 0.25,
};

// Simplified AI simulation for renewable energy estimation
export const simulateAIEstimation = (config: any): SimulationResult => {
  const { projectType, location, budget, propertySize, energyUsage, timeline } = config;
  
  // Find project type details
  const projectDetails = projectTypes.find(p => p.id === projectType);
  
  // Calculate baseline based on project type
  let baseUnits = Math.floor(budget / (projectDetails?.costPerUnit || 75000));
  let efficiency = projectDetails?.baseEfficiency || 0.2;
  
  // Adjust for location (placeholder for more complex calculation)
  const locationEfficiency = location.latitude > 20 ? 1.1 : 0.9; // Higher efficiency in northern India
  
  // Calculate costs and savings
  const initialCost = baseUnits * (projectDetails?.costPerUnit || 75000);
  const rebateRate = rebatesByState[location.address.split(',').pop()?.trim() || 'Default'] || 0.25;
  const rebatesAndIncentives = initialCost * rebateRate;
  const netCost = initialCost - rebatesAndIncentives;
  
  // Energy production and savings
  const energyProduction = baseUnits * efficiency * locationEfficiency * 2000;
  const annualSavings = (energyProduction / energyUsage) * energyUsage * 8; // ₹8 per kWh average
  const paybackPeriod = netCost / annualSavings;
  const roi = (annualSavings / netCost) * 100;
  
  // Environmental impact
  const carbonOffset = energyProduction * 0.0007;
  
  return {
    initialCost,
    rebatesAndIncentives,
    netCost,
    annualSavings,
    paybackPeriod,
    roi,
    carbonOffset,
    energyProduction,
  };
};
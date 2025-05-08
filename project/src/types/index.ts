export interface ProjectConfig {
  projectType: 'solar' | 'wind' | 'geothermal' | 'hydroelectric';
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  budget: number;
  propertySize: number;
  energyUsage: number;
  timeline: number;
}

export interface SimulationResult {
  initialCost: number;
  rebatesAndIncentives: number;
  netCost: number;
  annualSavings: number;
  paybackPeriod: number;
  roi: number;
  carbonOffset: number;
  energyProduction: number;
}

export interface ProjectComparison {
  id: string;
  name: string;
  projectType: ProjectConfig['projectType'];
  initialCost: number;
  paybackPeriod: number;
  roi: number;
  carbonOffset: number;
}
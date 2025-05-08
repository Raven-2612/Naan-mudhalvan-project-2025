import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { SimulationResult } from '../../types';
import { formatCurrency, formatPercent, formatYears, formatEnergy, formatCarbonOffset } from '../../utils/formatters';
import { DollarSign, TrendingUp, Clock, Zap, Leaf } from 'lucide-react';

interface ResultsDashboardProps {
  results: SimulationResult;
  isLoading?: boolean;
}

const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ 
  results, 
  isLoading = false 
}) => {
  if (isLoading) {
    return (
      <Card className="mt-8 animate-pulse">
        <CardHeader>
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="p-4">
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }
  
  // If all result values are 0, show placeholder
  const hasResults = Object.values(results).some(value => value !== 0);
  
  if (!hasResults) {
    return (
      <Card className="mt-8">
        <CardHeader>
          <h2 className="text-xl font-semibold">AI Estimation Results</h2>
        </CardHeader>
        <CardContent className="text-center py-12">
          <p className="text-gray-500">
            Configure your project and click "Calculate AI Estimate" to see your results.
          </p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="mt-8">
      <CardHeader>
        <h2 className="text-xl font-semibold">AI Estimation Results</h2>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Financial Metrics */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <DollarSign className="h-5 w-5 mr-2 text-green-600" />
              <h3 className="text-sm font-medium text-gray-500">Initial Investment</h3>
            </div>
            <p className="text-2xl font-bold">{formatCurrency(results.initialCost)}</p>
            <p className="text-sm text-gray-500 mt-1">
              After rebates: {formatCurrency(results.netCost)}
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <DollarSign className="h-5 w-5 mr-2 text-green-600" />
              <h3 className="text-sm font-medium text-gray-500">Annual Savings</h3>
            </div>
            <p className="text-2xl font-bold">{formatCurrency(results.annualSavings)}</p>
            <p className="text-sm text-gray-500 mt-1">
              Savings over 25 years: {formatCurrency(results.annualSavings * 25)}
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Clock className="h-5 w-5 mr-2 text-blue-600" />
              <h3 className="text-sm font-medium text-gray-500">Payback Period</h3>
            </div>
            <p className="text-2xl font-bold">{formatYears(results.paybackPeriod)}</p>
            <p className="text-sm text-gray-500 mt-1">
              Time to recoup initial investment
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
              <h3 className="text-sm font-medium text-gray-500">Return on Investment</h3>
            </div>
            <p className="text-2xl font-bold">{formatPercent(results.roi)}</p>
            <p className="text-sm text-gray-500 mt-1">
              Annual ROI
            </p>
          </div>
          
          {/* Environmental Impact */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Zap className="h-5 w-5 mr-2 text-yellow-600" />
              <h3 className="text-sm font-medium text-gray-500">Energy Production</h3>
            </div>
            <p className="text-2xl font-bold">{formatEnergy(results.energyProduction)}</p>
            <p className="text-sm text-gray-500 mt-1">
              Annual energy generated
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Leaf className="h-5 w-5 mr-2 text-green-600" />
              <h3 className="text-sm font-medium text-gray-500">Carbon Offset</h3>
            </div>
            <p className="text-2xl font-bold">{formatCarbonOffset(results.carbonOffset)}</p>
            <p className="text-sm text-gray-500 mt-1">
              Annual CO₂ emissions avoided
            </p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-100 rounded-lg">
          <h3 className="text-lg font-medium text-green-800 mb-2">AI Recommendation</h3>
          <p className="text-sm text-green-700">
            {results.paybackPeriod < 10 
              ? "This renewable energy project is highly recommended! With a payback period under 10 years, it represents an excellent investment both financially and environmentally."
              : "This renewable energy project could be worthwhile, though the payback period is over 10 years. Consider adjusting your project parameters or exploring available incentives to improve financial returns."}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsDashboard;
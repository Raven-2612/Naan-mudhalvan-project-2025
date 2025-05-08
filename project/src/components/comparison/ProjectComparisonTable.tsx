import React from 'react';
import { ProjectComparison } from '../../types';
import { formatCurrency, formatYears, formatPercent, formatCarbonOffset } from '../../utils/formatters';
import { Sun, Wind, Thermometer, Droplets } from 'lucide-react';

interface ProjectComparisonTableProps {
  projects: ProjectComparison[];
}

const ProjectComparisonTable: React.FC<ProjectComparisonTableProps> = ({ projects }) => {
  // Map project type to icon
  const getIcon = (projectType: string) => {
    switch (projectType) {
      case 'solar':
        return <Sun className="h-5 w-5 text-yellow-500" />;
      case 'wind':
        return <Wind className="h-5 w-5 text-blue-500" />;
      case 'geothermal':
        return <Thermometer className="h-5 w-5 text-red-500" />;
      case 'hydroelectric':
        return <Droplets className="h-5 w-5 text-blue-500" />;
      default:
        return <Sun className="h-5 w-5 text-yellow-500" />;
    }
  };

  if (projects.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <p className="text-gray-500">No projects to compare.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Project
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Initial Cost
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Payback Period
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ROI
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Carbon Offset
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {projects.map((project) => (
            <tr key={project.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-medium text-gray-900">{project.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {getIcon(project.projectType)}
                  <span className="ml-2 capitalize">{project.projectType}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formatCurrency(project.initialCost)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formatYears(project.paybackPeriod)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formatPercent(project.roi)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formatCarbonOffset(project.carbonOffset)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectComparisonTable;
import React from 'react';
import { Sun, Wind, Thermometer, Droplets } from 'lucide-react';
import { projectTypes } from '../../data/mockData';
import { Card, CardContent } from '../ui/Card';

interface ProjectTypeSelectorProps {
  selectedType: string;
  onSelectType: (type: string) => void;
}

const ProjectTypeSelector: React.FC<ProjectTypeSelectorProps> = ({
  selectedType,
  onSelectType,
}) => {
  // Map project type to icon
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'sun':
        return <Sun className="h-6 w-6" />;
      case 'wind':
        return <Wind className="h-6 w-6" />;
      case 'thermometer':
        return <Thermometer className="h-6 w-6" />;
      case 'droplets':
        return <Droplets className="h-6 w-6" />;
      default:
        return <Sun className="h-6 w-6" />;
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Select Project Type</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {projectTypes.map((type) => (
          <Card
            key={type.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 ${
              selectedType === type.id
                ? 'ring-2 ring-green-500 ring-offset-2'
                : ''
            }`}
            onClick={() => onSelectType(type.id)}
          >
            <CardContent className="flex flex-col items-center text-center p-6">
              <div
                className={`p-3 rounded-full mb-4 ${
                  selectedType === type.id
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {getIcon(type.icon)}
              </div>
              <h3 className="font-medium">{type.name}</h3>
              <p className="text-sm text-gray-500 mt-2">{type.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectTypeSelector;
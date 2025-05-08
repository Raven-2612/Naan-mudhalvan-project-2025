import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import ProjectComparisonTable from '../components/comparison/ProjectComparisonTable';
import { sampleComparisons } from '../data/mockData';
import { ProjectComparison } from '../types';
import Button from '../components/ui/Button';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ComparisonPage: React.FC = () => {
  const [savedProjects, setSavedProjects] = useLocalStorage<ProjectComparison[]>('savedProjects', []);
  const [showSampleProjects, setShowSampleProjects] = useState(true);
  
  const projects = [...savedProjects, ...(showSampleProjects ? sampleComparisons : [])];
  
  // Toggle sample projects
  const toggleSampleProjects = () => {
    setShowSampleProjects(!showSampleProjects);
  };
  
  // Clear saved projects
  const clearSavedProjects = () => {
    setSavedProjects([]);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Comparison</h1>
        <p className="text-lg text-gray-600">
          Compare different renewable energy projects side by side to make informed decisions.
        </p>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Your Projects</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleSampleProjects}
              >
                {showSampleProjects ? 'Hide' : 'Show'} Sample Projects
              </Button>
              {savedProjects.length > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 border-red-200 hover:bg-red-50"
                  onClick={clearSavedProjects}
                >
                  Clear Saved Projects
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {projects.length > 0 ? (
            <ProjectComparisonTable projects={projects} />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No projects to compare yet.</p>
              <Button onClick={() => setShowSampleProjects(true)}>
                Show Sample Projects
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      
      <div className="bg-green-50 border border-green-100 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Pro Tip</h3>
        <p className="text-green-700">
          When comparing projects, look beyond just the initial cost. Consider factors like payback period, ROI, and environmental impact to get a complete picture of each option's value.
        </p>
      </div>
    </div>
  );
};

export default ComparisonPage;
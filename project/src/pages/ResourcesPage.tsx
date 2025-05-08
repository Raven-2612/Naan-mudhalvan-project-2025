import React, { useState } from 'react';
import ResourceCard from '../components/resources/ResourceCard';
import { resources, resourceCategories } from '../data/resourcesData';
import Button from '../components/ui/Button';

const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredResources = selectedCategory === 'All'
    ? resources
    : resources.filter(resource => resource.category === selectedCategory);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Resource Center</h1>
        <p className="text-lg text-gray-600">
          Explore our collection of guides, articles, and tools to help you make informed decisions about renewable energy.
        </p>
      </div>
      
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {resourceCategories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      
      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResources.map(resource => (
          <ResourceCard
            key={resource.id}
            title={resource.title}
            description={resource.description}
            imageUrl={resource.imageUrl}
            link={resource.link}
            category={resource.category}
          />
        ))}
      </div>
      
      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No resources found for this category.</p>
        </div>
      )}
    </div>
  );
};

export default ResourcesPage;
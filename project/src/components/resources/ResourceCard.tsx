import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  category: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  imageUrl,
  link,
  category,
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
        />
      </div>
      <CardHeader className="pb-0">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs text-green-600 font-medium uppercase tracking-wider">
              {category}
            </span>
            <h3 className="text-lg font-semibold mt-1">{title}</h3>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-6">
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-800 transition-colors"
        >
          Learn more <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
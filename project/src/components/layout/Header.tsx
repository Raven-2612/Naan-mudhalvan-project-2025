import React from 'react';
import { Sun, Menu, X } from 'lucide-react';
import { useNavigation } from '../../hooks/useNavigation';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { currentPage, navigateTo } = useNavigation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'simulator', label: 'Simulator' },
    { id: 'comparison', label: 'Compare Projects' },
    { id: 'resources', label: 'Resources' },
  ];
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Button 
            variant="text" 
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2 hover:bg-transparent p-0"
          >
            <Sun className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-gray-800">RenewPlanner</span>
          </Button>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="text"
                onClick={() => navigateTo(item.id as any)}
                className={`font-medium ${
                  currentPage === item.id 
                    ? 'text-green-600 bg-green-50 hover:bg-green-100' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Button>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Button 
              variant="primary"
              onClick={() => navigateTo('simulator')}
              className="shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="text"
            onClick={toggleMenu}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg py-4 px-4 border-t border-gray-100">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? 'primary' : 'text'}
                  onClick={() => {
                    navigateTo(item.id as any);
                    toggleMenu();
                  }}
                  isFullWidth
                  className="justify-start"
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="primary"
                onClick={() => {
                  navigateTo('simulator');
                  toggleMenu();
                }}
                isFullWidth
                className="mt-2"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header
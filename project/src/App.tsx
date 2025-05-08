import React from 'react';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import SimulatorPage from './pages/SimulatorPage';
import ComparisonPage from './pages/ComparisonPage';
import ResourcesPage from './pages/ResourcesPage';
import { useNavigation } from './hooks/useNavigation';

// Add some global styles
import './styles/animations.css';

function App() {
  const { currentPage } = useNavigation();
  
  // Render the current page based on navigation state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'simulator':
        return <SimulatorPage />;
      case 'comparison':
        return <ComparisonPage />;
      case 'resources':
        return <ResourcesPage />;
      default:
        return <HomePage />;
    }
  };
  
  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
}

export default App;
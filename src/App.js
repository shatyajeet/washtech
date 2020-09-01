import React from 'react';

import Header from './components/header';
import Jumbotron from './jumbotron';
import { AppContent } from './components/style';
import Benefits from './benefits';
import Services from './services';
import Dashboard from './dashboard';
import HowItWorks from './how-it-works';
import Testimonials from './testimonials';
import Statistics from './statistics';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AppContent>
        <Jumbotron />
        <Benefits />
        <Services />
        <Dashboard />
        <HowItWorks />
        <Testimonials />
        <Statistics />
        <Footer />
      </AppContent>
    </div>
  );
}

export default App;

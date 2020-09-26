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
import ContactlessLaundry from './contactless-laundry';
import WhatsAppFAB from './whatsAppFAB';

function App() {
  return (
    <div className="App">
      <Header />
      <AppContent>
        <Jumbotron />
        <ContactlessLaundry />
        <Benefits />
        <Services />
        <Dashboard />
        <HowItWorks />
        <Testimonials />
        <Statistics />
        <Footer />
        <WhatsAppFAB />
      </AppContent>
    </div>
  );
}

export default App;

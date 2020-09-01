import React from 'react';

import Header from './components/header';
import Jumbotron from './jumbotron';
import { AppContent } from './components/style';
import Benefits from './benefits';
import Services from './services';
import Dashboard from './dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <AppContent>
        <Jumbotron />
        <Benefits />
        <Services />
        <Dashboard />
      </AppContent>
    </div>
  );
}

export default App;

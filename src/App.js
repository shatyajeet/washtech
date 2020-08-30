import React from 'react';

import Header from './components/header';
import Jumbotron from './jumbotron';
import { AppContent } from './components/style';

function App() {
  return (
    <div className="App">
      <Header />
      <AppContent>
        <Jumbotron />
      </AppContent>
    </div>
  );
}

export default App;

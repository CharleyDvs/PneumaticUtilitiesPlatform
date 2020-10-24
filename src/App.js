import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage.component';
import CylinderSeries from './pages/CylinderSeriesPage/CylinderSeriesPage.component';
import ComparisonPage from './pages/ComparisonPage/ComparisonPage.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/homologacion">
          <CylinderSeries />
        </Route>
        <Route path="/cilindros/:id">
          <ComparisonPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
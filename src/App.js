import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import CylinderSeries from './pages/CylinderSeriesPage/CylinderSeriesPage.component';
import ComparisonPage from './pages/ComparisonPage/ComparisonPage.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exacth path="/homologacion">
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
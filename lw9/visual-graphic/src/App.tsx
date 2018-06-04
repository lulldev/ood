import * as React from 'react';
import './App.css';
import HarmonicFuncGraph from './components/HarmonicFuncGraph';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <HarmonicFuncGraph />
      </div>
    );
  }
}

export default App;

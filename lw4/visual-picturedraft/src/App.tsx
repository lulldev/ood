import * as React from 'react';
import './App.css';
import PictureDraft from './components/PictureDraft';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <PictureDraft />
      </div>
    );
  }
}

export default App;

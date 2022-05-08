import React, {Component} from 'react';
import './App.css';
import Cabecera from './components/header';
import Consultas from './components/consultar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Cabecera />
          <Consultas />
        </main>
      </div>
    );
  }

}

export default App;

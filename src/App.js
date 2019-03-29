import React, { Component } from 'react';
import './App.css';
 
import SimpleHereMap from './Map.js';
import ThemeSelector from './ThemeSelector.js';

class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      theme: 'normal.day',
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(evt) {
    evt.preventDefault();

    var change = evt.target.id;
    this.setState({
      "theme": change,
    });
  }

  render() {
    return (
      <div className="App">
        <SimpleHereMap
          app_id="hVA6vKr6ixW90KYvkb7k"
          app_code="IulCKZdfTxT9b5NPveT_og"
          lat="42.345978"
          lng="-83.0405"
          zoom="12"
          theme={this.state.theme}
        />
        <ThemeSelector changeTheme={this.onChange} />
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       <Map />
  //     </div>
  //   );
  // }
}

export default App;

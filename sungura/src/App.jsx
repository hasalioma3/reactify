
import axios from 'axios';
import { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    assets: []
  }
  async componentDidMount() {
    const { data: assets } = await axios.get('http://127.0.0.1:8000/')

    this.setState({ assets });
    console.log(assets)
  }

  render() {
    return (
      <div></div>
    );
  }
}
export default App;

import React, { Component } from 'react'
import ItemsList from './components/ItemsList'

class App extends Component {
  render() {
    //We take only the 100 first items
    var items = this.state.items.slice(0,100);

    return (
      <div>
        <ItemsList items={items}/>
      </div>
    );
  }
}

export default App;
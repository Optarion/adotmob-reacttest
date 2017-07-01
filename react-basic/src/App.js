import React, { Component } from 'react'
import ItemsList from './components/ItemsList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      items : []
    }
  }

  componentDidMount(){
    this.getItems();
  }

  // getItems makes the request to get the datas from the servers and update the state with the response
  getItems() {
    var url = "https://jsonplaceholder.typicode.com/photos";
    var xmlhttp = new XMLHttpRequest();

    return new Promise(function(resolve, reject){
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE ) {
          if (xmlhttp.status === 200) {
            resolve(JSON.parse(xmlhttp.response));
          }
        }
      }

      xmlhttp.open("GET", url, true);
      xmlhttp.send(); 
    }).then((datas) => {
        this.setState({
          items : datas
        })
      })
  }

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
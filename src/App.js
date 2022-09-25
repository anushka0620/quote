import React from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar';
import './App.css';

class App extends React.Component {
  state = { 
    test_quote: '',
    author:''
   };

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote = () => {
    axios.get('https://type.fit/api/quotes').then((response) => {
        const randomIndex = Math.round(Math.random() * response.data.length);
        this.setState({
          test_quote: response.data[randomIndex].text,
          author: response.data[randomIndex].author
        })

      })
  }



  render() {
    return (
      
      <div className="app">
        <Navbar title='Quote' icon='fa-solid fa-book' />
        {/*<div className="card">*/}
          <h1 className="heading">{this.state.test_quote}</h1>
          <h6>{this.state.author}</h6>
          <button type="button" onClick={this.fetchQuote} class="btn btn-outline-info">Click me</button>
        
        </div>
    
    );
  }
}

export default App;
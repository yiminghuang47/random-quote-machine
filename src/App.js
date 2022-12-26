import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import './App.scss';
import {random} from 'lodash';
import Button from './components/Button';
import QuoteMachine from './components/QuoteMachine';
import COLORS_ARRAY from './components/ColorsArray';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      quotes:[],
      selectedQuoteIndex: null,
      accentColor: '#000000'
    }
    this.generateQuoteIndex = this.generateQuoteIndex.bind(this);
    this.assignQuoteIndex = this.assignQuoteIndex.bind(this);
  }
  componentDidMount(){
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
    .then(data => data.json())
    .then(quotes => this.setState({quotes},this.assignQuoteIndex));
    
  }
  generateQuoteIndex(){
    if(!this.state.quotes.length){
      return undefined;
    }   
    return random(0,this.state.quotes.length-1);
  }
  assignQuoteIndex(){
    this.setState({selectedQuoteIndex: this.generateQuoteIndex()});
    this.setState({accentColor: COLORS_ARRAY[this.generateQuoteIndex()]})
  }
  get selectedQuote(){
    if(!this.state.selectedQuoteIndex || !Number.isInteger(this.state.selectedQuoteIndex)) return '';
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  render(){
    console.log(this.state.selectedQuoteIndex);
    return(
      <div className="App" style={{backgroundColor: this.state.accentColor}}>
        <div id="quote-box" style={{color: this.state.accentColor}}>
          <QuoteMachine selectedQuote={this.selectedQuote} clickHandler={this.assignQuoteIndex} accentColor={this.state.accentColor}/>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import './App.css';
import Card from "./card.js"
import Input from "./Input"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '',
  value1:'',
value2:'' }
  }
  handleChangeNumber=(x)=> {
    this.setState({
      value:x 
    })}
  handleChangeValidThru=(x)=> {
      this.setState({
        value1:x 
      })}
  handleChangecardHolder=(x)=> {
      this.setState({
          value2:x 
      })}
  
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <Input handleChangeNumber = {(x)=>this.handleChangeNumber(x)} handleChangeValidThru = {(x)=>this.handleChangeValidThru(x)} handleChangecardHolder = {(x)=>this.handleChangecardHolder(x)}  />
          <Card cardNumber={this.state.value} validThru={this.state.value1} cardHolder={this.state.value2} />
        </header>
      </div>
    );
  }
}

export default App;

import React from 'react';
import renderValidThru from './components/renderValidThru'
import renderCardNumber from './components/renderCardNumber'
import './App.css';



const Card = (props) => 
      <div className="App1">
       <h1>CREDIT CARD</h1>
       <div className="puce">
        <img className="puce"/></div>
    <div className="flex-row">
        <div className="App2">
        
        <h2> {renderCardNumber(props.cardNumber)}</h2>
          <div  className="flex-row">
                <h3>{props.cardHolder.toUpperCase()}</h3>
                    <div className="exp-date">
                        <div className="upper-labels">{renderValidThru(props.validThru)}</div>
                    </div>
          </div>
        </div>
            <div>
                <img className="visa_logo" src="https://i.ebayimg.com/images/g/oLoAAOxyzHxRKY87/s-l300.jpg"/> 
            </div>
    </div>
      </div>
  


export default Card;
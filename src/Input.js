import React,{Component} from 'react';




class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { value: ' ',
        value1:' ',
        value2:' '
     }
    }
    handleChange = (e)=> {
        this.setState({ value: e.target.value })  
        this.props.handleChangeNumber(this.state.value)  
    }
    handleChange1 = (e)=> {
        this.setState({ value1: e.target.value }) 
        this.props.handleChangeValidThru(this.state.value1)    
    }
    handleChange2 = (e)=> {
        this.setState({ value2: e.target.value }) 
        this.props.handleChangecardHolder(this.state.value2)    
    }  
    render() { 
        return ( 
         <div className="">
            <input type="tel" placeholder="Card Number" onChange={this.handleChange} maxlength="16" />
            
            <input type="tel"placeholder="Valid Thru" onChange={this.handleChange1} maxlength="4"/>
            
            <input type="text" placeholder="Card Holder" onChange={this.handleChange2} maxlength="20"/>
           
        </div>
           );
    }
}
 
export default Input;
        
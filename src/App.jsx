import React,{Component} from 'react';
import './App.css';
import Clock from './Clock';
import {Form, FormControl, Button} from 'react-bootstrap';
class App extends Component {
    constructor (props){
        super(props);
        this.state = {
            deadLine : 'December 25, 2017',

        }
    }
    changeDeadLine(){
        console.log('state', this.state);
        this.setState({deadLine:this.state.newDeadLine});
    }
    render(){
        return (
            <div className="App"> 
                <div className="App-title"> Countdown to {this.state.deadLine} </div>
                <Clock 
                deadLine = {this.state.deadLine}
                />
                <Form inline>
                <FormControl 
                className ="deadLine-input"
                onChange={event =>this.setState({newDeadLine:event.target.value})}
                placeholder='Eg - December 25th, 2017'  />
                <Button onClick= {()=>this.changeDeadLine()}> Submit </Button>
                </Form>
            </div>
        )
        
    }
}

export default App;

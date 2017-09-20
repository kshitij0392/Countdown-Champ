import React,{Component} from 'react';
import './App.css';

class Clock extends Component {
    constructor (props){
        super(props);
        this.state = {
            days : 0,
            hours : 0,
            minutes : 0,
            seconds : 0 
        }
        
    }
    componentWillMount (){
        this.getTimeUntil(this.props.deadLine);

    }
    componentDidMount (){
        setInterval (() => this.getTimeUntil(this.props.deadLine),1000)
    }

    leading0(num){
        if (num < 10){
            return '0' + num;
        } else
        return num;
    }
    getTimeUntil(deadline) {
            const time = Date.parse(deadline) - Date.parse (new Date ());
            const seconds =  Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor (time/(1000*60*60)%24);
            const days = Math.floor (time/(1000*60*60*24));
            
            this.setState({
                days: days,
                minutes : minutes,
                hours: hours,
                seconds :seconds
            })
        }

    render(){
        return(        
        <div>                
                <div className="clock-days"> {this.leading0(this.state.days)} Days </div>
                <div className="clock-hours"> {this.leading0(this.state.hours)} Hours </div>
                <div className="clock-minutes"> {this.leading0(this.state.minutes)} Minutes </div>
                <div className="clock-seconds"> {this.leading0(this.state.seconds)} Seconds </div>
        </div>
        )
    }
}

export default Clock;
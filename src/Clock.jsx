import React,{Component} from 'react';
import './App.css';

class Clock extends Component{

	constructor(props) {
		super(props);

		console.log('props',props);
		
		this.state = {

			seconds: '',
			minutes: '',
			hours: '',
			days: ''
		}
	}

	changeTime()
	{

		if (this.props.deadline !== '')
		{
			const time_remaining = Date.parse(this.props.deadline) - Date.parse(new Date());
			

			const seconds_remaining = Math.floor((time_remaining/1000) % 60);
			const minutes_remaining = Math.floor((time_remaining/(1000*60)) % 60);
			const hours_remaining = Math.floor((time_remaining/(1000*60*60)) % 24);
			const days_remaining = Math.floor(time_remaining/(1000*60*60*24));

			this.setState({days: days_remaining, hours: hours_remaining, minutes: minutes_remaining, seconds: seconds_remaining});
		}

	}

	componentDidMount() {

		setInterval(() => {this.changeTime(),1000});

	}



render()
{

	return(


		<div className="clock">
		{
			this.state.days !== '' ? <div className="clock-days"> {this.state.days} days </div>: '' 
		}

		{
			this.state.hours !== '' ? <div className="clock-hours">{this.state.hours} hours </div> : ''
		}

		{
			this.state.minutes !== ''? <div className="clock-minutes"> {this.state.minutes} minutes </div> : ''

		}

		{
			this.state.seconds !== '' ? <div className="clock-seconds"> {this.state.seconds} seconds </div> : ''

		}
			 
		</div>

		)

}


}

export default Clock;
import React,{Component } from 'react';
import Clock from './Clock'
import {Form,FormControl,Button} from 'react-bootstrap';
import './App.css';


class App extends Component 
{

	constructor(props) {
		super(props);
		
		this.state = {

			date : '',
			newDate: ''
		}
	}

	calculateDate()
	{

		this.setState({date: this.state.newDate})
	}

	render()
	{

	return(

		<div className="App">

			<h1> Count Down Champ Application </h1>

			<div className="countdown-portion">
			
				{
					this.state.date != ''? <div> Count Down Champ to {this.state.date} </div> : ''

				} 
					
				 

				 <Clock deadline={this.state.date} > </Clock>

					 <Form inline>
					 <FormControl type="date" placeholder="Enter Date" onChange={event => this.setState({newDate: event.target.value})}></FormControl>
					 <Button onClick={() => this.calculateDate() }> Search </Button>
					 </Form>

		 	</div>

		</div>


	)
	}
}

export default App;
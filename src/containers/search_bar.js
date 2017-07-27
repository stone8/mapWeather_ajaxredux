//compnenet level state is used for controlled compoenent, input is set to state value

// in call bach function, the "this" has mystery context.
// nned to find function to this in constructor and assign iot to this.onInputChange (override)

// override onFormSubmit, to prevent submit form to backend each time we touch it or any element under it

// why use form? get "enter" behaviour for free. save event handlers

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state={term: ''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		console.log(event.target.value);
		this.setState({term: event.target.value});
	}

	onFormSubmit(event) {
		event.preventDefault();

		//we need to fetch weather data here
		this.props.fetchWeather(this.state.term);
		this.setState({term: ''}); //cause component to re-render
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="get a file-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Subimt</button>
				</span>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeather }, dispatch);
}
// no need of state here
export default connect(null, mapDispatchToProps) (SearchBar)
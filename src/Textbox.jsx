import React, { Component } from 'react';
import './Textbox.css';
const prompts = ["as you walk into the next room, you see carolina and iris talking about BTS",
				"iris is screaming about how excited she is about the TOTAL NUMBER OF MEMBERS IN SWE this semester, but she wishes we had FOUR TIMES that amount",
				"you have no idea what she's talking about and why that was highlighted",
				"carolina is trying to tell iris she can sing the entirety of EACH ONE of BTS's singles",
				"but that's wild like how can a human being even remember all of that",
				"you take a look around and you realize you need to find a number",
				"perhaps the number is modulo something??",
				"Carolina sees you in the corner of his eyes and asks you to test her",
				"she's tasked you with quizzing her in songs and she breaks out into each of their dances",
				"iris said she'll tell you the password but she also mentions that the you'll need to submit the modulo"];

class Textbox extends Component {
	constructor(props) {
		super(props);
		this.state = {text: prompts,
					  max: 10,
					  index: 0,
					  weight: 0
					 };

		this.handleForward = this.handleForward.bind(this);
		this.handleBackwards = this.handleBackwards.bind(this);
		this.setWeight = this.setWeight.bind(this);
	}

	handleForward() {
		console.log(this.state.index);
		if (this.state.index < (this.state.max - 1)) {
			this.setState({index: this.state.index + 1});
		}
	}

	handleBackwards() {
		if (this.state.index > 0) {
			this.setState({index: this.state.index - 1});
		}
	}

	renderBackwardsButton() {
		if (this.state.index == 0) {
			return null;
		}
		return <button onClick={this.handleBackwards}>Previous</button>;
	}

	renderForwardsButton() {
		if (this.state.index >= this.state.max - 1) {
			return null;
		}
		return <button onClick={this.handleForward}>Next</button>;
	}

	setWeight(event) {
		this.setState({weight: event.target.value},() => { console.log( this.state.weight); });
	}

	renderContent() {

		let ret;

		if (this.state.index >= 1) {
			if (this.state.weight == 860) {
				ret = <div>
						<div> 100 you're doing good chief. Heres the <a href="https://swetreatfinal.netlify.app">next challenge</a> </div>
						<div id="content">
							<img id="carolina" src={require('./carolina.png').default} />
							<img id="bts" src={require('./bts.jpeg').default} />
							<img id="iris" src={require('./iris.png').default} />
						</div>
						<form>
							<p>Enter the correct number:</p>
							<input
								type='number'
								onChange={this.setWeight}
							/>
							</form>
					  </div>

			} else {
				ret = <div>
						<div id="content">
							<img id="carolina" src={require('./carolina.png').default} />
							<img id="bts" src={require('./bts.jpeg').default} />
							<img id="iris" src={require('./iris.png').default} />
						</div>
						<form>
							<p>Enter the correct weight:</p>
							<input
								type='number'
								onChange={this.setWeight}
							/>
						</form>
					  </div>
			}
		}

		return ret;
	}

	render() {
		let content = this.renderContent();
		let forwardButton = this.renderForwardsButton();
		let backwardsButton = this.renderBackwardsButton();

		return (
			<div>
				<div id="textDisplay"> {this.state.text[this.state.index]} </div>
				<div>
					{backwardsButton}
					{forwardButton}
				</div>
				{content}
			</div>
		)
	}
}

export default Textbox;

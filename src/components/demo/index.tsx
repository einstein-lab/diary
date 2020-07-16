import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import HookTest from '../HookTest';

interface IProps {}

interface IState {
	content: String;
	radio: Boolean;
	checkBox1: Boolean;
	checkBox2: Boolean;
}

export default class Demo extends React.Component<IProps, IState> {
	readonly state: IState = {
		content: '',
		radio: false,
		checkBox1: false,
		checkBox2: false,
	};

	componentDidMount() {
		this.setState({ content: '22222222222222222222222222222' }, function () {
			// ReactDOM.unmountComponentAtNode(
			// 	document.getElementById('root')!
			// );
		});
		console.log(ReactDOM.findDOMNode(this));
	}

	handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		console.log(e, this);
	};

	onChange = () => {
		console.log('132123');
	};

	render() {
		return (
			<div>
				{this.state.content}
				<button onClick={this.handleClick}>这是一个按钮</button>
				<input
					type="radio"
					checked={!!this.state.radio}
					onChange={this.onChange}
				/>
				<button onClick={() => this.setState({ radio: !this.state.radio })}>
					radio
				</button>
				<input
					type="checkBox"
					checked={!!this.state.checkBox1}
					onChange={this.onChange}
				/>
				<button
					onClick={() => this.setState({ checkBox1: !this.state.checkBox1 })}
				>
					checkBox1
				</button>
				<input
					type="checkBox"
					checked={!!this.state.checkBox2}
					onChange={this.onChange}
				/>
				<button
					onClick={() => this.setState({ checkBox2: !this.state.checkBox2 })}
				>
					checkBox2
				</button>
				<Button></Button>
				<HookTest></HookTest>
			</div>
		);
	}
}

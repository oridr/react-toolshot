import React, { Component, PropTypes } from 'react';
import Dropdown from 'react-toolbox/lib/dropdown';

import * as theme from './theme.scss';

class DropDown extends Component {
	static propTypes = {
		value: PropTypes.string,
		source: PropTypes.array.isRequired
	}

	constructor(props) {
		super(props);

		this.initState(props);
	}

	componentWillReceiveProps(nextProps) {
		this.initState(nextProps);
	}

	initState = (props) => {
		const { source, value } = props;

		this.state = {
			source,
			value
		};
	};

	handleChange = (value) => {
		this.setState({ value });
	};

	render () {
		const { source, value } = this.props;

		return (
			<Dropdown
				auto
				theme={ theme }
				onChange={ this.handleChange }
				source={ source }
				value={ value }
			/>
		);
	}
}

export default DropDown;

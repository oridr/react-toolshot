import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import FontIcon from 'react-toolbox/lib/font_icon';
import DropDown from '../shared/DropDown/DropDown';

import * as styles from './app.scss';

const countries = [
	{ value: 'EN-gb', label: 'England' },
	{ value: 'ES-es', label: 'Spain'},
	{ value: 'TH-th', label: 'Thailand' },
	{ value: 'EN-en', label: 'USA'}
];

const initValue = 'ES-es';

class App extends Component {
	static propTypes = {
		color: PropTypes.string
	}

	render() {
		const { color } = this.props;

		return (
			<div className="dataGenerator" styleName={classNames({
				'appBg': true,
				'appBg--red': color === 'red',
				'appBg--blue': !color
			})}>
				<h1>Demo</h1>

				<DropDown source={ countries } value={ initValue } />
				<FontIcon styleName="starSize">star</FontIcon>
			</div>
		);
	}
}

export default CSSModules(App, styles, { allowMultiple: true });

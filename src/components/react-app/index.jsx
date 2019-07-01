import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import '../../../../src/components/app/app';

export default class ReactApp extends Component {
	constructor() {
		super();
	}
	
	render() {
		const div = (
			<div>
				<wbx-tms-app />
			</div>
		);

		return div;
	}
}
import * as React from 'react';
import 'font-awesome/css/font-awesome.min.css';

type Props = {
	company: string;
}

export default class Header extends React.Component<Props> {

	render() {
		return (
			<div className="header">
				<i className="fa fa-globe"></i>
				{this.props.company}
			</div>
		);
	}
}
import * as React from 'react';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

type Props = {
  company: string;
}

export default class Header extends React.Component<Props> {

  render() {
        return(
			<div>
			    <i className="fa fa-globe fa-5x"></i>
				<i>{ this.props.company}</i>
			</div>
			);
}
}
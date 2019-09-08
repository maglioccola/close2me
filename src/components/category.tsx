import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import '../style.scss'

type Props = {
  id: string;
  title: string;
  iconName: string;
  color: string;
}

type State = {
  color: string;
}

export default class Category extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const divStyle = {
      backgroundColor: this.props.color
    };
    return (
      <div id="{this.props.id}" className="card" style={divStyle}>
        <i className={this.props.iconName}></i>
        <label>{this.props.title}</label>
      </div>
    );
  }

}


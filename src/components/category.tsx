import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import '../style.scss'

type Props = {
  id: string;
  title: string;
  iconName: string;
  color: string;
  onClick: any;
  selected: string;
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
      backgroundColor: this.props.color,
      color: this.props.selected=="1"?"whitesmoke":"#333333"
    };
    return (
      <div id="{this.props.id}" className="card" style={divStyle} onClick={() => this.props.onClick()}>
        <i className={this.props.iconName}></i>
        <label>{this.props.title}</label>
      </div>
    );
  }

}


import * as React from 'react';

var divStyle: React.CSSProperties = {
  fontWeight: "bold",
  fontSize: 60,
  textAlign: "center"
};

type Props = {
  value: string

}

export default class Campo extends React.Component<Props> {

  render() {
    return (
      <div style={divStyle}>
        {this.props.value}

      </div>
    );
  }

}

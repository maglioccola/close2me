import * as React from 'react';

type Props = {
  company: string;
}

export default class Header extends React.Component<Props> {

  render() {
    return (
      <div>
        <i>{this.props.company}</i>
      </div>
    );
  }

}

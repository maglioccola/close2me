import * as React from 'react';
import Campo from './campo';
import axios from 'axios';
import '../index.css';

const FIVE_SECONDS: number = 5000;
const FIVE_MINUTES: number = 300000;

const COLOR: string[] = ["LightCoral", "cyan", "SkyBlue", "LightYellow"];

var divStyle: React.CSSProperties = {
  fontWeight: "bold",
  fontSize: 72,
  textAlign: "center",
  background: "green"
};

type TypeTicket = {
  errore: string;
  nome: string;
  twsappl: string;
  destinatario: string;
}

type State = {
  message: string;
  tickets: [];
  ticket: TypeTicket;
  counter: number;
  backgroundColor: string,
  intervalId: any
}

export default class Ticket extends React.Component<void, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      message: "",
      tickets: [],
      ticket: {
        errore: "",
        nome: "",
        twsappl: "",
        destinatario: ""
      },
      counter: 0,
      backgroundColor: COLOR[0],
      intervalId: null
    }
  }

  getTickets = () => {
    if (this.state.intervalId != null) {
      clearInterval(this.state.intervalId);
    }
    axios
      .get('http://10.30.102.34:8090/ticket/all')
      .then(res => {
        if(res.data.length > 0) {
          var intervalId = setInterval(this.nextTicket, FIVE_SECONDS);
          this.setState({ message: "", tickets: res.data, intervalId: intervalId });
        } else {
          this.setState({ message: "TWS", tickets: [], intervalId: null });
        }
      }).catch(error => {
        this.setState({ tickets: [], message: error.message });
      });
  }

  nextTicket = () => {
    if (this.state.counter == this.state.tickets.length) {
      this.setState({ counter: 0 });
    }
    this.setState({
      ticket: this.state.tickets[this.state.counter], counter: this.state.counter + 1,
      backgroundColor: COLOR[this.state.counter]
    });
  }

  componentDidMount() {
    this.getTickets();
    setInterval(this.getTickets, FIVE_MINUTES);
  }

  render() {
    if (this.state.tickets.length == 0) {
      return (
        <div style={divStyle}>{this.state.message}</div>
      );
    }
    else {
      return (
        <div className="table" style={{ backgroundColor: COLOR[this.state.counter % 4] }} >
          <div className="tableBody" >
            <div className="row">
              <div className="cell middle widthHalf">
                <Campo value={this.state.ticket.errore} />
              </div>
              <div className="cell middle widthHalf">
                <Campo value={this.state.ticket.nome} />
              </div>
            </div>
            <div className="row">
              <div className="cell middle widthHalf">
                <Campo value={this.state.ticket.twsappl} />
              </div>
              <div className="cell middle widthHalf">
                <Campo value={this.state.ticket.destinatario} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

}


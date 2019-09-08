import * as React from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../style.scss';

type Props = {
    url: string;
}

type State = {
    results: [];
    message: string;
}

export default class Results extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            results: [], message: ""
        }
    }

    getData() {
        axios
        .get('http://192.168.44.9:8080/' + this.props.url)
            .then(res => {
                this.setState({ results: res.data, message: "" });
            }).catch(error => {
                this.setState({ results: [], message: error.message });
            });
    }

    render() {
        this.getData();
        return (
            <div>
                
            </div>
        );
    }

}


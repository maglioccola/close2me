import * as React from 'react';
import axios from 'axios';

import '../style.scss'

type State = {
    results: [];
    message: string;
}

export default class Search extends React.Component<void, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            results: [], message: ""
        }
    }

    getData() {
        axios
            .get('TODO')
            .then(res => {
                this.setState({ results: res.data, message: "" });
            }).catch(error => {
                this.setState({ results: [], message: error.message });
            });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                <h3>Cerca</h3>
            </div>
        );
    }

}


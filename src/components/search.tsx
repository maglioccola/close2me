import * as React from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../style.scss'
import './css/search.css'

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
                <div className="search-container">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        );
    }

}


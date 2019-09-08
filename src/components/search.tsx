import * as React from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../style.scss';
import './css/search.css';

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
        .get('http://192.168.44.9:8080/categories/')
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
                    <div className="input-group col-md-4">
                        <input type="search" id="searchText" className="form-control py-2 border-right-0 border" placeholder="Search" />
                        <span className="input-group-append">
                            <button className="btn btn-outline-secondary border-left-0 border" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }

}


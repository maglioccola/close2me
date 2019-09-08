import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../style.scss';
import './css/search.css';

type Props = {
    onSearch: any;
}

type State = {
    keywords: string;
}

export default class Search extends React.Component<Props, State> {

    render() {
        return (
            <div>
                <div className="search-container">
                    <div className="input-group col-md-4">
                        <input type="search" id="searchText" className="form-control py-2 border-right-0 border" placeholder="Search" onChange={evt => this.updateKeywords(evt.target.value)} />
                        <span className="input-group-append">
                            <button className="btn btn-outline-secondary border-left-0 border" type="button" onClick={() => this.props.onSearch(this.state.keywords)}>
                                <i className="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    updateKeywords(value:string) {
        this.setState({
            keywords: value
        });
    }

}

import * as React from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../style.scss';

type Props = {
    results: [];
}

type EventType = {
    id: string;
    categoryId: string;
    longitude: string;
    latitude: string;
    dateFrom: string;
    dateTo: string;
    title: string;
    note: string;
    metadata: string;
    link: string;
}

export default class Results extends React.Component<Props> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="list-group">
                {
                    this.props.results.map((evento: EventType, i) => {
                        return (
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="..." className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <a href={evento.link} target="_new">
                                            <div className="card-body">
                                                <h5 className="card-title">{evento.title}</h5>
                                                <p className="card-text"><small className="text-muted">{evento.dateFrom}</small></p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        );
    }

}


import React from 'react';

import DownloadItems from '../data/Download';

class Download extends React.Component {

    render() {
        return (
            <section className="wrapper">
                <div id="about">
                    <div className="container">
                        <h1>Download</h1>
                        <div style={{ textAlign: 'center'}}>
                            <i className="fa fa-circle-o-notch fa-spin" style={{ fontSize: '40px'}}></i>
                        </div>
                        <div className="row">
                            {
                                DownloadItems.map(item => (
                                    <div className="col-md-6">
                                        <div className="download">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h3>{item.title}</h3>
                                                    {
                                                        item.description && <p>{item.description}</p>
                                                    }
                                                    <a target="_blank" className="btn btn-action"
                                                       href={item.link}>View Tiesheet</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Download;

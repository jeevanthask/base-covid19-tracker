import React from "react";
import CountUp from 'react-countup';

class LocalCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalcount: props.data.local_total_cases
        }
    }


    render() {

        const {totalcount} = this.state
        return (
            <div className="p-3" style={{backgroundColor: '#FFFFFF'}}>
                <h4 className="text-center">Local Cases</h4>
                <div className="row" style={{marginTop: 15}}>
                    <div className="col-md-4">
                        <div className="card text-white bg-primary mb-3">
                            <div className="card-header text-center"><h4>Total Cases</h4></div>
                            <div className="card-body">
                                <h5 className="card-title text-center"><CountUp start={0}
                                                                                end={this.props.data.local_total_cases}
                                                                                duration={2.75} separator=","/></h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-white bg-warning mb-3">
                            <div className="card-header text-center"><h4>Recovered</h4></div>
                            <div className="card-body">
                                <h5 className="card-title text-center"><CountUp start={0}
                                                                                end={this.props.data.local_recovered}
                                                                                duration={2.75} separator=","/></h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-white bg-danger mb-3">
                            <div className="card-header text-center"><h4>Deaths</h4></div>
                            <div className="card-body">
                                <h5 className="card-title text-center"><CountUp start={0}
                                                                                end={this.props.data.local_deaths}
                                                                                duration={2.75} separator=","/></h5>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

export default LocalCard
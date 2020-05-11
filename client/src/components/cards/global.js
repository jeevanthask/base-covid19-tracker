import React from "react";
import CountUp from "react-countup";
import './global.module.css'

class GlobalCard extends React.Component {
    render() {
        return (
            <div className="p-3" style={{backgroundColor: '#FFFFFF'}}>
                <h4 className="text-center">Global Cases</h4>
                <div className="row" style={{marginTop: 15}}>
                    <div className="col-md-4">
                        <div className="card text-white bg-primary mb-3" id="totalcard">
                            <div className="card-header text-center"><h4>Total Cases</h4></div>
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    <CountUp start={0}
                                             end={this.props.data.global_total_cases}
                                             duration={15} separator=","/></h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-white bg-warning mb-3">
                            <div className="card-header text-center"><h4>Recovered</h4></div>
                            <div className="card-body">
                                <h5 className="card-title text-center"><CountUp start={0}
                                                                                end={this.props.data.global_recovered}
                                                                                duration={15} separator=","/></h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-white bg-danger mb-3">
                            <div className="card-header text-center"><h4>Deaths</h4></div>
                            <div className="card-body">
                                <h5 className="card-title text-center"><CountUp start={0}
                                                                                end={this.props.data.global_deaths}
                                                                                duration={15} separator=","/></h5>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

export default GlobalCard
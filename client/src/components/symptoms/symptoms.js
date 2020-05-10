import React from "react";
import FeverImage from '../../images/fever.png'
import CoughImage from '../../images/cough.png'
import FatigueImage from '../../images/Fatigue.jpg'
import DifficultBreath from '../../images/breathdifficulty.jpg'
import './symptoms.module.css'


class Symptoms extends React.Component {
    render() {
        return (
            <div className="p-3" style={{backgroundColor: '#FFFFFF'}}>
                <div className="row">
                    <div className="col-md-12 p-3">
                        <h4 className="text-center">Main Symptoms</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <div className="card text-white bg-secondary mb-3" style={{width: 270, height: 270}}>
                            <div className="card-header"><h4 className="card-title text-center">Cough</h4></div>
                            <div className="card-body text-center">
                                <img src={CoughImage}  />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card text-white bg-secondary mb-3" style={{width: 270, height: 270}}>
                            <div className="card-header"><h4 className="card-title text-center">Fever</h4></div>
                            <div className="card-body text-center">
                                <img src={FeverImage}  />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card text-white bg-secondary mb-3" style={{width: 270, height: 270}}>
                            <div className="card-header"><h4 className="card-title text-center">Tiredness</h4></div>
                            <div className="card-body text-center">
                                <img src={FatigueImage}  />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card text-white bg-secondary mb-3" style={{width: 270, height: 270}}>
                            <div className="card-header"><h4 className="card-title">Difficulty Breathing</h4></div>
                            <div className="card-body text-center">
                                <img src={DifficultBreath} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Symptoms
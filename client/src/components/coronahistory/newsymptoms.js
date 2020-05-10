import React from 'react'

class Newsymptoms extends React.Component {
    render() {
        return (
            <div className="p-3 text-center" style={{marginTop: 15}} style={{backgroundColor: '#FFFFFF'}}>
                <div >
                    <div className="row">
                        <div className="col-md-12">
                            <div className="alert alert-success" role="alert">
                                <h5>Common Symptoms</h5>
                                <p>
                                    Fever |
                                    Tiredness |
                                    Dry Cough
                                </p>

                                <h6>Some People May Experience</h6>
                                <p>
                                    Aches and Pains |
                                    Nasal Congestion |
                                    Runny Nose |
                                    Sore Throat |
                                    Diarrhoea
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsymptoms
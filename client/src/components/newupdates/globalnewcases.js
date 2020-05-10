import React from 'react'

class Globalnewcases extends React.Component {
    render() {
        return (
            <div>
                <div className="alert alert-dismissible alert-success">
                    <h4 className="alert-heading" style={{color: '#000000'}}>Global New
                        Cases {this.props.data.global_new_cases}</h4>
                </div>
            </div>

        )
    }
}

export default Globalnewcases
import React from 'react'

class Localnewcases extends React.Component {
    render() {
        return (
            <div>
                <div className="alert alert-dismissible alert-primary">
                    <h4 className="alert-heading" style={{color: '#000000'}}>Local New
                        Cases {this.props.data.local_new_cases}</h4>
                </div>
            </div>

        )
    }
}

export default Localnewcases
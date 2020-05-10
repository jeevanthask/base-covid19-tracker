import React from 'react'
import Localnewcases from "./localnewcases";
import Globalnewcases from "./globalnewcases";

class Rendernewupdates extends React.Component {
    render() {
        return (
            <div style={{marginTop: 15}}>
                <div className="p-3" style={{backgroundColor: '#FFFFFF'}}>
                    <div className="row">
                        <div className="col-md-12">
                            <Localnewcases data={this.props.data}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <Globalnewcases data={this.props.data}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rendernewupdates
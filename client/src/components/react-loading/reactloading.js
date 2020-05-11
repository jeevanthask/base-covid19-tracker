import React from "react";

class Reactloading extends React.Component{
    render() {
        return(
            <div className="text-center" style={{marginTop: 50}}>
                <div className="spinner-grow text-danger text-center" role="status">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reactloading
import React from "react";
import Hospital from "./hospital";

class Hospitals extends React.Component{
    render() {
        return(
            <div>
                {
                    this.props.data.hospital_data.map(c => (
                        <Hospital/>
                    ))
                }
            </div>
        )
    }
}

export default Hospitals
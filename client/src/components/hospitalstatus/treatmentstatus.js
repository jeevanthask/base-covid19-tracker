import React from "react";

class Treatmentstatus extends React.Component {
    render() {
        console.log(this.props.data.hospital_data)


        return (
            <div>
                <h1>from the treatment status</h1>
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            {
                                this.props.data.hospital_data.map(c =>
                                    <div>
                                        <div>
                                            <div>
                                                {c.hospital.name}<br/>
                                                {c.hospital_id}<br/>
                                                {c.cumulative_local}<br/>
                                                {c.cumulative_foreign}<br/>
                                                {c.treatment_local}<br/>
                                                {c.treatment_foreign}<br/>
                                                {c.hospital.created_at}<br/>
                                                {c.hospital.updated_at}<br/>
                                            </div>
                                        </div>

                                    </div>)
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default Treatmentstatus
import React from 'react'
import {HorizontalBar, Bubble, Line, Pie, Polar, Radar} from 'react-chartjs-2';

class Currentforeignhospitalindividuals extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            chartData:{
                labels:this.props.data.hospital_data.map(c => c.hospital.name),
                datasets:[
                    {
                        label:'individulas in hospitals',
                        data:this.props.data.hospital_data.map(c => (c.treatment_foreign)),
                        backgroundColor:[
                            '#9c27b0',
                            '#9c27b0',
                            '#9c27b0',
                            '#9c27b0',
                            '#9c27b0',
                            '#9c27b0',
                            '#9c27b0',
                            '#9c27b0',
                            '#9c27b0',
                            '#9c27b0',
                            '#9c27b0',
                            '#9c27b0',

                            '#9c27b0',
                            '#9c27b0',
                            '#9c27b0',
                            '#9c27b0',
                            '#9c27b0',
                            '#9c27b0',

                            '#9c27b0',
                            '#9c27b0',
                            '#9c27b0',
                            '#9c27b0',
                            '#9c27b0',
                            '#9c27b0'
                        ],

                        borderColor: [
                        ],
                        borderWidth: 0
                    }
                ]
            }
        }
    }

    render() {
        return(
            <div style={{marginTop: 15}}>
                <div className="text-center p-3" style={{backgroundColor: '#FFFFFF'}}>
                    <h4>Current Total Foreigners Who Have Been Treated/Observed for COVID-19</h4>
                        <HorizontalBar
                            data={this.state.chartData}
                            options={{
                                title:{
                                    display:true,
                                    text:'',
                                    fontSize:25
                                },
                                legend:{
                                    display: true,
                                    position:'right'
                                },


                            }}
                        />
                    </div>
            </div>

        )
    }
}

export default Currentforeignhospitalindividuals
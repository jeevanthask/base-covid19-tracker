import React from 'react'
import {Bar, Bubble, Line, Pie, Polar, Radar} from 'react-chartjs-2';

class Districtdistribution extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            chartData:{
                labels:['Colombo','Kalutara','Gampaha','Puttalam','Jaffna',],
                datasets:[
                    {
                        label:'populattion',
                        data:[155,63,41,39,16],
                        backgroundColor:[
                            '#f50057',
                            '#ff6d00',
                            '#33691e',
                            '#0091ea',
                            '#76ff03'
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
                    <h4>District Distribution of Confirmed Patients</h4>
                    <Polar
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
                            }

                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Districtdistribution
import React from 'react'
import {Bar, Bubble, Line, Pie, Polar, Radar} from 'react-chartjs-2';

class Localhospitalindividuals extends React.Component{

    constructor(props) {
        super(props);
        console.log(this.props.data.hospital_data)


        this.state = {
            chartData:{
                labels:this.props.data.hospital_data.map(c => c.hospital.name),
                datasets:[
                    {
                        label:'individulas in hospitals',
                        data:this.props.data.hospital_data.map(c => c.cumulative_local),
                        backgroundColor:[
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3',
                            '#2196f3'
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
                    <h4>Total Number Of Sri Lankans Who Have Been Treated/Observed for COVID-19</h4>
                    <Bar

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

export default Localhospitalindividuals
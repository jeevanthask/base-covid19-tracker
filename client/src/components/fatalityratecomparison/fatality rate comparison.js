import React from 'react'
import {Bar, Bubble, HorizontalBar, Line, Pie, Polar, Radar,Doughnut} from 'react-chartjs-2';
import './fatality.module.css'

class FatalityRateComparison extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            chartData: {
                labels: ['UK', 'France','Italy','Spain','Global','USA','SriLanka'],
                datasets: [
                    {
                        label: 'Gender distribution of COVID-19 confirmed in\n' +
                            'Sri Lanka ',
                        data: [
                            15.63,14.47,13.61,10.24,7.07,5.79,1.06
                        ],
                        backgroundColor: [
                            '#9c27b0',
                            '#004d40',
                            '#795548',
                            '#ffd600',
                            '#d50000',
                            '#0d47a1',
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
        return (
            <div style={{marginTop: 15}}>
                <div className="text-center p-3" style={{backgroundColor: '#FFFFFF'}}>
                    <h4>Fatality Rate Comparison</h4>
                    <Doughnut
                        data={this.state.chartData}
                        options={{
                            title: {
                                display: true,
                                text: '',
                                fontSize: 25
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            },
                            scales: {
                                yAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'calculated in percentage %'
                                    }
                                }],
                                xAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Country'
                                    }
                                }]
                            }

                        }}
                    />
                </div>
            </div>

        )
    }
}

export default FatalityRateComparison
import React from 'react'
import {Bar, Bubble, HorizontalBar, Line, Pie, Polar, Radar, Doughnut} from 'react-chartjs-2';

class Recoveryrate extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            chartData: {
                labels: ['Spain', 'Italy', 'Global', 'France', 'SriLanka', 'USA', 'UK'],
                datasets: [
                    {
                        label: 'Gender distribution of COVID-19 confirmed in\n' +
                            'Sri Lanka ',
                        data: [
                            57.58, 36.96, 31.63, 29.59, 23.4, 14.21, 0.2
                        ],
                        backgroundColor: [
                            '#9c27b0',
                            '#0d47a1',
                            '#004d40',
                            '#d50000',
                            '#ffd600',
                            '#76ff03',
                            '#00B8D4'

                        ],
                        borderColor: [],
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
                    <h4>Recovery Rate Comparison</h4>
                    <Pie
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

export default Recoveryrate
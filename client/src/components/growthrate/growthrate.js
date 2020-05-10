import React from 'react'
import {Bar, Bubble, HorizontalBar, Line, Pie, Polar, Radar, Doughnut} from 'react-chartjs-2';

class Growthrate extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            chartData: {
                labels: ['SriLanka', 'USA', 'Spain', 'Italy', 'UK', 'France'],
                datasets: [
                    {
                        label: 'Gender distribution of COVID-19 confirmed in\n' +
                            'Sri Lanka ',
                        data: [
                            2.16, 2.84, 0.24, 0.92, 3.63, 0.45
                        ],
                        backgroundColor: [
                            '#9c27b0',
                            '#0d47a1',
                            '#004d40',
                            '#d50000',
                            '#ffd600',
                            '#76ff03'

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
                    <h4>Growth Rate Comparison</h4>
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

export default Growthrate
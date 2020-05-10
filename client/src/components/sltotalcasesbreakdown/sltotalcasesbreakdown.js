import React from 'react'
import {Doughnut} from 'react-chartjs-2';

class Sltotalcasesbreakdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            chartData: {
                labels: ['Active Cases', 'Recoveries', 'Deaths'],
                datasets: [
                    {
                        label: 'break down of total cases',
                        data: [this.props.data.local_total_cases,
                            this.props.data.local_recovered,
                            this.props.data.local_deaths
                        ],
                        backgroundColor: [
                            '#ff9800',
                            '#4a148c',
                            '#ff1744',

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
                <div className="text-center p-3"  style={{backgroundColor: '#FFFFFF'}}>
                    <h4>BreakDownof COVID-19 confirmed in Sri Lanka</h4>
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
                                        labelString: 'Breakdown of Total Cases'
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

export default Sltotalcasesbreakdown
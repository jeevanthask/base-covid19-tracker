import React from 'react';
import {CountryPicker, Chart} from './components';
import {fetchData} from './api/';
import styles from './App.module.css';

class App2 extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const data = await fetchData();

        this.setState({data});
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);

        this.setState({data, country: country});
    }

    render() {
        const {data, country} = this.state;

        return (
            <div className="p-2" style={{backgroundColor: '#FFFFFF'}}>
                <div className={styles.container} >
                    <CountryPicker handleCountryChange={this.handleCountryChange}/>
                    <Chart data={data} country={country}/>
                </div>
            </div>

        );
    }
}

export default App2;
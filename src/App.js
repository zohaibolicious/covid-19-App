import React from 'react';
import {Cards, Chart, CountryPicker, HeaderThree, Navbar} from './components';
import {fetchData} from './api/';
import styles from './App.module.css';
import './App.css';
import warning1 from './components/Container/textloop'
import TextLoop from "react-text-loop/es";
class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const data = await fetchData();

        this.setState({ data });
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);

        this.setState({ data, country: country });
    }

    render() {
        const { data, country } = this.state;
        if(!data){
            return(
            <h1>
                <TextLoop>
                    <h1>Hello</h1>
                    <h1>Hi !</h1>
                </TextLoop>
            </h1>
            )
        }

        return (
            <div>
            <div className={styles.container}>
                <Navbar></Navbar>
                <warning1/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
            </div>

        );
    }
}

export default App;

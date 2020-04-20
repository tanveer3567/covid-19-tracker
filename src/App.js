import React from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import covidImage from './imgaes/covid-19.png';

class App extends React.Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount () {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData
    })
  }

  handleCountryChange = async (country) => {

    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country: country
    })
  }

  render() {

    const {data} = this.state;
    const {country} = this.state;

    console.log(country)
    return (
      <div className={styles.container}>
        <img className={styles.image} src={covidImage} alt="COVID-19"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        <br></br>
        <h4>@Copy right: Tanveer Ahmed Shaik. Developed using react and https://covid19.mathdro.id/ </h4>
      </div>
    )
  }
}

export default App;

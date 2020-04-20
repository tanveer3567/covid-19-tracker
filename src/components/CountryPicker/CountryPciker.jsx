import React, {useState, useEffect} from "react";
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import  {fectCountries} from '../../api';

const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] =  useState([]);

    useEffect(() => {
         (async () => {
            setFetchedCountries(await fectCountries());
         })();
    }, [setFetchedCountries])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) =>  handleCountryChange(e.target.value)}> 
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
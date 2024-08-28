import { StyleSheet, Text, View, ActivityIndicator, Alert,StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Card component
import Card from '../components/Card';
//Result screen
export default function Result({ api, appId, route }) {
    // variable for input value
    const { inputValue } = route.params;
    // states  
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // get weather Data 
    const fetcData = async (inputValue) => { //pass input value
        try {
            const response = await fetch(`${api}/weather?q=${inputValue}${appId}`); // set api and get data
            const data = await response.json(); // format data as json
            if (response.ok) { //if response ok
                setWeatherData(data); //set weather data
                setLoading(false); //change loading state
                savetoHistory(data.id) //save location id to local storage history
            } else {
                setError(data.message || 'Error fetching data'); // set err msg
                setLoading(false); // change loading state
            }
        } catch (error) { // catch err
            setError('Error fetching data'); // set err state
            setLoading(false); // set loading state
            Alert.alert('Error!', 'Error fetching data'); //display err alert
        }
    };

    // save city id to localStorage
    const savetoHistory = async (cityId) => {
        try {
            const storedHistory = await AsyncStorage.getItem('History'); // get already stored data
            let history = storedHistory ? JSON.parse(storedHistory) : []; // parse data to json or empty 
    
            history = history.filter(id => id !== cityId); // Remove existing city ID to avoid duplicates 
            history.unshift(cityId); // Add the new city ID at the beginning of the history
            
            if (history.length > 5) { // Limit history to a maximum of 5 items
                history.pop();  // Remove the oldest city ID
            }
            
            await AsyncStorage.setItem('History', JSON.stringify(history)); // Save the updated history back to AsyncStorage
        } catch (e) {
            console.error('Failed to save city ID to storage', e); // catch err, log err
        }
    };

    // on screen open get data
    useEffect(() => {
        fetcData(inputValue); // call to get data
    }, []);

    // display loading state
    if (loading) {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <ActivityIndicator size="large" color="#fff" />
            </View>
        );
    }

    // display err state
    if (error) {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }
    // retrun/render data
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            {/* single card component */}
            <Card weatherData={weatherData} /> 
        </View>
    );
}
// styles
const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,
        padding: 25,
        flex: 1,
        backgroundColor: '#00000025',
        alignItems: 'center',
        justifyContent:'center'
    },
    

});
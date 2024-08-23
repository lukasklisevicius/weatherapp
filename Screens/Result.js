import { StyleSheet, Text, View, ActivityIndicator, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
// Todo save to history
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Result({ api,appId,route }) {
    const { inputValue } = route.params;
    
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetcData = async (inputValue) => {
        try {
            const response = await fetch(`${api}/weather?q=${inputValue}${appId}`);
            const data = await response.json();
            if (response.ok) {
                setWeatherData(data);
                setLoading(false);
            } else {
                setError(data.message || 'Error fetching data');
                setLoading(false);
            }
        } catch (error) {
            setError('Error fetching data');
            setLoading(false);
            Alert.alert('Error!', 'Error fetching data');
        }
    };



    useEffect(() => {
        fetcData(inputValue);
    }, [inputValue]);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text >Weather for {weatherData?.name}</Text>
            <Text>Temperature: {weatherData?.main?.temp}°C</Text>
            <Text>Condition: {weatherData?.weather[0]?.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
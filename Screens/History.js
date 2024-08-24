import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator, Alert, FlatList } from 'react-native';
// import card component
import Card from '../components/Card'; 
// History screen
export default function History({ api, appId, route }) {
    const cityIds = route.params ? route.params.history.join(',') : '';
    // console.log(cityIds)

    // set states
    const [weatherData, setWeatherData] = useState(null); // weather data all
    const [loading, setLoading] = useState(true); // loading state
    const [error, setError] = useState(null); //err state

    // fetch data from api, to get all stored cities 
    const fetchData = async (cityIds) => {
        try {
            const response = await fetch(`${api}/group?id=${cityIds}${appId}`); // new endpoint 
            const data = await response.json(); // format data as json
            if (response.ok) { 
                setWeatherData(data); // if res ok, set data to state
            } else {
                setError(data.message || 'Error fetching data'); // else set err state
            }
        } catch (error) { 
            setError('Error fetching data'); // catch err
            Alert.alert('Error!', 'Error fetching data'); // alert
        } finally {
            setLoading(false); // set loading state to false
        }
    };

    // on screen open get data
    useEffect(() => {
        fetchData(cityIds); // call to function
    }, [cityIds]); // run when cityIds changes

    //  function to render Cards
    const renderItem = ({ item }) => (
        // Card component
        <Card key={item.id} weatherData={item} />
    );
    //  display loading state
    if (loading) {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <ActivityIndicator size="large" color="#fff" />
            </View>
        );
    }
    // dispaly err state
    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }
    // display screen with weather data for all cities
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            {/* scrollable flat list */}
            <FlatList
                style={{width:'100%'}}
                data={weatherData.list}  
                renderItem={renderItem}   
                keyExtractor={(item) => item.id.toString()} 
                contentContainerStyle={{ paddingBottom: 20 }} 
            />
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
        justifyContent: 'flex-start', 
    },
    errorText: {
        color: 'red',
        marginTop: 20,
    },
});

// import packages
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Keyboard, StatusBar, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
// create home screen
export default function Home() {
    // define navigation
    const navigation = useNavigation();
    // useState for inputValue and history
    const [inputValue, setInputValue] = useState('');
    const [history, setHistory] = useState([]);
    // get Stored history
    const getHistory = async () => {
        try {
            const storedHistory = await AsyncStorage.getItem('History'); // get data from the localStorage
            return storedHistory ? JSON.parse(storedHistory) : []; // return parsed json data or empty 
        } catch (e) {
            console.error('Failed to get city IDs from local storage', e); //log err
            return []; //if err return empty 
        }
    };

    const fetchHistory = async () => {
        const historyData = await getHistory(); // call get stored history
        setHistory(historyData); // set data to state
    };

    // on screen open get history data
    useEffect(() => {
        fetchHistory(); // call to get response
    }, [history]); //run when history changes

    // GO button handler
    const handleClickGo = () => {
        if (inputValue.trim()) { //check if not spaces
            setInputValue('') //set inputvalue to empty after submition
            Keyboard.dismiss(); //close keybord
            navigation.navigate('Result', { inputValue }); //navigate to Result screen and pass inputvalue
        } else {
            alert('Please enter a valid input'); //alert if input value empty
        }
    };
    // History button handler
    const handleClickHistory = () => {
        navigation.navigate('History', { history }) // navigate to History screen and pass history data
    }

    return (
        <View style={styles.container}>
            {/* set statusbar color */}
            <StatusBar barStyle="light-content" />
            <View style={styles.center}>
                <Animatable.View animation="zoomIn" >
                    {/* display logo */}
                    <Image source={require("../assets/Logo.png")} style={{ width: '100%'}} resizeMode='contain' />

                </Animatable.View>
                <Animatable.View animation="zoomIn" style={styles.inputContainer}>
                    {/* display text input */}
                    <TextInput
                        style={[styles.textInput, styles.elevation]}
                        placeholder="Miestas"
                        maxLength={20}
                        value={inputValue}
                        onChangeText={setInputValue}
                    />
                    {/* display Go button */}
                    <CustomButton
                        title="GO!"
                        onPress={handleClickGo}
                        style={styles.button}
                    />
                </Animatable.View>
            </View>
            {/* if history display History button */}
            {history.length > 0 && (
                <Animatable.View animation="fadeIn" delay={300} style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <CustomButton
                        title="History"
                        onPress={handleClickHistory}
                        style={{ width: '60%' }}
                    />
                </Animatable.View>
            )}
        </View>
    );
}

// Button component
const CustomButton = ({ title, onPress, style }) => {
    return (

        <Pressable style={[styles.button, style, styles.elevation]} onPress={onPress}>
            <Text style={styles.btnText}>{title}</Text>
        </Pressable>

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
        justifyContent: 'space-between',
    },
    button: {
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#96c93d',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 18
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        marginTop: -50
    },
    textInput: {
        backgroundColor: '#fff',
        padding: 10,
        paddingLeft: 20,
        borderRadius: 10,
        width: '75%',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    elevation: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
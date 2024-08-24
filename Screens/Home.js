import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

export default function Home() {
    const navigation = useNavigation();
    const [inputValue, setInputValue] = useState('');

    const handleClickGo = () => {
        if (inputValue.trim()) {
            Keyboard.dismiss();
            navigation.navigate('Result', { inputValue });
        } else {
            alert('Please enter a valid input');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Logo width={300} />
                <InputSection 
                    inputValue={inputValue} 
                    setInputValue={setInputValue} 
                    onPressGo={handleClickGo} 
                />
            </View>
            <CustomButton 
                title="History" 
                onPress={() => navigation.navigate('History')} 
                style={{ width: '60%' }} 
            />
        </View>
    );
}

function InputSection({ inputValue, setInputValue, onPressGo }) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={[styles.textInput, styles.elevation]}
                placeholder="Miestas"
                maxLength={20}
                value={inputValue}
                onChangeText={setInputValue}
            />
            <CustomButton 
                title="GO!" 
                onPress={onPressGo} 
                style={styles.button} 
            />
        </View>
    );
}

function Logo({ width }) {
    return <Image source={require("../assets/Logo.png")} style={{ width, resizeMode: 'contain' }} />;
}

function CustomButton({ title, onPress, style }) {
    return (
        <TouchableOpacity style={[styles.button, style, styles.elevation]} onPress={onPress}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    );
}

InputSection.propTypes = {
    inputValue: PropTypes.string.isRequired,
    setInputValue: PropTypes.func.isRequired,
    onPressGo: PropTypes.func.isRequired,
};

CustomButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    style: PropTypes.object,
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,
        padding: 20,
        flex: 1,
        backgroundColor: '#00000035',
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
        width: '75%'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    elevation: {
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        shadowColor: '#000',
    },
});
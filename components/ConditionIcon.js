import { StyleSheet, View, Image } from 'react-native';
import React from 'react';

export default function ConditionIcon({ iconName }) {
    const iconUrl = `https://openweathermap.org/img/wn/${iconName}@2x.png`;

    return (
            <Image 
                source={{ uri: iconUrl }} 
                style={[styles.icon]} 
                resizeMode="contain" 
            />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 30,
        height: 30,  
    },
    elevation: {
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 20,
        shadowColor: '#000',
    },
});
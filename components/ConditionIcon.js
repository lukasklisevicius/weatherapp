import { StyleSheet, Image } from 'react-native';
import React from 'react';

export default function ConditionIcon({ iconName }) { // props - icon name
    // image api
    const iconUrl = `https://openweathermap.org/img/wn/${iconName}@2x.png`;
// return image
    return (
            <Image 
                source={{ uri: iconUrl }} 
                style={[styles.icon]} 
                resizeMode="contain" 
            />
    );
}
//  icon styles
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
});
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'; 

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>this is a home screen</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Result')}>
                <Text>Go to result</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('History')}>
                <Text>Go to history</Text>
            </TouchableOpacity>
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

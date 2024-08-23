import { StyleSheet, Text, View } from 'react-native';


export default function Result() {
    return (
        <View style={styles.container}>
            <Text>this is a result screen</Text>
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

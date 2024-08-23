import { StyleSheet, Text, View } from 'react-native';


export default function History() {
    return (
        <View style={styles.container}>
            <Text>this is a history screen</Text>
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

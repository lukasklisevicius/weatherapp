import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#96c93d', '#96c93d85', '#96c93d85', '#96c93d01', '#96c93d01', '#96c93d01']}
                start={[0, 0]}
                end={[1, 1.5]}
                style={styles.background}
            />
            <View style={styles.center}>
                <View>
                    <Image source={require("../assets/Logo.png")} style={{ width: 300, resizeMode: 'contain' }} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={[styles.textInput,styles.elevation]}
                        placeholder="Miestas"
                        maxLength={20}
                    />
                    <TouchableOpacity style={[styles.button,styles.elevation]}>
                        <Text style={styles.btnText}>GO!</Text>
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity onPress={() => navigation.navigate('Result')}>
                    <Text>Go to result</Text>
                </TouchableOpacity> */}
            </View>

            <TouchableOpacity style={[styles.button,{width:'60%'},styles.elevation]} onPress={() => navigation.navigate('History')}>
                <Text style={styles.btnText}>History</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor:'#daf5cb'
    },
    button: {
        // width: '60%',
        borderWidth: 3,
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
        marginTop:-50
    },
    textInput: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius:5,
        width:'70%'
    },
    inputContainer:{
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    elevation: {
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 25,
        shadowColor: '#000',
      },
});

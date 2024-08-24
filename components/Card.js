import { StyleSheet, Text, View } from 'react-native';
//  import icon component
import ConditionIcon from './ConditionIcon';
import * as Animatable from 'react-native-animatable';
// rCard component
export default function Card(props) {
    // weather data
    const { name, main, weather, dt } = props.weatherData || {};


    const timeStamp = new Date(dt * 1000) // create date obj from timestamp
    const formattedWeek = timeStamp.toLocaleDateString('en-US', { weekday: 'short' }); //format to weekday short
    const formattedDay = timeStamp.toLocaleDateString('en-US', { day: 'numeric' }) // format day number

// display return card
    return (
        <Animatable.View animation="fadeInDown" iterationCount={1} style={[styles.container, styles.elevation]}>
            {/* row 1 */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* Display weather condition icon */}
                {weather?.[0]?.icon && <ConditionIcon iconName={weather[0].icon} />} 
                {/* Display weather condition description */}
                <Text style={{ textTransform: 'capitalize',fontSize:18, marginLeft:5 }}>{weather?.[0]?.description}</Text>
            </View>
            {/* row 2 */}
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {/* display temperature */}
                <Text style={{ fontSize: 37, marginTop: 20 }}>
                    <Text style={{fontWeight: 'bold'}}>{main?.temp}</Text>
                    <Text style={{fontWeight: '300'}}>°C</Text>
                </Text>
            </View>
            {/* row 3 */}
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems:'flex-end' }}>
                {/* display city name */}
                <View>
                    <Text style={{ marginLeft: 10, textTransform: 'capitalize',fontSize:18 }}>{name}</Text>
                </View>
                {/* display formated date */}
                <View style={{justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                    <Text style={{fontSize:18, textTransform:'uppercase'}}>{formattedWeek}</Text>
                    <Text style={{fontSize:18}}>{formattedDay}</Text>
                </View>
            </View>
        </Animatable.View>
    );
}
// styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 20,
        width: '100%',
        flexDirection: 'column',
        borderRadius: 10,
        marginVertical:20
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

import { StyleSheet, Text, View } from 'react-native';
import ConditionIcon from './ConditionIcon';

export default function Card(props) {
    const { name, main, weather, dt } = props.weatherData || {};
    const timeStamp = new Date(dt * 1000)
    const formattedWeek = timeStamp.toLocaleDateString('en-US', { weekday: 'short' });
    const formattedDay = timeStamp.toLocaleDateString('en-US', { day: 'numeric' })


    return (
        <View style={[styles.container, styles.elevation]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {weather?.[0]?.icon && <ConditionIcon iconName={weather[0].icon} />}
                <Text style={{ textTransform: 'capitalize',fontSize:18, marginLeft:5 }}>{weather?.[0]?.description}</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 37, marginTop: 20 ,fontFamily:'sans-serif'}}>
                    <Text style={{fontWeight: 'bold'}}>{main?.temp}</Text>
                    <Text style={{fontWeight: '300'}}>°C</Text>
                </Text>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems:'flex-end' }}>
                <View>
                    <Text style={{ marginLeft: 10, textTransform: 'capitalize',fontSize:18 }}>{name}</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                    <Text style={{fontSize:18, textTransform:'uppercase'}}>{formattedWeek}</Text>
                    <Text style={{fontSize:18}}>{formattedDay}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 20,
        width: '100%',
        flexDirection: 'column',
        borderRadius: 10
    },
    elevation: {
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        shadowColor: '#000',
    },
});

import { StyleSheet, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import screens
import Home from './Screens/Home';
import Result from './Screens/Result';
import History from './Screens/History';
import { useEffect } from 'react';

export default function App() {
  // create stacknavigator
  const Stack = createNativeStackNavigator();
  // define api
  const API = 'https://api.openweathermap.org/data/2.5/'
  const appID = '&appid=10692b614cde4a27abc3caf08c696dfa&units=metric'


  const resizeWindow = () => {
    if (Platform.OS === 'web') {
      window.close()
      window.open('https://lukasklisevicius.github.io/weatherapp/', '_blank', 'width=450,height=950');
    } else {
      alert("This feature is only available in the web environment.");
    }
  };

  useEffect(() => {
    resizeWindow()
}, []);
  // setup render navigator and screens
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation, route }) => ({
        })}
      >
        <Stack.Screen name="Home" options={{
          title: "Home",
          headerShown:false
        }}>
          {props => <Home {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Result" options={{
            title:'',
            headerBackTitle:'Back'
        }}>
          {props => <Result {...props} api={API} appId={appID}/>}
        </Stack.Screen>
        <Stack.Screen name="History" options={{
            title:'',
            headerBackTitle:'Back'
        }}>
          {props => <History {...props} api={API} appId={appID}/>}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
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

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
    // Check if the current URL already has the resized query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const isResized = urlParams.get('resized');
  
    if (!isResized) {
      // Append the query parameter to the URL
      urlParams.set('resized', 'true');
      const newUrl = window.location.pathname + '?' + urlParams.toString();
      
      // Open the new window with the resized dimensions
      const newWindow = window.open(newUrl, '_blank', 'width=450,height=950');
  
      // Close the original window after the new one opens
      if (newWindow) {
        window.close();
      }
    }
  };
  
  useEffect(() => {
    if (Platform.OS === 'web') {
      // Check if the window is already resized
      if (window.innerWidth !== 450 || window.innerHeight !== 950) {
        resizeWindow();
      }
    }
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

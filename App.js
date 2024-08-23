import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Screens/Home';
import Result from './Screens/Result';
import History from './Screens/History';

export default function App() {
  const Stack = createNativeStackNavigator();
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
          {props => <Result {...props} />}
        </Stack.Screen>
        <Stack.Screen name="History" options={{
            title:'',
            headerBackTitle:'Back'
        }}>
          {props => <History {...props} />}
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

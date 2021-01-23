import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Form from './screens/Form';
import Success from './screens/Success';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="form"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="form" component={Form} />
        <Stack.Screen name="success" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

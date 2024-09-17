import React, { } from 'react';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserDetails from './screens/UserDetails';
import AddUser from './screens/AddUser';
import Toast from 'react-native-toast-message';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Users', headerShadowVisible: false }}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
          options={{ title: 'About User', headerShadowVisible: false }}
        />
        <Stack.Screen
          name="AddUser"
          component={AddUser}
          options={{ title: 'New User', headerShadowVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    <Toast />
    </>
  );
}

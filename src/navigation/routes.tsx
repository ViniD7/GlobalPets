import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import SingInScreen from '../screens/Login/SingInScreen/SingInScreen';
import SingUpScreen from '../screens/Login/SingUpScreen/SingUpScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import NavBar from './NavBar/NavBar';
import {Dashboard} from '../screens/Dashboard/Dashboard';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SingInScreen">
      <Stack.Screen name="SingInScreen" component={SingInScreen} />
      <Stack.Screen name="SingUpScreen" component={SingUpScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="NavBar" component={NavBar} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default Routes;

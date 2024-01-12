import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StatusBar } from 'react-native';
import styles from './styles';
import { Veterinarians } from '../../screens/Home/Veterinarians/Veterinarians/Veterinarians';
import { MyPets } from '../../screens/Home/MyPets/MyPets';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsVeterinary from '../../screens/Home/Veterinarians/DetailsVeterinary/DetailsVeterinary';
import Scheduling from '../../screens/Home/Scheduling/Scheduling';
import UserProfile from '../../screens/Home/UserProfile/userProfile';


const Stack = createNativeStackNavigator();

const VeterinariansNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Veterinarians">
      <Stack.Screen name="Veterinarians" component={Veterinarians} />
      <Stack.Screen name="DetailsVeterinary" component={DetailsVeterinary} />
    </Stack.Navigator>
  );
};
const SchedulingNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Veterinarians">
      <Stack.Screen name="Scheduling" component={Scheduling} />
    </Stack.Navigator>
  );
};


const Tab = createBottomTabNavigator();

const barStyle = {
  paddingHorizontal: 20,
  position: 'absolute',
  height: 90,
  backgroundColor: '#004E75',
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  borderTopColor: '#004E75'
};

const NavBar = () => {

  return (
    <>
      <StatusBar barStyle='light-content' />
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          tabBarOptions={{
            keyboardHidesTabBar: true,
          }}
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: barStyle,
          }}>
          <Tab.Screen
            name="VeterinariansNavigation"
            component={VeterinariansNavigation}
            options={{
              tabBarLabel: 'Activities',
              tabBarIcon: ({ focused }) => (
                <View style={{ ...styles.tabContainer, backgroundColor: focused ? '#4077A1' : 'transparent' }}>
                  <FontAwesome6 name='user-doctor' color={'white'} size={30} />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="SchedulingNavigation"
            component={SchedulingNavigation}
            options={{
              tabBarLabel: 'Location',
              tabBarIcon: ({ focused }) => (
                <View style={{ ...styles.tabContainer, backgroundColor: focused ? '#4077A1' : 'transparent' }}>
                  <FontAwesome6 name='clipboard-list' color={'white'} size={30} />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="MyPets"
            component={MyPets}
            options={{
              headerShown: false,
              tabBarLabel: 'InviteWin',
              tabBarIcon: ({ focused }) => (
                <View style={{ ...styles.tabContainer, backgroundColor: focused ? '#4077A1' : 'transparent' }}>
                  <FontAwesome6 name='dog' color={'white'} size={30} />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="UserProfile"
            component={UserProfile}
            options={{
              headerShown: false,
              tabBarLabel: 'InviteWin',
              tabBarIcon: ({ focused }) => (
                <View style={{ ...styles.tabContainer, backgroundColor: focused ? '#4077A1' : 'transparent' }}>
                  <FontAwesome6 name='user-large' color={'white'} size={30} />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </>
  );
};

export default NavBar;

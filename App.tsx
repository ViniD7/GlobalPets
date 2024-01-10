import 'react-native-reanimated';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation/routes';
import { AppointmentsProvider } from './src/context/AppointmentsContext/AppointmentsContext';

const App = () => {
  return (
    <AppointmentsProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <Routes />
      </NavigationContainer>
    </AppointmentsProvider>
  );
};

export default App;

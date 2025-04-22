import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IBrand {
  isClient?: boolean;
}

export const Brand = ({isClient}: IBrand) => {
  return (
    <View style={{paddingTop: 40}}>
      <View style={styles.globalPet}>
        <View
          style={[
            styles.logo,
            isClient ? styles.logoClient : styles.logoEmployee,
          ]}>
          <Ionicons name="paw" size={30} color={isClient ? 'white' : 'white'} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{...styles.text, color: isClient ? 'white' : '#1c528c'}}>
            Central
          </Text>
          <Text
            style={{
              ...styles.text,
              color: isClient ? 'rgb(84, 144, 228)' : 'rgb(84, 144, 228)',
            }}>
            {isClient ? "Pet's" : 'Vet'}
          </Text>
        </View>
      </View>
    </View>
  );
};

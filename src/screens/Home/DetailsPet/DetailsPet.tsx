import React from 'react';
import {Text, View} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Brand} from '../../../components/Logo/Brand';
import {Title} from '../../../components/Title/Title';
import Images from '../../../constants/images';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const DetailsPets = () => {
  return (
    <View style={styles.container}>
      <Brand />
      <LinearGradient
        colors={['#003366', '#056CF2']}
        start={{x: 1, y: 1}}
        end={{x: 0, y: 1}}
        style={styles.card}>
        <Ionicons name="paw" size={25} color={'white'} style={styles.logo} />
      </LinearGradient>
    </View>
  );
};

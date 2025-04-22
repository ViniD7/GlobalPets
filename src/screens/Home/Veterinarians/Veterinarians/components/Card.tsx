import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

interface ICard {
  name: string;
  office: string;
  avatar: string;
  onPress?: () => void;
}

export const Card = ({name, office, avatar, onPress}: ICard) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Ionicons name="paw" size={25} color={'white'} style={styles.logo} />
      <Image
        source={{uri: avatar}}
        style={styles.imageCard}
        resizeMode="contain"
      />
      <View style={styles.dataProfissional}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.data}>
          <FontAwesome6 name="hospital" color={'white'} size={15} />
          <Text style={styles.info}>{office}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

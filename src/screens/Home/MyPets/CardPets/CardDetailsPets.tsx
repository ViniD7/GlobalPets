import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
  Image,
} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ICardDetailsPets {
  name: string;
  race: string;
  icon: JSX.Element;
  image: ImageSourcePropType;
  onPress: () => void;
}

export const CardDetailsPets = ({
  icon,
  name,
  race,
  image,
  onPress,
}: ICardDetailsPets) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Ionicons name="paw" size={25} color={'white'} style={styles.logo} />
      <Image source={image} style={styles.imageCard} resizeMode="contain" />
      <View style={styles.dataPet}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.data}>
          {icon}
          <Text style={styles.info}>{race}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

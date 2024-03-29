import React from 'react';
import { View, Text, TouchableOpacity, ImageSourcePropType, Image } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ICardPets {
    name: string;
    race: string;
    icon: JSX.Element;
    image: ImageSourcePropType;
}

export const CardPets = ({ icon, name, race, image }: ICardPets) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Ionicons name="paw" size={25} color={'white'} style={styles.logo} />
            <Image source={image} style={styles.imageCard} resizeMode='contain' />
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

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ICardPets {
    name: string
    race: string
    icon: JSX.Element
    image: string
}

export const CardPets = ({ icon, name, race, image }: ICardPets) => {
    const navigation = useNavigation<any>();
    return (
        <TouchableOpacity style={styles.card}>
            <Ionicons name="paw" size={25} color={'white'} style={styles.logo} />
            <Image source={{ uri: image }} style={styles.imageCard} resizeMode='contain' />
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

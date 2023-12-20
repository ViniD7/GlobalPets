import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ICard {
    telefone: string
    doctor: string
    office: string
    time: string
    date: string
    email: string
}

export const Card = ({ telefone, doctor, office, time, date, email }: ICard) => {
    return (
        <View style={styles.card}>
            <Ionicons name="paw" size={25} color={'white'} style={styles.logo} />
            <Text style={styles.text}>Médico responsável: {doctor}</Text>
            <Text style={styles.text}>Departamento: {office}</Text>
            <Text style={styles.text}>Contato: {telefone}</Text>
            <Text style={styles.text}>Email: {email}</Text>
            <Text style={styles.text}>Horário: {time}</Text>
            <Text style={styles.text}>Data: {date}</Text>
        </View>
    );
};

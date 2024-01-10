import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface ICard {
    telefone: string;
    doctor: string;
    office: string;
    time: string | null;
    date: string;
    email: string;
    onDelete: () => void;
}

export const Card = ({ telefone, doctor, office, time, date, email, onDelete }: ICard) => {
    const formattedTime = time || '';

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
                <FontAwesome5 name="trash-alt" size={20} color={'white'} />
            </TouchableOpacity>
            <Ionicons name="paw" size={25} color={'white'} style={styles.logo} />
            <Text style={styles.text}>Médico responsável: {doctor}</Text>
            <Text style={styles.text}>Departamento: {office}</Text>
            <Text style={styles.text}>Contato: {telefone}</Text>
            <Text style={styles.text}>Email: {email}</Text>
            <Text style={styles.text}>Horário: {formattedTime}</Text>
            <Text style={styles.text}>Data: {date}</Text>
        </View>
    );
};
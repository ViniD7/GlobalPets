import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Brand } from '../../../components/Logo/Brand';
import { Card } from './components/Card';

export const Scheduling = ({ route }) => {
    const { appointmentData } = route.params;

    return (
        <View style={styles.container}>
            <Brand />
            <Text style={styles.title}>- Minhas Consultas</Text>
            <Card
                telefone={appointmentData.veterinarian.phone}
                date={appointmentData.date}
                doctor={appointmentData.veterinarian.name}
                office={appointmentData.veterinarian.area}
                time={appointmentData.selectedHour}
                email={appointmentData.veterinarian.email}
            />
        </View>
    );
};

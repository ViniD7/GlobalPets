import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { useAppointments } from '../../../context/AppointmentsContext/AppointmentsContext';
import { Card } from './components/Card';
import { Brand } from '../../../components/Logo/Brand';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

interface SchedulingProps {
    route: any;
}

const Scheduling: React.FC<SchedulingProps> = () => {
    const { state, dispatch } = useAppointments();

    const handleDeleteCard = (index: number) => {
        dispatch({ type: 'DELETE_CONSULTA', payload: { index } });
    };

    return (
        <ScrollView style={styles.container}>
            <Brand />
            <View style={styles.title}>
                <Text style={styles.textTitle}>Minhas Consultas</Text>
                <FontAwesome6 name='clipboard-list' color={'white'} size={20} />
            </View>
            {state.consultas.length > 0 ? (
                state.consultas.map((consulta, index) => (
                    <Card
                        key={index}
                        telefone={consulta.phone}
                        date={consulta.date}
                        doctor={consulta.full_name}
                        office={consulta.office}
                        time={consulta.selectedHour}
                        email={consulta.email}
                        onDelete={() => handleDeleteCard(index)}
                    />
                ))
            ) : (
                <Text style={styles.text}>Você ainda não possui consultas marcadas</Text>
            )}
            <View style={styles.endScreen} />
        </ScrollView>
    );
};

export default Scheduling;
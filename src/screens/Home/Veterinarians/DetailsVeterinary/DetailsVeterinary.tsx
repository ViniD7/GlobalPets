import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { useAppointments } from '../../../../context/AppointmentsContext/AppointmentsContext';
import { Brand } from '../../../../components/Logo/Brand';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
interface DetailsVeterinaryProps {
    route: any;
}

const DetailsVeterinary: React.FC<DetailsVeterinaryProps> = ({ route }) => {
    const { veterinarian } = route.params;
    const [selectedHour, setSelectedHour] = useState<string | null>(null);
    const { dispatch } = useAppointments();
    const { navigate } = useNavigation<any>();

    const handleHourPress = (hour: string) => {
        console.log(`Hora selecionada: ${hour}`);
        setSelectedHour(hour);
    };

    const renderAvailableHours = () => {
        return veterinarian.available_hours.map((hour: string, index: number) => (
            <TouchableOpacity
                key={index}
                onPress={() => handleHourPress(hour)}
                style={[
                    styles.button,
                    selectedHour === hour ? styles.selectedHourButton : null,
                ]}
            >
                <Text style={[styles.hour, selectedHour === hour ? styles.selectedHourText : null]}>
                    {hour}
                </Text>
            </TouchableOpacity>
        ));
    };

    const handleAppointmentPress = () => {
        if (selectedHour) {
            dispatch({
                type: 'ADICIONAR_CONSULTA',
                payload: {
                    phone: veterinarian.Phone,
                    full_name: veterinarian.full_name,
                    office: veterinarian.office,
                    email: veterinarian.email,
                    date: veterinarian.date,
                    selectedHour,
                },
            });

            navigate('SchedulingNavigation', {
                params: {
                    phone: veterinarian.Phone,
                    full_name: veterinarian.full_name,
                    office: veterinarian.office,
                    email: veterinarian.email,
                    date: veterinarian.date,
                    selectedHour,
                },
                screen: 'Scheduling',
            });
        } else {
            ToastAndroid.showWithGravityAndOffset(
                'Por favor, selecione uma hora antes de marcar a consulta.',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            );
        }
    };


    return (
        <View style={styles.container}>
            <Brand />
            <View style={styles.card}>
                <View style={styles.veterinarian}>
                    <Image source={{ uri: veterinarian.Avatar }} style={styles.imageCard} resizeMode='contain' />
                    <Text style={styles.name}>{veterinarian.full_name}</Text>
                </View>
                <View style={styles.organizeData}>
                    <View style={styles.data}>
                        <FontAwesome6 name='hospital-user' color={'white'} size={20} />
                        <Text style={styles.text}>{veterinarian.office}</Text>
                    </View>
                    <View style={styles.data}>
                        <FontAwesome name='phone' color={'white'} size={20} />
                        <Text style={styles.text}>{veterinarian.Phone}</Text>
                    </View>
                    <View style={styles.data}>
                        <Feather name='mail' color={'white'} size={20} />
                        <Text style={styles.text}>{veterinarian.email}</Text>
                    </View>
                    <Text style={styles.text}>Data disponível: {veterinarian.date}</Text>
                </View>
                <View style={styles.availableTimes}>
                    <Text style={styles.text}>Horários disponíveis</Text>
                    <View style={styles.organizeButton}>{renderAvailableHours()}</View>
                </View>
            </View>
            <TouchableOpacity style={styles.queryButton} onPress={handleAppointmentPress}>
                <Text style={styles.textButton}>MARCAR CONSULTA</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DetailsVeterinary;

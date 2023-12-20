import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Brand } from '../../../../components/Logo/Brand';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';


const handleHourPress = (selectedHour: string) => {
    console.log(`Hora selecionada: ${selectedHour}`);
};

interface IDetailsVeterinary {
    route: any;
}

const DetailsVeterinary = ({ route }: IDetailsVeterinary) => {
    const { veterinarian } = route.params;

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
                    <View style={styles.organizeButton}>
                        {veterinarian.available_hours.map((hour, index) => (
                            <TouchableOpacity key={index} onPress={() => handleHourPress(hour)} style={styles.button}>
                                <Text style={styles.hour}>{hour}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.queryButton}>
                <Text style={styles.textButton}>MARCAR CONSULTA</Text>
            </TouchableOpacity>
        </View>
    );

};

export default DetailsVeterinary;

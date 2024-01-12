import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Brand } from '../../../components/Logo/Brand';
import { Title } from '../../../components/Title/Title';
import { CardPets } from './CardPets/CardPets';

export const MyPets = () => {
    const navigation = useNavigation<any>();
    return (
        <View style={styles.container}>
            <Brand />
            <Title title='Meus Pets' icon={<MaterialCommunityIcons name='dog' color={'white'} size={24} />} />
            <View>
                <CardPets name='Marley' race='Golden' icon={<FontAwesome6 name='dog' color={'white'} size={15} />} image='https://i.pinimg.com/236x/4e/fb/1c/4efb1cbad1eb4f4ba61df1c79d01ddb9.jpg' />
                <CardPets name='Pennelop' race='Maine Coon' icon={<FontAwesome6 name='cat' color={'white'} size={15} />} image='https://i.pinimg.com/236x/dc/60/2d/dc602d3a058876eed38f57f73fcfe431.jpg' />
            </View>
        </View>
    );
};

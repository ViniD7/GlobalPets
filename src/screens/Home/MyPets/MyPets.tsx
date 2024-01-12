import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Brand } from '../../../components/Logo/Brand';
import { Title } from '../../../components/Title/Title';
import { CardPets } from './CardPets/CardPets';
import Images from '../../../constants/images';

export const MyPets = () => {
    return (
        <View style={styles.container}>
            <Brand />
            <Title title='Meus Pets' icon={<MaterialCommunityIcons name='dog' color={'white'} size={24} />} />
            <View>
                <CardPets
                    name='Marley'
                    race='Golden'
                    icon={<FontAwesome6 name='dog' color={'white'} size={15} />}
                    image={Images.dog}
                />
                <CardPets
                    name='Pennelop'
                    race='Maine Coon'
                    icon={<FontAwesome6 name='cat'
                        color={'white'} size={15} />}
                    image={Images.cat}
                />
            </View>
        </View>
    );
};

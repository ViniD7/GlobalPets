import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import { Brand } from '../../../components/Logo/Brand';


const UserProfile = () => {

    return (
        <View style={styles.container}>
            <Brand />
            <View style={styles.card}>
                <View style={styles.veterinarian}>
                    <Image source={{ uri: 'https://i.pinimg.com/564x/e7/5b/41/e75b41ec9be4ff5303804a35466544e3.jpg' }} style={styles.imageCard} resizeMode='center' />
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>Enzo Marielli</Text>
                        <FontAwesome6 name='user-large' color={'white'} size={12} />
                    </View>
                </View>
                <View style={styles.organizeData}>
                    <View style={styles.data}>
                        <FontAwesome name='phone' color={'white'} size={20} />
                        <Text style={styles.text}>(27) 99878-4588</Text>
                    </View>
                    <View style={styles.data}>
                        <Feather name='mail' color={'white'} size={20} />
                        <Text style={styles.text}>enzomari@gmail.com</Text>
                    </View>
                    <View style={styles.data}>
                        <FontAwesome6 name='house' color={'white'} size={20} />
                        <Text style={styles.text}>Rua das Flores - 23</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default UserProfile;

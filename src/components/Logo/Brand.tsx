import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


export const Brand = () => {

    return (
        <View style={{ paddingTop: 40 }}>
            <View style={styles.globalPet}>
                <View style={styles.logo}>
                    <Ionicons name="paw" size={30} color={'white'} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>
                        Global
                    </Text>
                    <Text style={{ ...styles.text, color: 'rgb(84, 144, 228)' }}>
                        Pet's
                    </Text>
                </View>
            </View>
        </View>
    );
};

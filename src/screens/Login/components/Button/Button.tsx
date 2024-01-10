import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface IButton {
    title: string
    onPress?: () => void;
}

export const Button = ({ title, onPress }: IButton) => {
    return (
        <View>
            <TouchableOpacity style={{ ...styles.entrar }} onPress={onPress}>
                <Text style={styles.enter}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}




import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

interface ISubButton {
    title: string
    onPress?: () => void;
    question: string
}
export const SubButton = ({ title, onPress, question }: ISubButton) => {

    return (
        <View style={styles.singUp}>
            <Text style={styles.textSingUp}>{question}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.textButtonSingUp}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};



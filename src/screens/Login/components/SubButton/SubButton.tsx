import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

interface ISubButton {
    title: string
    onPress?: () => void;
    question: string
    isClient: boolean; 
}
export const SubButton = ({ title, onPress, question, isClient }: ISubButton) => {

    return (
        <View style={styles.singUp}>
            <Text style={{...styles.textSingUp, color: isClient ? "rgb(190,190,190)" : "rgb(43, 36, 36)"}}>{question}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.textButtonSingUp}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};



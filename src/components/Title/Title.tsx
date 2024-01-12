// Scheduling.tsx
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


interface ITitle {
    title: string
    icon: JSX.Element;
}

export const Title = ({ title, icon }: ITitle) => {

    return (
        <View style={styles.title}>
            <Text style={styles.textTitle}>{title}</Text>
            {icon}
        </View>
    );
};


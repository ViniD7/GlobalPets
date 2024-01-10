import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { Brand } from '../../../components/Logo/Brand'

export const MyPets = () => {
    return (
        <View style={styles.container}>
            <Brand />
            <Text style={styles.title}>Meus Pets</Text>
        </View>
    )
}
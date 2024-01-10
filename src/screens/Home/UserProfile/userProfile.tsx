import React from 'react'
import { View, Text } from 'react-native'
import { Brand } from '../../../components/Logo/Brand'
import styles from './styles'

export const UserProfile = () => {
    return (
        <View style={styles.container}>
            <Brand />
            <Text>UserProfile</Text>
        </View>
    )
}
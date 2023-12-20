import React, { useRef, useEffect } from 'react';
import { View, Animated, Easing, Image, StyleSheet, Text } from 'react-native';
import { Brand } from '../../../components/Logo/Brand';

const SplashScreenComponent = () => {
    const scaleValue = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        startAnimation();
    }, []);

    const startAnimation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scaleValue, {
                    toValue: 1.1,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleValue, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    };

    const scaleInterpolation = scaleValue.interpolate({
        inputRange: [1, 1.5],
        outputRange: [1, 1.5],
    });


    return (
        <Animated.View style={[styles.container, { transform: [{ scale: scaleInterpolation }] }]}>
            <Brand />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 10
    },
    image: {
        width: 150,
        height: 150,
        tintColor: 'white'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    img1: {
        height: 40,
        width: 40,
        borderRadius: 10,
        borderColor: '#FFF',
        borderWidth: 2,
        tintColor: '#FFF',
    },
    logo: {
        height: 40,
        width: 40,
        borderRadius: 10,
        borderColor: '#FFF',
        borderWidth: 2,
        tintColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textEduTech: { fontSize: 30, fontWeight: '600', color: '#FFF' },
});

export default SplashScreenComponent;

import React, { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { Brand } from '../../../components/Logo/Brand';
import { styles } from './styles';


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

export default SplashScreenComponent;

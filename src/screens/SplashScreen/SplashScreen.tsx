import React, { useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SplashScreenComponent from './Components/SplashScreenComponent';
import { styles } from './styles';
import Images from '../../constants/images';

const SplashScreen = () => {
    const navigation = useNavigation<any>();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('NavBar');
        }, 1500);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={{
            flex: 1,

        }}>
            <ImageBackground
                source={Images.splash}
                style={{
                    flex: 1,
                }}>
                <View style={styles.container}>
                    <SplashScreenComponent />
                </View>
            </ImageBackground>
        </View>
    );
};


export default SplashScreen;

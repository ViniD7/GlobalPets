import React, { useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SplashScreenComponent from './Components/SplashScreenComponent';
import { styles } from './styles';

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
                source={{ uri: 'https://i.pinimg.com/564x/2d/03/f3/2d03f3a14a13037969b884f7cdd4d727.jpg' }}
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

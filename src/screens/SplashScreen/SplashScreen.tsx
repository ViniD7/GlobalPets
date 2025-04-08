import React, {useEffect, useRef} from 'react';
import {View, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SplashScreenComponent from './Components/SplashScreenComponent';
import {styles} from './styles';
import Images from '../../constants/images';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
  const lottieRef = useRef<LottieView>(null);
  const navigation = useNavigation<any>();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('NavBar');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ImageBackground
        source={Images.wallpaperPet}
        style={{
          flex: 1,
        }}>
        <View style={styles.container}>
          <LottieView
            ref={lottieRef}
            source={require('../SplashScreen/Utils/petLottie.json')}
            style={{
              width: 200,
              height: 200,
            }}
            autoPlay={true}
            loop={true}
            resizeMode="cover"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

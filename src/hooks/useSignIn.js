import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { ToastAndroid } from 'react-native';

const useSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (navigation) => {
        auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('Login bem-sucedido. Navegando para SplashScreen...');
                navigation.navigate('SplashScreen');
            })
            .catch(error => {
                console.log('Erro durante o login:', error.code);
                if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {
                    ToastAndroid.showWithGravityAndOffset(
                        'E-mail ou Senha inválidos',
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM,
                        25,
                        50
                    );
                }
            });
    };
    return {
        email,
        password,
        setEmail,
        setPassword,
        signIn,
    };
};

export default useSignIn;


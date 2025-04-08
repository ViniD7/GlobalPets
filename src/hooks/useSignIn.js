import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { ToastAndroid, Alert } from 'react-native';

const useSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (navigation) => {
        auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('Login bem-sucedido');
                navigation.navigate('SplashScreen');
            })
            .catch(error => {
                const errorMessage = error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password'
                    ? 'E-mail ou Senha inválidos'
                    : error.message;
                ToastAndroid.show('E-mail ou Senha inválidos', ToastAndroid.LONG);
            });
    };

    return { email, password, setEmail, setPassword, signIn };
};

export default useSignIn;

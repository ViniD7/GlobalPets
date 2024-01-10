import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { ToastAndroid } from 'react-native';

const useSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (navigation) => {
        auth().signInWithEmailAndPassword(email, password)
            .then(() => navigation.navigate('SplashScreen'))
            .catch(error => {
                console.log(error);
                if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                    ToastAndroid.showWithGravityAndOffset(
                        'Email ou senha inválidos',
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

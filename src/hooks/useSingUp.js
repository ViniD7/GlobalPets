import { useState } from 'react';
import { ToastAndroid } from 'react-native';
import auth from '@react-native-firebase/auth';

const useSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = () => {
        auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log('user', userCredential);
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    ToastAndroid.showWithGravityAndOffset(
                        'E-mail já existe',
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM,
                        25,
                        50
                    );
                }
                if (error.code === 'auth/invalid-email') {
                    ToastAndroid.showWithGravityAndOffset(
                        'E-mail inválido',
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
        signUp,
    };
};

export default useSignUp;

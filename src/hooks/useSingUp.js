import { useState } from 'react';
import { Alert } from 'react-native';
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
                    Alert.alert('E-mail já existe');
                }
                if (error.code === 'auth/invalid-email') {
                    Alert.alert('E-mail inválido');
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

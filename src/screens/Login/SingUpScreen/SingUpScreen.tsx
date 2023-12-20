import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'
import { Brand } from '../../../components/Logo/Brand';

const SingUpScreen = () => {
    const [hidePass, setHidePass] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    function singUp() {
        auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
            console.log('user', userCredential)
        }).catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                Alert.alert('email já existe')
            }
            if (error.code === 'auth/invalid-email') {
                Alert.alert('email inválido')
            }
        })
    }

    return (
        <>
            <View style={styles.container}>
                <Brand />
                <View style={styles.eduTech}>
                    <Text style={styles.textEduTech}>
                        Criar nova conta
                    </Text>
                    <Text style={styles.slogan}>Preencha o formulário para continuar</Text>
                    <TextInput
                        style={styles.placeholder}
                        placeholder="Email Address"
                        placeholderTextColor={'rgb(90,90,90)'}
                        value={email}
                        onChangeText={setEmail}
                    ></TextInput>
                    <View>
                        <TextInput
                            style={styles.placeholder}
                            placeholder="Password"
                            placeholderTextColor={'rgb(90,90,90)'}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={hidePass}></TextInput>
                        <TouchableOpacity
                            style={styles.hide}
                            onPress={() => setHidePass(!hidePass)}>
                            {hidePass ? (
                                <MaterialCommunityIcons name="eye" size={22} color={'rgb(90,90,90)'} />
                            ) : (
                                <MaterialCommunityIcons
                                    name="eye-off"
                                    size={22}
                                    color={'rgb(90,90,90)'}
                                />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={{ ...styles.entrar, marginTop: 100 }} onPress={singUp}>
                    <Text style={styles.enter}>Continuar</Text>
                </TouchableOpacity>
                <View style={styles.singUp}>
                    <Text style={styles.textSingUp}>Já possui cadastro ?</Text>
                    <TouchableOpacity>
                        <Text style={styles.textButtonSingUp} onPress={() => navigation.navigate('SingInScreen')}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default SingUpScreen;

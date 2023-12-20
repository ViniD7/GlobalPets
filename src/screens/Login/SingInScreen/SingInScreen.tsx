import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import { Brand } from '../../../components/Logo/Brand';


const SingInScreen = () => {
    const [hidePass, setHidePass] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    function singIn() {
        auth().signInWithEmailAndPassword(email, password).then(() => navigation.navigate('SplashScreen')).catch(error => console.log(error))
    }

    return (
        <>
            <View style={styles.container}>
                <Brand />
                <Text style={styles.slogan}>Cuidado que faz a diferença!</Text>
                <View style={styles.form}>
                    <View>
                        <TextInput
                            style={{
                                ...styles.placeholder,
                                marginTop: 70,
                            }}
                            placeholder="E-mail"
                            placeholderTextColor={'rgb(90,90,90)'}
                            value={email}
                            onChangeText={setEmail} />
                        <View>
                            <TextInput
                                style={styles.placeholder}
                                placeholder="Password"
                                placeholderTextColor={'rgb(90,90,90)'}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={hidePass} />
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
                    <View style={styles.singUp}>
                        <View>
                            <TouchableOpacity style={{ ...styles.entrar, marginTop: 15 }} onPress={singIn}>
                                <Text style={styles.enter}>Entrar </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.singUp}>
                        <Text style={styles.textSingUp}>Não possui cadastro ?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SingUpScreen')}>
                            <Text style={styles.textButtonSingUp}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

export default SingInScreen;

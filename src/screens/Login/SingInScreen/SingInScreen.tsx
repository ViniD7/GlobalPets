import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Brand } from '../../../components/Logo/Brand';
import Input from '../components/Inputs/Inputs';
import { Button } from '../components/Button/Button';
import useSignIn from '../../../hooks/useSignIn';
import { SubButton } from '../components/SubButton/SubButton';

const SingInScreen = () => {
    const navigation = useNavigation<any>();
    const { email, password, setEmail, setPassword, signIn } = useSignIn();

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.brand}>
                    <Brand />
                    <Text style={styles.slogan}>Cuidado que faz a diferença!</Text>
                </View>
                <View>
                    <Input
                        placeholder="E-mail"
                        onChangeText={setEmail}
                        value={email}
                        keyboard="email-address"
                    />
                    <Input
                        id={2}
                        placeholder="Senha"
                        onChangeText={setPassword}
                        value={password}
                    />
                </View>
                <View style={styles.singUp}>
                    <Button onPress={() => signIn(navigation)} title='Entrar' />
                </View>
                <SubButton title='Cadastre-se' question='Não possui cadastro ?' onPress={() => navigation.navigate('SingUpScreen')} />
            </View>
        </View>
    );
};

export default SingInScreen;

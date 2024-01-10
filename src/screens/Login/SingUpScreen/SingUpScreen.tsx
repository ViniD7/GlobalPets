import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Brand } from '../../../components/Logo/Brand';
import Input from '../components/Inputs/Inputs';
import { Button } from '../components/Button/Button';
import useSignUp from '../../../hooks/useSingUp';
import { SubButton } from '../components/SubButton/SubButton';

const SingUpScreen = () => {
    const navigation = useNavigation<any>();
    const { email, password, setEmail, setPassword, signUp } = useSignUp();

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Brand />
                <View style={styles.title}>
                    <Text style={styles.textEduTech}>Criar nova conta</Text>
                    <Text style={styles.slogan}>Preencha o formulário para continuar</Text>
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
                <Button title="Continuar" onPress={signUp} />
                <SubButton title='Entrar' question='Já possui cadastro ?' onPress={() => navigation.navigate('SingInScreen')} />
            </View>
        </View>
    );
};

export default SingUpScreen;

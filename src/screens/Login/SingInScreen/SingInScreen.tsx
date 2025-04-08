import React, { useState } from 'react';
import { Text, View, Switch, TouchableOpacity, StatusBar } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Brand } from '../../../components/Logo/Brand';
import Input from '../components/Inputs/Inputs';
import { Button } from '../components/Button/Button';
import useSignIn from '../../../hooks/useSignIn';
import { SubButton } from '../components/SubButton/SubButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const SingInScreen = () => {
    const navigation = useNavigation<any>();
    const { email, password, setEmail, setPassword, signIn } = useSignIn();
    const [isClient, setIsClient] = useState(true); 

    const toggleMode = () => {
        setIsClient(!isClient);
    };

    return (
        <View style={[styles.container, isClient ? styles.clientMode : styles.employeeMode]}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle={isClient? 'light-content' : 'dark-content'} />
            <View style={styles.form}>
                <View style={styles.brand}>
                <Brand isClient={isClient} />
                    <Text style={[styles.slogan, isClient ? styles.clientText : styles.employeeText]}>
                        {isClient ? 'Cuidado que faz a diferença!' : 'Gerencie com excelência!'}
                    </Text>
                </View>
                <View>
                    <Input
                        placeholder="E-mail"
                        onChangeText={setEmail}
                        value={email}
                        keyboard="email-address"
                        isClient={isClient}
                    />
                    <Input
                        id={2}
                        placeholder="Senha"
                        onChangeText={setPassword}
                        value={password}
                        isClient={isClient}
                    />
                </View>

                <View style={styles.singUp}>
                    <Button onPress={() => signIn(navigation)} title="Entrar" />
                <TouchableOpacity style={styles.switchButton} onPress={toggleMode}>
                         <View style={{...styles.ballButton, left: isClient ? 6 : 43}} />
                         <FontAwesome6 name='user-doctor' size={19} color={"#FFF"}/>
                         <MaterialCommunityIcons name='dog' color={"#FFF"} size={22}/>
                     </TouchableOpacity>
                </View>
                <SubButton
                    title="Cadastre-se"
                    question="Não possui cadastro?"
                    onPress={() => navigation.navigate('SingUpScreen')}
                    isClient={isClient}
                />
            </View>
        </View>
    );
};

export default SingInScreen;

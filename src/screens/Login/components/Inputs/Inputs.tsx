import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IInput {
    id?: number;
    placeholder: string;
    onChangeText?: (text: string) => void;
    message?: string;
    keyboard?: any;
    maxLength?: number;
    value?: string;
}

const Input = ({
    id,
    placeholder,
    onChangeText,
    keyboard,
    maxLength,
    value,
}: IInput) => {
    const [hidePass, setHidePass] = useState(true);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text: string) => {
        setInputValue(text);
        if (onChangeText) {
            onChangeText(text);
        }
    };

    return (
        <View>
            <View style={styles.input}>
                <TextInput
                    style={styles.placeholder}
                    placeholder={placeholder}
                    placeholderTextColor={'#9B9B9B'}
                    secureTextEntry={id === 2 ? hidePass : false}
                    onChangeText={handleInputChange}
                    value={value !== undefined ? value : inputValue}
                    keyboardType={keyboard}
                    maxLength={maxLength}
                />
                {id === 2 && (
                    <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                        {hidePass ? (
                            <MaterialCommunityIcons name="eye" size={22} color={'rgb(90,90,90)'} />
                        ) : (
                            <MaterialCommunityIcons name="eye-off" size={22} color={'rgb(90,90,90)'} />
                        )}
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default Input;

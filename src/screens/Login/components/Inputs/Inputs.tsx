import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
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
    isClient: boolean; 
}

const Input = ({
    id,
    placeholder,
    onChangeText,
    keyboard,
    maxLength,
    value,
    isClient, 
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
            <View
                style={[
                    styles.input,
                    isClient
                        ? styles.inputClient 
                        : styles.inputEmployee, 
                ]}
            >
                <TextInput
                    style={{...styles.placeholder, color: isClient ? "white" : "#1c528c"}}
                    placeholder={placeholder}
                    placeholderTextColor={isClient ? '#9B9B9B' : '#1c528c'}
                    secureTextEntry={id === 2 ? hidePass : false}
                    onChangeText={handleInputChange}
                    value={value !== undefined ? value : inputValue}
                    keyboardType={keyboard}
                    maxLength={maxLength}
                    cursorColor={isClient ? 'rgb(84, 144, 228)' : 'white'}
                />
                {id === 2 && (
                    <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                        {hidePass ? (
                            <MaterialCommunityIcons
                                name="eye"
                                size={22}
                                color={isClient ? 'rgb(90,90,90)' : '#1c528c'}
                            />
                        ) : (
                            <MaterialCommunityIcons
                                name="eye-off"
                                size={22}
                                color={isClient ? 'rgb(90,90,90)' : '#1c528c'}
                            />
                        )}
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default Input;

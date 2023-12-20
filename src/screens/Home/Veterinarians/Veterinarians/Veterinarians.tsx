import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { Card } from './components/Card';
import styles from './styles';
import Mock from '../../../../services/MOCK_DATA.json';
import { Brand } from '../../../../components/Logo/Brand';
import { useNavigation } from '@react-navigation/native'
import unorm from 'unorm';

interface VetData {
    id: number;
    full_name: string;
    office: string;
    Avatar: string;
}

export const Veterinarians = () => {
    const [filteredText, setFilteredText] = useState<string>('');
    const [jsonData, setJsonData] = useState<VetData[]>([]);
    const navigation = useNavigation();

    const loadJSON = async () => {
        try {
            const data: VetData[] = Mock;
            setJsonData(data);
        } catch (error) {
            console.error('Erro ao carregar o JSON:', error);
        }
    };

    useEffect(() => {
        loadJSON();
    }, []);

    const handleTextChange = (text: string) => {
        setFilteredText(text);
    };

    const removeAccents = (str: string) => {
        return unorm.nfd(str).replace(/[\u0300-\u036f]/g, '');
    };

    const filterVeterinarians = () => {
        const normalizedText = removeAccents(filteredText.toLowerCase());

        return jsonData.filter(
            (item) =>
                removeAccents(item.full_name.toLowerCase()).includes(normalizedText) ||
                removeAccents(item.office.toLowerCase()).includes(normalizedText)
        );
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Brand />
            <TextInput
                style={styles.input}
                value={filteredText}
                onChangeText={handleTextChange}
                placeholder="Encontre seu médico"
                placeholderTextColor="#9B9B9B"
                cursorColor={'rgb(137, 168, 211)'}
            />
            {filterVeterinarians().map((item) => (
                <Card
                    key={item.id.toString()}
                    name={item.full_name}
                    office={item.office}
                    avatar={item.Avatar}
                    onPress={() => {
                        navigation.navigate('DetailsVeterinary', { veterinarian: item });
                    }}
                />

            ))}
            <View style={styles.endScreen} />
        </ScrollView>
    );
};

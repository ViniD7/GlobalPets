import React from 'react';
import {View, ScrollView, TextInput} from 'react-native';
import {Card} from './components/Card';
import styles from './styles';
import Mock from '../../../../services/MOCK_DATA.json';
import {useNavigation} from '@react-navigation/native';
import useFilter from '../../../../hooks/useFilter';
import useJsonLoader from '../../../../hooks/useJsonLoader';
import {Brand} from '../../../../components/Logo/Brand';

interface VetData {
  id: number;
  full_name: string;
  office: string;
  Avatar: string;
}

export const Veterinarians = () => {
  const navigation = useNavigation<any>();
  const jsonData = useJsonLoader(Mock);
  const {filteredText, handleTextChange, filterData} = useFilter({
    data: jsonData,
    filterKeys: ['full_name', 'office'],
  });

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
      {filterData().map((item: VetData) => (
        <Card
          key={item.id.toString()}
          name={item.full_name}
          office={item.office}
          avatar={item.Avatar}
          onPress={() => {
            navigation.navigate('DetailsVeterinary', {veterinarian: item});
          }}
        />
      ))}
      <View style={styles.endScreen} />
    </ScrollView>
  );
};

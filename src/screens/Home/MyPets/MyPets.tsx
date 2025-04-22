import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Brand} from '../../../components/Logo/Brand';
import {Title} from '../../../components/Title/Title';
import {CardDetailsPets} from './CardPets/CardDetailsPets';
import Images from '../../../constants/images';
import {useNavigation} from '@react-navigation/native';

const navigation = useNavigation();
const handlePress = () => {
  navigation.navigate('DetailsPets');
};

export const MyPets = () => {
  return (
    <View style={styles.container}>
      <Brand />
      <Title
        title="Meus Pets"
        icon={<MaterialCommunityIcons name="dog" color={'white'} size={24} />}
      />
      <View>
        <CardDetailsPets
          name="Marley"
          race="Golden nb"
          icon={<FontAwesome6 name="dog" color={'white'} size={15} />}
          image={Images.dog}
          onPress={handlePress}
        />
        <CardDetailsPets
          name="Pennelop"
          race="Maine Coon"
          icon={<FontAwesome6 name="cat" color={'white'} size={15} />}
          image={Images.cat}
          onPress={handlePress}
        />
      </View>
    </View>
  );
};

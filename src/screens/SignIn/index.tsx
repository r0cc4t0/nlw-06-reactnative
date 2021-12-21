import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonIcon from '../../components/ButtonIcon';
import styles from './styles';
import illustrationImg from '../../assets/illustration.png';

function SignIn() {
  const navigation = useNavigation<any>();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Image source={illustrationImg} style={styles.image} resizeMode='stretch' />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos.
        </Text>

        <ButtonIcon title='Entrar com o Discord' onPress={handleSignIn} />
      </View>
    </View>
  );
}

export default SignIn;

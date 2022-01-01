import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import Background from '../../components/Background';
import ButtonIcon from '../../components/ButtonIcon';
import styles from './styles';
import illustrationImg from '../../assets/illustration.png';

function SignIn() {
  const navigation = useNavigation<any>();

  const { user } = useAuth();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <Background>
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
    </Background>
  );
}

export default SignIn;

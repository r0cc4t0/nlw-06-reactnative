import React from 'react';
import { View, StatusBar, Image, Text } from 'react-native';
import ButtonIcon from '../../components/ButtonIcon';
import styles from './styles';
import illustrationImg from '../../assets/illustration.png';

function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />

      <Image source={illustrationImg} style={styles.image} resizeMode='stretch' />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos.
        </Text>

        <ButtonIcon title='Entrar com o Discord' activeOpacity={0.75} />
      </View>
    </View>
  );
}

export default SignIn;

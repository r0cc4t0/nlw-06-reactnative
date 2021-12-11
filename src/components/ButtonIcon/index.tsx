import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import styles from './styles';
import discordImg from '../../assets/discord.png';

function ButtonIcon() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={discordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        Entrar com o Discord
      </Text>
    </TouchableOpacity>
  );
}

export default ButtonIcon;

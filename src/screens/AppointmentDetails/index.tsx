import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { ImageBackground, View, Text, FlatList } from 'react-native';
import Background from '../../components/Background';
import Header from '../../components/Header';
import ListHeader from '../../components/ListHeader';
import Member from '../../components/Member';
import ListDivider from '../../components/ListDivider';
import ButtonIcon from '../../components/ButtonIcon';
import styles from './styles';
import theme from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';

function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'r0cc4t0',
      avatar_url: 'https://avatars.githubusercontent.com/u/60143866?v=4',
      status: 'online'
    },
    {
      id: '2',
      username: 'r0cc4t0',
      avatar_url: 'https://avatars.githubusercontent.com/u/60143866?v=4',
      status: 'offline'
    }
  ];

  return (
    <Background>
      <Header
        title='Detalhes'
        action={
          <BorderlessButton>
            <Fontisto name='share' size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao Challenger sem perder uma partida de MD10!
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title='Jogadores' subtitle='Total 3' />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title='Entrar na Partida' />
      </View>
    </Background>
  );
}

export default AppointmentDetails;

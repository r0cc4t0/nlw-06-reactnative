import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListHeader from '../../components/ListHeader';
import Appointment from '../../components/Appointment';
import ListDivider from '../../components/ListDivider';
import styles from './styles';

function Home() {
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40',
      description: 'É hoje que vamos chegar ao Challenger sem perder uma partida de MD10!'
    }
  ];

  function handleCategorySelect(categoryID: string) {
    categoryID === category ? setCategory('') : setCategory(categoryID);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />

        <ButtonAdd />
      </View>

      <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />

      <View style={styles.content}>
        <ListHeader title='Partidas Agendadas' subtitle='Total 6' />

        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment data={item} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export default Home;

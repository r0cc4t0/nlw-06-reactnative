import React, { useState } from 'react';
import { View } from 'react-native';
import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import styles from './styles';

function Home() {
  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryID: string) {
    categoryID === category ? setCategory('') : setCategory(categoryID);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />
      </View>
    </View>
  );
}

export default Home;

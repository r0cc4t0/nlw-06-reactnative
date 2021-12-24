import React from 'react';
import { ScrollView } from 'react-native';
import categories from '../../utils/categories';
import Category from '../Category';
import styles from './styles';

type Props = {
  categorySelected: string;
  setCategory: (categoryID: string) => void;
  hasCheckBox?: boolean;
};

function CategorySelect({ categorySelected, setCategory, hasCheckBox = false }: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollView>
  );
}

export default CategorySelect;

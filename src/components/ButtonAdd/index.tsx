import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons as MCI } from '@expo/vector-icons';
import styles from './styles';
import theme from '../../global/styles/theme';

function ButtonAdd({ ...rest }: RectButtonProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <MCI name='plus' color={theme.colors.heading} size={24} />
    </RectButton>
  );
}

export default ButtonAdd;

import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from './styles';

function SmallInput({ ...rest }: TextInputProps) {
  return (
    <TextInput style={styles.container} keyboardType='numeric' {...rest} />
  );
}

export default SmallInput;

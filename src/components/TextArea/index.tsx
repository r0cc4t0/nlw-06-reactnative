import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from './styles';

function TextArea({ ...rest }: TextInputProps) {
  return (
    <TextInput style={styles.container} {...rest} />
  );
}

export default TextArea;

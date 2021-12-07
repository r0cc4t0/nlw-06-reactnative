import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';

function Main() {
  const [text, setText] = useState('Hello, World!');

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <TextInput style={styles.input} onChangeText={setText} />

      <Text style={styles.text}>Você digitou: {text}</Text>
    </View>
  );
}

export default Main;

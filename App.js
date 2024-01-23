import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [result, setResult] = useState('');
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');

  const sumValues = () => {
    setResult(parseInt(first) + parseInt(second));
  };

  const decreaseValues = () => {
    setResult(parseInt(first) - parseInt(second));
  };


  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput keyboardType="numeric" style={{ width: 100, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={first => setFirst(first)} value={first} />
      <TextInput keyboardType="numeric" style={{ width: 100, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={second => setSecond(second)} value={second} />

      <View style={{ flexDirection: 'row' }}>
        <Button onPress={sumValues} title="+" />
        <Button onPress={decreaseValues} title="-" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

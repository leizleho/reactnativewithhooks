/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>You clicked {count} times!</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title="Click Me"
        color="blue"
        accessibilityLabel="Click this button to increase count"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

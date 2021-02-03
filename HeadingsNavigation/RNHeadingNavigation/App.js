/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>RNHeading Navigation</Text>
      </View>
      <View style={styles.body}>
        <Text accessibilityRole="header">Header 1</Text>
        <Text>Label 1</Text>
        <Text accessibilityRole="header">Header 2</Text>
        <Text>Label 2</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 10,
  },
  group: {
    padding: 10,
  },
  header: {
    backgroundColor: '#008577',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerText: {
    color: 'white',
  },
});

export default App;

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
  Image,
  TextInput,
  Text,
  AccessibilityInfo,
} from 'react-native';

const App = () => {
  const text1 = 'Hello World!';
  const text2 = 'Label';
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>RN Described By Label</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.group}>
          <Text>{text1}</Text>
          <Text accessibilityLabel={text1}>I got accessibility text from Hello World label</Text>
          <Text>{text2}</Text>
          <TextInput accessibilityLabel={text2} />
        </View>
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

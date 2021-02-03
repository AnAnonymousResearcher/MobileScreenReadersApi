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
  AccessibilityInfo,
} from 'react-native';

function announceAccessibility() {
  AccessibilityInfo.announceForAccessibility(
    'This is an accessibility speak in React Native',
  );
}

const App = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>RNAccessibilitySpeak</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity onPress={announceAccessibility} style={styles.button}>
          <Text>PRESS ME TO SPEAK</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  header: {
    backgroundColor: '#008577',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerText: {
    color: 'white'
  },
});

export default App;

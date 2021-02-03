/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  AccessibilityInfo,
  Text,
} from 'react-native';

import AccessibilityFocus from './AccessibilityFocus';

const AccessibleButton = () => {
  const [hasFocus, setFocus] = useState(false);
  const text = hasFocus ? "I'm in focus" : 'Not in focus';
  useEffect(() => {
    if (hasFocus) {
      AccessibilityInfo.announceForAccessibility(text);
    }
  }, [hasFocus]);

  return (
    <AccessibilityFocus
      accessibilityLabel={text}
      accessible
      onFocusStart={() => setFocus(true)}
      onFocusEnd={() => setFocus(false)}>
      <TouchableOpacity
        style={{...styles.btn, backgroundColor: hasFocus ? 'green' : 'red'}}>
        <Text style={{color: 'white'}}>{text}</Text>
      </TouchableOpacity>
    </AccessibilityFocus>
  );
};

const App = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>RNAccessibileView</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={{...styles.btn, marginBottom: 10}}>
          <Text>Useless Button</Text>
        </TouchableOpacity>
        <AccessibleButton />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  btn: {
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#ddd',
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

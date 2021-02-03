/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  AccessibilityInfo,
  findNodeHandle,
} from 'react-native';

const App = () => {
  const button3Ref = useRef(null);

  const changeFocus = () => {
    const tag = findNodeHandle(button3Ref.current);
    AccessibilityInfo.setAccessibilityFocus(tag);
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>RN assign accessibility focus</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.button} onPress={changeFocus}>
          <Text>Assign focus to button 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Button 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} ref={button3Ref}>
          <Text>Button 3</Text>
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
    marginBottom: 20,
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

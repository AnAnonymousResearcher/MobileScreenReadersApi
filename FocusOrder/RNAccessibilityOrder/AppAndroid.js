/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  findNodeHandle,
} from 'react-native';

import FocusOrder from './FocusOrder';

const AppAndroid = () => {
  const ref1 = React.useRef();
  const ref2 = React.useRef();
  const ref3 = React.useRef();

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>RNAccessibilityOrder</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            FocusOrder.setOrder([
              findNodeHandle(ref3.current),
              findNodeHandle(ref2.current),
              findNodeHandle(ref1.current),
            ]);
          }}>
          <Text>Change accessibility focus order</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity ref={ref1} style={styles.button}>
            <Text>Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity ref={ref2} style={styles.button}>
            <Text>Button 2</Text>
          </TouchableOpacity>
          <TouchableOpacity ref={ref3} style={styles.button}>
            <Text>Button 3</Text>
          </TouchableOpacity>
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
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#aaa',
  },
});

export default AppAndroid;

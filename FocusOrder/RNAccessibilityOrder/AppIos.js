/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import AccessibilityWrapper from './AccessibilityWrapper';

const AppIos = () => {
  const ref1 = React.useRef();
  const ref2 = React.useRef();
  const ref3 = React.useRef();

  const [state, setState] = React.useState([ref1, ref2, ref3]);

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>RNAccessibilityOrder</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setState([ref3, ref2, ref1]);
          }}>
          <Text>Change accessibility focus order</Text>
        </TouchableOpacity>
        <AccessibilityWrapper fieldsRefs={state}>
          <TouchableOpacity ref={ref1} style={styles.button}>
            <Text>Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity ref={ref2} style={styles.button}>
            <Text>Button 2</Text>
          </TouchableOpacity>
          <TouchableOpacity ref={ref3} style={styles.button}>
            <Text>Button 3</Text>
          </TouchableOpacity>
        </AccessibilityWrapper>
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

export default AppIos;

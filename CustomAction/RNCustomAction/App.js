/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  AccessibilityInfo,
} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>RNCustomAction</Text>
      </View>
      <View style={styles.body}>
        <View
          accessible={true}
          accessibilityRole="adjustable"
          accessibilityActions={[{name: 'increment'}, {name: 'decrement'}]}
          onAccessibilityAction={(e) => {
            switch (e.nativeEvent.actionName) {
              case 'decrement':
                setCounter(counter > 0 ? counter - 1 : 0);
                break;
              case 'increment':
                setCounter(counter + 1);
                break;
            }
          }}>
          <Text style={styles.text}>{counter}</Text>
        </View>
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
  text: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
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

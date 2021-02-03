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

const App = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>RNAggregateViews</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.group} accessible={true}>
          <Text>Title</Text>
          <Text>Nothing else matter!</Text>
          <Text>Artist</Text>
          <Text>Metallica</Text>
        </View>
        <View style={styles.group} accessible={true}>
          <Text>Genre</Text>
          <Text>Metal</Text>
          <Text>Year</Text>
          <Text>1991</Text>
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

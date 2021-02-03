import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <>
				<View style={styles.header}>
						<Text style={styles.headerText}>RNAccessibilityName</Text>
				</View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} accessible={true} accessibilityLabel="This is my accessibility label" accessibilityHint="And this is my accessibility hint">
          <Text>I have an accessibility description</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text>Useless button with no accessibility description</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
	marginTop: 20,
  },
  headerText: {
    color: 'white',
  },
});

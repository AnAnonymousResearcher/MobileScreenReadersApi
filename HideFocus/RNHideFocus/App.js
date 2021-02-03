import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


function changeText(){
	console.log("PIPPO");
}

export default class App extends React.Component{
	state = {buttonText:"BUTTON 2", accessible:true}

	
	changeText(){
		this.setState({buttonText:"PIPPO2"})
	}
	
	hideFocus(){
		console.log("Button clicked")
		this.setState({accessible:false, buttonText:"BUTTON 2: I am no more focusable"})
	}
	
	render(){
		return (
			<>
				<View style={styles.header}>
						<Text style={styles.headerText}>RNHideFocus</Text>
				</View>
				<View style={styles.container} >

					<View>
						<TouchableOpacity style={styles.button} onPress={() => this.hideFocus()} >
							<Text>Press to make BUTTON 2 unfocusable</Text>
						</TouchableOpacity>
					</View>

					<View>
						<TouchableOpacity style={styles.button}>
							<Text>BUTTON 1 </Text>
						</TouchableOpacity>
					</View>

					<View importantForAccessibility={this.state.accessible ? "yes" : "no-hide-descendants" } accessible={this.state.accessible}>
						<TouchableOpacity backgroundColor="" style={styles.button} importantForAccessibility={this.state.accessible ? "yes" : "no-hide-descendants" } accessible={this.state.accessible}>
							<Text importantForAccessibility={this.state.accessible ? "yes" : "no-hide-descendants" } accessible={this.state.accessible}>{this.state.buttonText}</Text>
						</TouchableOpacity>
					</View>

				</View>
			</>
		  );
	}
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

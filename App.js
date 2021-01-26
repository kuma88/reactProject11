import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";



export default class App extends React.Component{

  render() {

    return (

      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Name</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add Expense</Text>
        </TouchableOpacity>
        
      </View>

    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
    flexDirection: "row",
  },

  buttonText: {
    textAlign: "center",
    color: "white",
  },

  button: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
    margin: 10,
    marginTop: 30,
    width: 150,
  }

});
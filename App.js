import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,} from '@react-navigation/stack';



function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Details')}
        >
        <Text style={styles.buttonText}>Add Name</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('AnotherScreen')}
        >
      <Text style={styles.buttonText}>Add Expense</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen({navigation}) {
  const [text, setText] = useState("");
  return (
    <View style={{ flex: 0.5, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.text}>Name:</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={(input) => setText(input)}
      />
      <Text style={styles.text}>Amount:</Text>
      <TextInput style={styles.textInput} value={text} onChangeText={(input) => setText(input)}/>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Notes", { text })}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function AnotherScreen({navigation}) {
  return (
    <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.text}>Add Expense</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('HomeScreen')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();


export default function App() {

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="AnotherScreen" component={AnotherScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({

  container: {
    flex: 0.5,
    justifyContent: "center", 
    alignItems: "center",
    flexDirection: "row",
  },

  buttonText: {
    color: "white",
    textAlign: "center",

  },

  text: {
    textAlign: "left",
    marginTop: 20,
    fontSize:30,
    paddingLeft:20,
  },

  button: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
    margin: 10,
    marginTop: 30,
    width: 150,
  },

  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    width: "80%",
    padding: 10,
    marginTop: 20,
 
  }

});
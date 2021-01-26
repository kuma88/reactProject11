import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Details')}
        >
        <Text style={styles.buttonText}>Add Name</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Add Expense</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function AnotherScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Another Screen</Text>
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
          <Stack.Screen name="Another Screen" component={AnotherScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
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
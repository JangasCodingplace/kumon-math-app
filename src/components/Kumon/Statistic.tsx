import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Switch, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Statistic= ({route}: any) => {
    
    



  const[counter, setCounter] =
  useState(0)

  const handlePress = () => {
    setCounter(counter + 1);
  };

const handleReset =() => {
  setCounter(0);
}
  return(
    <View style={styles.container}>
      <Text
onPress={handlePress} style={styles.button}>
  <Text style={styles.buttonText}
  >Drück mich</Text>
  </Text>
  <Text 
  onPress={handleReset} style={styles.button}
  >
    <Text style={styles.buttonText}
  >Reset</Text>
  </Text>
  
  <Text style={styles.counterText}
  >Counter: {counter}</Text>
  </View>
  );
};


const styles = StyleSheet.create({
  container :{
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
button: {
  padding: 10,
  backgroundColor: 'blue',
  borderRadius: 5,
  marginBottom: 10,
},
buttonText: {
  color: 'black',
  fontSize: 20,
},
counterText: {
  fontSize: 20,
},
});

export default Statistic;



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Switch, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Statistic= ({route}: any) => {
    
    


const CounterComponent: React.FC = () => {
  const[counter, setCounter] =
  useState(0)

  const handlePress = () => {
    setCounter(counter + 1);
  };
  return(
    <View style={styles.container}>
      <TouchableOpacity
onPress={handlePress} style={styles.button}
>
  <Text style={styles.buttonText}
  >CDrück mich</Text>
  </TouchableOpacity>
  <Text style={styles.counterText}
  >Counter: {counter}</Text>
  </View>
  );
}};


const styles = StyleSheet.create({
  container :{
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
button: {
  padding: 10,
  backgroundColor: 'black',
  borderRadius: 5,
  marginBottom: 10,
},
buttonText: {
  color: 'black',
  fontSize: 16,
},
counterText: {
  fontSize: 18,
},
});

export default Statistic;



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Switch, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';

const Statistic= ({route}: any) => {
    return(
     <View><Text>Du hast 10 Aufgaben gemacht</Text></View>
    )
  }

export default Statistic;
let counter: number = 0
const counterButton : HTMLButtonElement |
null =
document.getElementById("counterButton") as 
HTMLButtonElement;
const counterElement :  HTMLElement | null =
document.getElementById("counter")

if (counterButton && counterElement) {
  counterButton.addEventListener('click',
()  => {
     counter++;
     if (counterElement) {
      counterElement.textContent =
      `Counter: ${counter}`;
     }
     });
    }


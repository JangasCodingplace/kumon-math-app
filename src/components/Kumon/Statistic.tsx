import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Switch, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useState } from 'react';

const Statistic= ({route}: any) => {
    return(
     <View><Text>Du hast 10 Aufgaben gemacht</Text></View>
    )
  }

export default Statistic;
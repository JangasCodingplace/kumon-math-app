import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Switch, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

   interface StatisticsProps {
  percentages: number[];
}

const Statistic = ({ percentages } :StatisticsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}
      >Statistische Aufteilung:</Text>
      {percentages.map ((percentage, index) => (
    
    <Text key={index}
    style={styles.itemContainer}>
      {`${index + 1}. ${percentage}%`}
      </Text>
      ))}
   </View>
  );
      };
   
      

    const styles = StyleSheet.create ({
    container: {
      padding: 16,
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    });

export default Statistic; 




import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Switch, Image, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';




   interface StatisticsProps {
  percentages: number[];
}



function Statistic ({ percentages}: StatisticsProps){
  const [dynamicData, setDynamicData] = useState<number[]>([]);
  useEffect (() => {

    setDynamicData(percentages);
  }, [percentages]);

  const addData = () => {

    setDynamicData([... dynamicData, 40]);
  };
  console.log('Received Percentages:',percentages);
if (!percentages || percentages.length === 0) {
  console.log('no data available');
  return <Text>Keine Daten vorhanden</Text>;
}
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}
      >Statistische Aufteilung:</Text>
      {dynamicData.map ((percentage, index) => (
    
    <Text key={index}
    style={styles.itemContainer}>
      {`${index + 1}. ${percentage}%`}
      </Text>
      ))}
      <Button title= "Daten hinzufügen"
      onPress={addData} />
   </View>
  );
      }
   
      

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
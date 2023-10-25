import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Switch, Image} from 'react-native';
import HandWritingComponent from "./src/components/HandWritingComponent/index";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardView from './src/components/Dashboard/index';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useState } from 'react';






const BaseView = ({route}: any) => {
  const { taskType } = route.params;
  console.log(taskType)

  return <View style={styles.container}>
    <HandWritingComponent taskGenerator={taskType}/>
    <StatusBar style="auto" />
  </View>
}
const Credits =({route}: any)=>{
  return(
    <View style={styles.crbox}>
      <Text style={styles.crtext}>Diese App entstand in einem Projektkurs der Pina Bausch Gesamtschule.</Text>
      <View style={styles.imgview}><Image source={require("./assets/pina-bausch-gesamtschule-wuppertal-logo.png")} style={styles.img} /></View>
    </View>
  )
}

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();



const styleicons = ({focused, size, route})=>{
  if (route.name === 'Home') {
    return (
      <Ionicons
        name={
          focused? 'ios-home': 'ios-home-outline'
        }
        size={size}
        color={"blue"}
      />
    );
  } else if (route.name === 'Task') {
    return (
      <Ionicons
        name={focused? 'ios-add-circle' : 'ios-add-outline'}
        size={size}
        color={"blue"}
      />
    );
  }else if (route.name === 'Credits') {
    return (
      <Ionicons
        name={focused  ? 'information-circle'  : 'information-circle-outline'}
        size={size}
        color={"blue"}
      />
    );
  }else if (route.name === 'Settings') {
    return (
      <Ionicons
        name={focused ? 'settings'  : 'settings-outline'}
        size={size}
        color={"blue"}
      />
    );
  }
}

const Settings= ({route}: any) => {
  return(
    <View>
     <View style={styles.stbox}><Text>Schriftliche Eingabe</Text><Switch  value={true}></Switch></View>
     <View style={styles.stbox}><Text>Sound</Text><Switch value={true}></Switch></View>
     <View style={styles.stbox}><Text>Tastatureingabe</Text><Switch></Switch></View>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      
    <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, size }) => 
      styleicons({focused, size, route})
  })}  >
        <Tab.Screen name="Home" component={DashboardView} />
        <Tab.Screen name="Task" component={BaseView} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Credits" component={Credits} />
        
    </Tab.Navigator> 
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navc:{
    backgroundColor:"red",
  },

  crbox:{
    backgroundColor:"#fff",
    flex:1,
    display:"flex",
    alignContent:"center",
  },

  crtext:{
    margin:20,
    fontSize:30,
    padding:20,
    backgroundColor:"#fff",
    shadowOpacity:1,
    shadowColor:"#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    elevation: 18,
  },


  stbox:{
    backgroundColor:"#fff",
    display:"flex",
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center",
    padding:20,
    margin:5,

    shadowOpacity:1,
    shadowColor:"#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    elevation: 18,
    
  },

  img:{
    width:300,
    resizeMode: "contain",
  },
  imgview:{
  alignItems:"center",
  justifyContent:"center",
  height:190,
  },


});


{/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={DashboardView} />
        <Drawer.Screen name="Notifications" component={BaseView} />
      </Drawer.Navigator> */}
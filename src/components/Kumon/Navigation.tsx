import { View } from "react-native"
import { Text } from "react-native-svg"
import { StyleSheet } from "react-native";

 function NavigationBar(){
    return (<View style={styels.div}><Text>a</Text></View>)
 }

 export default NavigationBar;

 const styels= StyleSheet.create({

   div:{
      backgroundColor:"red"
   }
 });
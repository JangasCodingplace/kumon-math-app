import { StatusBar } from 'expo-status-bar';
import { BackHandler, Button, StyleSheet, Text, View } from 'react-native';
import HandWritingComponent from "./src/components/HandWritingComponent/index";
import NavigationBar from './src/components/Kumon/Navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styels.navbar}>
        <View style={styels.navbtn}><Text style={styels.navtext}>Start</Text></View>
        <View style={styels.navbtn}><Text style={styels.navtext}>History</Text></View>
        <View style={styels.navbtn}><Text style={styels.navtext}>Credits</Text></View>
      </View>
      
      <NavigationBar></NavigationBar>    
      <Text>Welcome</Text>
      <NavigationBar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
const styels= StyleSheet.create({

  navbar:{
    position:"absolute",
    top:0,
    left:0,
    right:"0%",
    height:"10%",
    backgroundColor:"blue",
    display:"flex",
    flexDirection:"row",
  },
  navbtn:{
    flex:1,
    margin:"1%",
    borderColor:"#fff",
    borderWidth:1,
    marginTop:"10%",
    borderRadius:10,
    display:"flex",
    justifyContent:"center",
  },
  navtext:{
    fontSize:25,
    color:"#fff",
    textAlign:'center' 
  }
  
});
//test

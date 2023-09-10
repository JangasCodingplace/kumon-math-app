import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HandWritingComponent from "./src/components/HandWritingComponent/index"; 

export default function App() {
  return (
    
    <View style={styles.container}>
      <ActivityIndicator></ActivityIndicator><ActivityIndicator></ActivityIndicator>
      <Text>Open up App.tsx to start working on your app!</Text>
      <ActivityIndicator></ActivityIndicator>
      <ActivityIndicator></ActivityIndicator>
      <ActivityIndicator></ActivityIndicator>
      <ActivityIndicator></ActivityIndicator>
      <HandWritingComponent />
      <StatusBar style="auto" />
      <View style={styles.test}>
      {/* <TouchableOpacity onPress={}><Text>Test</Text></TouchableOpacity> */}
      <TouchableOpacity><Text>Test</Text></TouchableOpacity>
      <ActivityIndicator></ActivityIndicator>
      <TouchableOpacity><Text>Test</Text></TouchableOpacity>
      </View>
      <Text>Hallo</Text>
      <ActivityIndicator></ActivityIndicator>
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
  test:{
    backgroundColor: '#941',
    paddingLeft:100,
    paddingRight:20,
  }
});

//test

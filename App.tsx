import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HandWritingComponent from "./src/components/HandWritingComponent/index";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardView from './src/components/Dashboard/index';


const BaseView = ({route}: any) => {
  const { taskType } = route.params;
  console.log(taskType)

  return <View style={styles.container}>
    <HandWritingComponent taskGenerator={taskType}/>
    <StatusBar style="auto" />
  </View>
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={DashboardView} />
        <Tab.Screen name="Task" component={BaseView} />
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
});

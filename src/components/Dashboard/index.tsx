import { useState } from 'react';
import profiles from '../Kumon/Profiles';
import { StyleSheet, SectionList, Text, View, TouchableOpacity } from 'react-native';
// import 'react-native-gesture-handler';

interface DashboardProps {
  navigation: any
}

const DashboardView = ({navigation}: DashboardProps) => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={profiles.map(profile => ({
          title: profile.name,
          data: profile.taskTypes
        }))}
        renderItem={({ item }) =>
          <TouchableOpacity
              onPress={() => navigation.navigate('Task', { taskType: item })}
          >
            <Text style={styles.item}>{item.taskId}</Text>
          </TouchableOpacity>
        }
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => `basicListEntry-${index}`}
      />
      <View><Text onPress={() => navigation.navigate('Task', { taskType: 1 })}>Pressme</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display:"flex",
  },
  sectionHeader: {
    color:"#fff",
    width:400,
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'blue',
  },
  item: {
    backgroundColor:"rgb(240, 246, 255)",
    borderBlockColor:"blue",
    borderBottomWidth:1,
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});




export default DashboardView;

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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});


export default DashboardView;

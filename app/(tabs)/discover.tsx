import {
  StyleSheet, Image, SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

import { Text, View } from '../../components/Themed';
import {  nbaStats } from '../../constants/dataProvider';

export default function TabThreeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={nbaStats}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.position}</Text>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: item.photo
              }} />
            <View style={styles.teamWrapper}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.team}>{item.team}</Text>
            </View>
            <View style={styles.teamWrapper2}>
              <Text style={styles.points}>{item.stat}</Text>
            </View>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },

  header: {
    backgroundColor: '#0000',
    marginTop: 8,
    fontSize: 20,
    padding: 6,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
  },
  tinyLogo: {
    width: 40,
    borderRadius: 50,
    height: 40,
  },
  item: {
    backgroundColor: '#1a1a1a',
    borderRadius: 7,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  team: {
    fontSize: 10,
    paddingLeft: 6,
    paddingRight: 6,
  },
  text: {
    fontSize: 14,
    paddingTop: 6,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: 'bold',
  },
  logo: {
    width: 66,
    height: 58,
  },

  pointStat: {
    fontSize: 11,
    color: "grey",
    paddingTop: 6,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: 'bold',
  },
  points: {
    fontSize: 15,
    color: "grey",
    paddingTop: 6,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: 'bold',
  },
  teamWrapper: {
    backgroundColor: '#1a1a1a',
    padding: 1,
    flex: 1,
  },
  teamWrapper2: {
    backgroundColor: '#1a1a1a',
    padding: 1,
  },
});
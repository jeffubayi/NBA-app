import React, { useState } from 'react'
import { StyleSheet, FlatList, Image, SafeAreaView,useWindowDimensions } from 'react-native';
import { Text, View } from '../../components/Themed';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { WEST,EAST } from '../../constants/dataProvider';

type ItemProps = { title: string, logo: string, nickName: string, position: number, points: string };

const Item = ({ title, logo, position, points, nickName }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.text}>{position}</Text>
    <Image
      style={styles.tinyLogo}
      source={{
        uri: logo
      }} />
    <View style={styles.teamWrapper}>
      <Text style={styles.text}>{nickName}</Text>
      <Text style={styles.team}>{title}</Text>
    </View>
    <View style={styles.teamWrapper2}>
      <Text style={styles.pointStat}>Wins -  Loss</Text>
      <Text style={styles.points}>{points}</Text>
    </View>
  </View>
);

const WestConfRoute = () => (
  <View  >
    <FlatList
      data={WEST}
      renderItem={({ item }) => <Item points={item.points} nickName={item.nickName} position={item.position} title={item.title} logo={item.logo} />}
      keyExtractor={item => item.id}
    />
  </View>
);

const EastConfRoute = () => (
  <View >
    <FlatList
      data={EAST}
      renderItem={({ item }) => <Item points={item.points} nickName={item.nickName} position={item.position} title={item.title} logo={item.logo} />}
      keyExtractor={item => item.id}
    />
  </View>
);

const renderScene = SceneMap({
  first: WestConfRoute,
  second: EastConfRoute,
});

export default function TabTwoScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'West Conference' },
    { key: 'second', title: 'East Conference' },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => <TabBar {...props} style={{backgroundColor: '#0000'}}/>}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#1a1a1a',
    padding: 10,
    flex: 1,
    borderRadius: 7,
    flexDirection: "row",
    marginVertical: 3,
    marginHorizontal: 16,
  },
  teamWrapper: {
    backgroundColor: '#1a1a1a',
    padding: 1,
    flex: 1,
  },
  teamWrapper2: {
    backgroundColor: '#1a1a1a',
    padding: 1,
    // flex: 1,
  },
  title: {
    fontSize: 20,
    padding: 6,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  text: {
    fontSize: 15.5,
    paddingTop: 6,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: 'bold',
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
  team: {
    fontSize: 10,
    paddingLeft: 6,
    paddingRight: 6,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  tinyLogo: {
    width: 40,
    borderRadius: 50,
    height: 40,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

import { StyleSheet,Switch, FlatList, Image,SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import { Text, View } from '../../components/Themed';
import {  nbaGames } from '../../constants/dataProvider';

type ItemProps = { home_team: any, away_team: any,status:any };

export const GameCard = ({ home_team, away_team,status }: ItemProps) => (
  <View style={styles.item}>
    <View style={styles.game}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: home_team.logo
        }} />
      <Text style={styles.text}>{home_team.name}</Text>
      <Text style={styles.position}>{home_team.gameStats}</Text>
    </View>
    <View style={styles.gameScore}>
      {!status && <Text style={home_team.score < away_team.score ? styles.scoreLeast : styles.scoreMost}>{home_team.score}</Text>}
      <Text style={styles.textVs}>FINAL</Text>
      {!status && <Text style={home_team.score < away_team.score ? styles.scoreMost : styles.scoreLeast}>{away_team.score}</Text>}
    </View>
    <View style={styles.game}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: away_team.logo
        }} />
      <Text style={styles.text}>{away_team.name}</Text>
      <Text style={styles.position}>{away_team.gameStats}</Text>
    </View>
  </View>
);


export default function TabThreeScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hide Scores</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#767577' }}
          thumbColor={isEnabled ? '#1D428A' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        /></View>

      <FlatList
        data={nbaGames}
        renderItem={({ item }) => < GameCard status={isEnabled} home_team={item.home_team} away_team={item.away_team} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  game: {
    backgroundColor: '#1a1a1a',
    justifyContent: "center",
    alignItems: 'center',
  },
  gameScore: {
    backgroundColor: '#1a1a1a',
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
  },
  header: {
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  item: {
    backgroundColor: '#1a1a1a',
    padding: 10,
    borderRadius: 6,
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 3,
    marginHorizontal: 16,
  },
  itemSize: {
    backgroundColor: '#1a1a1a',
    padding: 10,
    borderRadius: 6,
    justifyContent: "space-between",
    flexDirection: "column",
    marginVertical: 3,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 17,
    padding: 6,
  },
  text: {
    fontSize: 13,
    paddingTop: 6,
    paddingLeft: 6,
    fontWeight: 'bold',
  },
  textVs: {
    fontSize: 12,
    color: "grey",
    padding: 20,
    fontWeight: "400",
  },
  scoreMost: {
    fontSize: 22,
    padding: 6,
    fontWeight: 'bold',
  },
  scoreLeast: {
    fontSize: 22,
    color: "grey",
    padding: 6,
    fontWeight: 'bold',
  },
  position: {
    color: "grey",
    fontSize: 11,
    paddingTop: 6,
    paddingLeft: 6,

  },
  list: {
    borderRadius: 10,
  },
  tinyLogo: {
    width: 42,
    borderRadius: 50,
    height: 42,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
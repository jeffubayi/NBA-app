import {
  StyleSheet,
  StatusBar,
  Image,
  SafeAreaView,
  SectionList,
  Button,
  useWindowDimensions,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Text, View } from '../../components/Themed';
import React from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import InstaStory from 'react-native-insta-story';
import { SwiperFlatList } from 'react-native-swiper-flatlist';


import { nbaNews, nbaStories, nbaGames } from '../../constants/dataProvider';
import { GameCard } from './games'


const latestNewsRoute = () => (
  <ScrollView style={styles.scrollView}>
    <View style={styles.swipe}>
      <InstaStory
        data={nbaStories}
        duration={10}
      />
    </View>
    <View >
      <SwiperFlatList
        autoplay={false}
        autoplayLoop
        autoplayDelay={3}
        index={0}
        showPagination
        data={nbaGames}
        renderItem={({ item }) => (
          <View style={styles.swiped}>
            <Image source={{ uri: item.photo }} resizeMode="contain" style={styles.imageSquared} />
            < GameCard status={false} home_team={item.home_team} away_team={item.away_team} />
          </View>
        )}
      />
    </View>
    <View style={styles.swiper}>
      <Image source={{ uri: "https://cdn.nba.com/manage/2024/01/joel-embiid-iso-ft-pregame.jpg?w=1568&h=882" }} resizeMode="cover" style={styles.imageSquare}></Image>
      <Text style={styles.textLarge}>Kia MVP Ladder: Embiid  No. 1</Text>
      <Text style={styles.textSmall}>Joel Embiid stays at the top, but the star is missing games and other Top 5 contenders are surging.</Text>
      <View>
    <View style={styles.swiper}>
      <Image source={{ uri: "https://cdn.nba.com/manage/2023/09/2024-all-star-primary-logo-16-9-784x441.jpg" || null }} resizeMode="cover" style={styles.imageSquare}></Image>
      <Text style={styles.textLarge}>Get Your All-Star Votes in Today</Text>
      <Text style={styles.textSmall}>Cast Your Votes now to send your top players to the 2024 NBA All-Star Game in Indianapolis this coming month</Text>
      <Button
        title="Vote Now"
        color="#FFDB58"
        onPress={() => alert('Voting has ended')}
      />
      <View>
      </View>
    </View>
    <View >
      <SwiperFlatList
        autoplay={false}
        autoplayLoop
        autoplayDelay={3}
        index={0}
        // showPagination
        data={nbaGames}
        renderItem={({ item }) => (
          <View style={styles.swiped}>
            <Image source={{ uri: item.photo }} resizeMode="contain" style={styles.imageSquared} />
            < GameCard status={false} home_team={item.home_team} away_team={item.away_team} />
          </View>
        )}
      />
    </View>
   
      </View>
    </View>
    {/* <SafeAreaView style={{flex: 1}}>
      <SectionList
        sections={nbaNews}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: item.photo 
              }} />
            <View style={styles.teamWrapper}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.team}>{item.team}</Text>
            </View>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView > */}
  </ScrollView>
);

const NbaNewsRoute = () => (
  <View>
    <SectionList
      sections={nbaNews}
      keyExtractor={(item, index) => item.name + index}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: item.photo
            }} />
          <View style={styles.teamWrapper}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.team}>{item.team}</Text>
          </View>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </View>
);

const renderScene = SceneMap({
  first: latestNewsRoute,
  second: NbaNewsRoute,
});


export default function TabOneScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Latest' },
    { key: 'second', title: 'NBA  News' },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => <TabBar {...props} style={{ backgroundColor: '#0000' }} />}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
}


const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  child: { width, justifyContent: 'center' },
  scrollView: {
    marginHorizontal: 12,
  },
  textOverLay: { textAlign: 'center' },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  swipe: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 7,
    alignItems: 'center',
  },
  swiped: {
    flexDirection: "column",
    //  backgroundColor: '#1a1a1a',
    height: 350,
    borderRadius: 7,
  },
  swiper: {
    marginTop: 35,
    width: "100%",
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
    marginRight: 6,
    // height: "50%",
  },
  imageSquare: {
    width: "100%",
    height: 160,
    padding: 25,
  },
  imageSquared: {
    paddingLeft: 25,
    borderRadius:15,
    paddingRight: 25,
    height: "51%",
  },
  stories: {
  },
  tinyLogo: {
    width: "40%",
    padding: 1,
    height: "100%",
  },
  logo: {
    width: 66,
    height: 58,
  },
  text: {
    fontSize: 17.5,
    padding: 6,
    fontWeight: 'bold',
  },
  textLarge: {
    fontSize: 21,
    textTransform: "capitalize",
    padding: 6,
    fontWeight: 'bold',
  },
  textSmall: {
    fontSize: 11.5,
    padding: 6,
  },
  storyText: {
    fontSize: 10,
    padding: 6,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  team: {
    fontSize: 12,
    paddingLeft: 6,
    paddingRight: 6,
  },
  header: {
    // backgroundColor: '#0000',
    marginTop: 16,
    fontSize: 18,
    padding: 6,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  headline: {
    // backgroundColor: '#1a1a1a',
    borderRadius: 7,
    justifyContent: "space-between",
    height: 270,
    marginVertical: 6,
    marginHorizontal: 1,
  },
  item: {
    // backgroundColor: '#1a1a1a',
    borderRadius: 7,
    justifyContent: "space-between",
    flexDirection: "row",
    height: 140,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
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
    // backgroundColor: '#1a1a1a',
    padding: 1,
    flex: 1,
  },
  teamWrapper2: {
    // backgroundColor: '#1a1a1a',
    padding: 1,
  },
});

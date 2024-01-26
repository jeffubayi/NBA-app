import {
  StyleSheet, SafeAreaView,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { Text, View } from '../../components/Themed';
import { WATCH } from '../../constants/dataProvider';


type ItemProps = {
  title: string;
  photo: string;
};

const Item = ({ title, photo }: ItemProps) => (
  <View style={styles.item}>
    <ImageBackground source={{ uri: photo }} resizeMode="cover" style={styles.image}></ImageBackground>
  </View>
);

export default function TabThreeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={WATCH}
        renderItem={({ item }) => <Item title={item.title} photo={item.photo} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#1a1a1a',
    borderRadius: 7,
    height: 200,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 5,
  },
  title: {
    fontSize: 32,
  },
});
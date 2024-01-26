
import {
  StyleSheet, TextInput, SafeAreaView,
  SectionList,
} from 'react-native';
import Stepper from 'react-native-stepper-ui';
import { useState ,useEffect} from 'react';
import 'react-native-url-polyfill/auto'
import { Button } from 'react-native'
// import DatePicker from 'react-native-date-picker'

import { Text, View } from '../components/Themed';


export default function ModalScreen() {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
       <Button title="Select Game Date" onPress={() => setOpen(true)} />
      {/* <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  teamWrapper: {
    backgroundColor: '#1a1a1a',
    padding: 1,
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#1a1a1a',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 12,
    lineHeight: 24,
    fontWeight: 'bold',
    backgroundColor: '#000000c0',
  },
  text: {
    color: 'white',
    fontSize: 22,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  item: {
    backgroundColor: '#1a1a1a',
    borderRadius: 7,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 10,
  },
  header: {
    backgroundColor: '#0000',
    marginTop: 8,
    fontSize: 18,
    padding: 6,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  title2: {
    fontSize: 18,
  },
});

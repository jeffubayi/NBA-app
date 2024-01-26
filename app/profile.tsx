
import {
    StyleSheet, TextInput, SafeAreaView,
    SectionList,
  } from 'react-native';
  import { Avatar } from 'react-native-elements';
  import Stepper from 'react-native-stepper-ui';
  import { useState ,useEffect} from 'react';
  import 'react-native-url-polyfill/auto'
  import { supabase } from '../constants/supabase'
  import Auth from '../components/Auth'
  import Account from '../components/Accounts'
  import { Session } from '@supabase/supabase-js'

  import { Text, View } from '../components/Themed';
  
  
  export default function ModalScreen() {
    const [session, setSession] = useState<Session | null>(null)
  
    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])
    return (
      <SafeAreaView>
        <View>
          {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
        </View>
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
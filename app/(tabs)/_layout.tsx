import FontAwesome from '@expo/vector-icons/AntDesign';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme, Image } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
           title: 'For You',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerLeft: () => (
            <Image
              style={{
                width: 60,
                marginLeft:7,
                height: 25,
              }}
              source={{
                uri: "https://www.pngall.com/wp-content/uploads/13/NBA-Logo-PNG-Image.png"
              }} />
          ),
          headerRight: () => (
            <Link href="/profile" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="user"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="games"
        options={{
          title: 'Games',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
          headerLeft: () => (
            <Image
              style={{
                width: 60,
                marginLeft:7,
                height: 25,
              }}
              source={{
                uri: "https://www.pngall.com/wp-content/uploads/13/NBA-Logo-PNG-Image.png"
              }} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="calendar"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          
        }}
      />
      <Tabs.Screen
        name="watch"
        options={{
          title: 'Watch',
          tabBarIcon: ({ color }) => <TabBarIcon name="playcircleo" color={color} />,
          headerLeft: () => (
            <Image
              style={{
                width: 60,
                marginLeft:7,
                height: 25,
              }}
              source={{
                uri: "https://www.pngall.com/wp-content/uploads/13/NBA-Logo-PNG-Image.png"
              }} />
          ),
          headerRight: () => (
            <Link href="/profile" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="user"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="standings"
        options={{
          title: 'Standings',
          tabBarIcon: ({ color }) => <TabBarIcon name="bars" color={color} />,
          headerLeft: () => (
            <Image
              style={{
                width: 60,
                height: 25,
                marginLeft:7,
              }}
              source={{
                uri: "https://www.pngall.com/wp-content/uploads/13/NBA-Logo-PNG-Image.png"
              }} />
          ),
          headerRight: () => (
            <Link href="/profile" asChild>
               <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="user"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color }) => <TabBarIcon name="ellipsis1" color={color} />,
          headerLeft: () => (
            <Image
              style={{
                width: 60,
                height: 25,
                marginLeft:7,
              }}
              source={{
                uri: "https://www.pngall.com/wp-content/uploads/13/NBA-Logo-PNG-Image.png"
              }} />
          ),
          headerRight: () => (
            <Link href="/profile" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="user"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}

import { StyleSheet, Text, View , Pressable, Image} from 'react-native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TasksScreen from '../screens/Tasks.js';
import ProfileScreen from '../screens/Profile.js';
import HomeScreen from '../screens/Home.js';
import FriendsScreen from '../screens/Friends.js';
import DrawerNavigation from '../navigations/DrawerNavigation.js';
const MyBottomTab = createBottomTabNavigator();


const navigationStyles = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: 'black',
    marginTop:0,
    borderTopWidth: 0,
  },
 };

export default function BottomTabNavigation() {
  return (
    <MyBottomTab.Navigator screenOptions={navigationStyles} >
    <DrawerNavigation/>
      <MyBottomTab.Screen name="Home" component={HomeScreen}options={{
      tabBarIcon: ({ size }) => (
      <Image 
        source={require('../assets/icons/home.png')} 
        style={{ width: size, height: size, tintColor: 'white' }} 
      />
    ),
  }}/>
      <MyBottomTab.Screen name="Tasks" component={TasksScreen}options={{
    tabBarIcon: ({ size }) => (
      <Image 
        source={require('../assets/icons/tasks.png')} 
        style={{ width: size, height: size, tintColor: 'white' }} 
      />
    ),
  }}/>
      <MyBottomTab.Screen name="Friens" component={FriendsScreen}options={{
    tabBarIcon: ({ size }) => (
      <Image 
        source={require('../assets/icons/friends.png')} 
        style={{ width: size, height: size, tintColor: 'white' }} 
      />
    ),
  }}/>
      <MyBottomTab.Screen name="Profile" component={ProfileScreen}options={{
    tabBarIcon: ({ size }) => (
      <Image 
        source={require('../assets/icons/profile.png')} 
        style={{ width: size, height: size, tintColor: 'white' }} 
      />
    ),
  }}/>
    </MyBottomTab.Navigator>
  );
};
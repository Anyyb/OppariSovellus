import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Pressable, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TasksScreen from './screens/Tasks.js';
import ProfileScreen from './screens/Profile.js';
import HomeScreen from './screens/Home.js';
import FriendsScreen from './screens/Friends.js';

const MyBottomTab = createBottomTabNavigator();
const navigationStyles = {
  headerStyle: { backgroundColor:'#694890'},
  headerTitleStyle: {fontWeight: 'bold'},
  headerTintColor: 'black',
  headerTitleAlign:'center',
  activeTintColor: '#694890',
  inactiveTintColor: 'gray',
  tabBarStyle: {
    backgroundColor: '#694890', 
  },
 }

export default function App() {
  return (
    <NavigationContainer>
    <StatusBar style="auto" />
    <MyBottomTab.Navigator screenOptions={navigationStyles} >
      <MyBottomTab.Screen name="Home" component={HomeScreen}options={{
      tabBarIcon: ({ color, size }) => (
      <Image 
        source={require('./assets/icons/home.png')} 
        style={{ width: size, height: size, tintColor: color }} 
      />
    ),
  }}/>
      <MyBottomTab.Screen name="Tasks" component={TasksScreen}options={{
    tabBarIcon: ({ color, size }) => (
      <Image 
        source={require('./assets/icons/tasks.png')} 
        style={{ width: size, height: size, tintColor: color }} 
      />
    ),
  }}/>
      <MyBottomTab.Screen name="Friens" component={FriendsScreen}options={{
    tabBarIcon: ({ color, size }) => (
      <Image 
        source={require('./assets/icons/friends.png')} 
        style={{ width: size, height: size, tintColor: color }} 
      />
    ),
  }}/>
      <MyBottomTab.Screen name="Profile" component={ProfileScreen}options={{
    tabBarIcon: ({ color, size }) => (
      <Image 
        source={require('./assets/icons/profile.png')} 
        style={{ width: size, height: size, tintColor: color }} 
      />
    ),
  }}/>
    </MyBottomTab.Navigator>
  </NavigationContainer>
  );
}

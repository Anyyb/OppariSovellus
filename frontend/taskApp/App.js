import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Pressable, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './navigations/BottomNavigation.js';


export default function App() {
  return (
    <NavigationContainer>
    <StatusBar style="auto" />
    <BottomTabNavigation/>
 
    </NavigationContainer>
  );
};
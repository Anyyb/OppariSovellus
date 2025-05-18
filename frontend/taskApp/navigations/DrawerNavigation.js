import 'react-native-gesture-handler';
import { StyleSheet, Text, Pressable, Image} from 'react-native';
import {createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from '../navigations/BottomNavigation.js';
import SingupScreen from '../screens/Singup.js';
import LoginScreen from '../screens/Login.js';

const Drawer = createDrawerNavigator();

const navigationStyles = ({ navigation }) => ({
  headerShown: true,
  drawerPosition:"right",
  headerRight: () => (
    <Pressable style={styles.menu} onPress={() => navigation.openDrawer()}> 
      <Image 
        source={require('../assets/icons/menu.png')} 
        style={{ width: 30, height: 30, tintColor: 'white' }} 
      />
    </Pressable>
  ),
  headerTitleAlign: 'center',
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTitleStyle: {
    fontFamily: 'Arial', 
    fontSize: 24,  
  },
  drawerActiveTintColor: 'white',
  drawerInactiveTintColor: 'white',
  drawerStyle: {
    backgroundColor: 'black',
    width: 200,
  },
});
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator  screenOptions={navigationStyles}>
    <Drawer.Screen name="CZONE" component={BottomTabNavigation} />
    <Drawer.Screen name="Singup" component={SingupScreen}/>
    <Drawer.Screen name="Login" component={LoginScreen}/>
  </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({
    text: {
      color: 'white',
      fontSize: 20,
    },
    menu: {
      marginRight: 10,
    },
  });
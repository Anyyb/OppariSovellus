import 'react-native-gesture-handler';
import { StyleSheet, Text, Pressable, Image} from 'react-native';
import {createDrawerNavigator } from '@react-navigation/drawer';
import SingupScreen from '../screens/Singup.js';

const Drawer = createDrawerNavigator();

const navigationStyles = {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: 'black',
      marginTop:0,
      borderTopWidth: 0,
    },
};
export default function DrawerNavigation() {
    return (
    <Drawer.Navigator screenOptions={navigationStyles}>
    <Drawer.Screen 
      name="SingUp"
      component={SingupScreen} 
      options={{ 
        headerTitle: () => <Text style={styles.text}>Comfort</Text>,
        headerRight: () => (
          <Pressable style={styles.menu}> 
            <Image 
              source={require('../assets/icons/home.png')} 
              style={{ width: 30, height: 30, tintColor: 'white' }} 
            />
          </Pressable>
        ),
      }} 
    />
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
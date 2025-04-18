import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Pressable, Image,ImageBackground} from 'react-native';

export default function HomesScreen() {
  return (
    <ImageBackground source={require('../assets/img/background.jpg')} style={styles.container} resizeMode="cover">
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.infoContainer}>
      <Text style={styles.header}>CZONE</Text>
       <Text style={styles.text}> Discover new opportunities and increase your personal growth with CZONE.</Text>
       <Text style={styles.text}> Join our supportive community, where you can build connections and challenge yourself through individual or group activities to expand your comfort zone.</Text>
       <Text style={styles.text}> Take the first steps and sing-up today it's completely free, with no advertisements.</Text>
       <Text style={styles.text}> Don't hesitate, join us now and unlock the potential for growth and new connections.</Text>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    width:'85%',
    height:'85%',
    borderColor: 'grey',
    borderWidth: 1, 
    shadowColor: '#000',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    color: 'white',
    padding:15,
    fontFamily: 'georgia',
    textAlign:'center',
    textAlignVertical:'center',
  },
  header: {
    padding:10,
    textAlign:'center',
    textAlignVertical:'center',
    fontSize: 18,
    color: 'white',
    fontFamily: 'georgia',
  },
});
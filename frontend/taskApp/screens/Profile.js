import { StyleSheet, Text, View , Pressable} from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      
      <View style={styles.weeklyContainer}>
       <Text style={styles.header}>Profile</Text> 
        <Pressable > 
          <Text>I'm pressable!</Text>
        </Pressable>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:40,
    flexDirection:'column',
    backgroundColor: '#9D83BC',
    alignItems: 'center',
    justifyContent: 'center',
    gap:14,
  },
  weeklyContainer: {
    flex:2,
    width:300,
    height:10,
  },
  header: {
    width:'100%',
    height:50,
    backgroundColor: 'white',
    textAlign: 'center',
    textAlignVertical: 'center', 
    borderRadius: 20,
    fontSize:20,
    backgroundColor: '#694890',
  },
});
import { StyleSheet, Text, View , Pressable, Image} from 'react-native';

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      
      <View style={styles.weeklyContainer}>
       <Text style={styles.header}>Monthly task</Text> 
        <Pressable > 
          <Text>I'm pressable!</Text>
        </Pressable>
        
      </View>
      <View style={styles.monthlyContainer}>
      <Text style={styles.header}>Weekly tasks</Text> 
        <Pressable > 
          <Text>I'm pressable!</Text>
        </Pressable>
        
      </View>
      <View style={styles.dailyContainer}>
      <Text style={styles.header}>Daily tasks</Text> 
      <Pressable > 
        <Image source={require('../assets/cards/consert.svg')}style={{ width:50, height: 50 }} ></Image>
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
  monthlyContainer: {
    flex:3,
    width:300,
    height:10,
  },
  dailyContainer: {
    flex:4,
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
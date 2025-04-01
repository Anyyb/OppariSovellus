import { StyleSheet, Text, View , Pressable, Image} from 'react-native';

export default function HomesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.weeklyContainer}>
       <Text style={styles.text}>COMFORT</Text> 
        <Pressable > 
          <Text style={styles.text}>I'm pressable!</Text>
        </Pressable>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#110D15',
    alignItems: 'center',
    justifyContent: 'center',
    gap:15,
  },
  weeklyContainer: {
    flex:2,
    width:300,
    height:10,
  },
  TopBar: {
    width: '100%',
    height:'12%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color:'white',
    textAlign: 'center',
    textAlignVertical: 'center', 
    fontSize:20,
    marginTop:20,
  },
  header: {
    width:'100%',
    height:50,
    borderRadius: 20,
    backgroundColor: '#694890',
  },
});
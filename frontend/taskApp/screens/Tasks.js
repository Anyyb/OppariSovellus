import { StyleSheet, Text, View , Pressable, Image, FlatList,Alert} from 'react-native';

export default function TasksScreen() {


const dailyDATA = [
  { id: '1', name:'mene keikalle yksin', source: require('../assets/cards/consert.png') },
  { id: '2', name:'shoppaile yksin', source: require('../assets/cards/shopping.png') },
  { id: '3', name:'kolmas tehtävä', source: require('../assets/cards/consert.png') },
  { id: '4', name:'neljäs tehtävä', source: require('../assets/cards/shopping.png') },
];
const monthlyDATA = [
  { id: '1', name:'mene keikalle yksin', source: require('../assets/cards/consert.png') },
  { id: '2', name:'shoppaile yksin', source: require('../assets/cards/shopping.png') },
  { id: '3', name:'kolmas tehtävä', source: require('../assets/cards/consert.png') },
  { id: '4', name:'neljäs tehtävä', source: require('../assets/cards/shopping.png') },
];

const weeklyDATA = [
  { id: '1', name:'mene keikalle yksin', source: require('../assets/cards/consert.png') },
  { id: '2', name:'shoppaile yksin', source: require('../assets/cards/shopping.png') },
  { id: '3', name:'kolmas tehtävä', source: require('../assets/cards/consert.png') },
  { id: '4', name:'neljäs tehtävä', source: require('../assets/cards/shopping.png') },
];

 const randomTaskWeek = weeklyDATA[Math.floor(Math.random() *weeklyDATA.length)];
 const randomTaskMonth = monthlyDATA[Math.floor(Math.random() * monthlyDATA.length)];

const handlePress = (name) =>{
  Alert.alert(`Merkataanko " ${name} " tehtävä tehdyksi`);
};

  return (
 
    <View style={styles.container}> 
       <Text style={styles.header}>Monthly task</Text> 
       <View style={styles.monthlyContainer}>
     
      <Pressable onPress={() => handlePress(randomTaskMonth.name)}>
      <Image source={randomTaskMonth.source}/>
      </Pressable>

      </View>
      <Text style={styles.header}>Weekly tasks</Text> 
      <View style={styles.weeklyContainer}>
      
      <Pressable onPress={() => handlePress(randomTaskWeek.name)}>
      <Image source={randomTaskWeek.source}/>
      </Pressable>
        
      </View>
      <Text style={styles.header}>Daily tasks</Text> 
      <View style={styles.dailyContainer}>
      <FlatList
          data={dailyDATA}
          horizontal
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Pressable onPress={() => handlePress(item.name)}>
              <Image source={item.source}/>
            </Pressable>
            )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#110D15',
    alignItems: 'center',
    justifyContent: 'center',
    gap:14,
  },
  weeklyContainer: {
    flex:1,
    width:150,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  monthlyContainer: {
    flex:1,
    width:150,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  dailyContainer: {
    flex:2,
    width:'100%',
  },
  TopBar: {
    flex:1,
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
    padding:20,
    marginTop:20,
  },
  header: {
    width:'70%',
    color:'white',
    textAlign: 'center',
    textAlignVertical: 'center', 
    height:50,
    borderRadius: 20,
    fontSize:20,
    backgroundColor: 'black',
    padding:20,
  },
});
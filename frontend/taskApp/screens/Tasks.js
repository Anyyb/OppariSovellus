import { StyleSheet, Text, View , Pressable, Image, FlatList,Alert} from 'react-native';

export default function TasksScreen() {


const dailyDATA = [
  { id: '1', name:'go to beach', source: require('../assets/cards/beach.png') },
  { id: '2', name:'go to movies', source: require('../assets/cards/movies.png') },
  { id: '3', name:'take a cooking class', source: require('../assets/cards/cooking.png') },
  { id: '4', name:'neljäs tehtävä', source: require('../assets/cards/beach.png') },
];
const monthlyDATA = [
  { id: '1', name:'go to beach', source: require('../assets/cards/beach.png') },
  { id: '2', name:'go to movies', source: require('../assets/cards/movies.png') },
  { id: '3', name:'take a cooking class', source: require('../assets/cards/cooking.png') },
  { id: '4', name:'neljäs tehtävä', source: require('../assets/cards/beach.png') },
];

const weeklyDATA = [
  { id: '1', name:'go to beach', source: require('../assets/cards/beach.png') },
  { id: '2', name:'go to movies', source: require('../assets/cards/movies.png') },
  { id: '3', name:'take a cooking class', source: require('../assets/cards/cooking.png') },
  { id: '4', name:'neljäs tehtävä', source: require('../assets/cards/beach.png') },
];

 const randomTaskWeek = weeklyDATA[Math.floor(Math.random() *weeklyDATA.length)];
 const randomTaskMonth = monthlyDATA[Math.floor(Math.random() * monthlyDATA.length)];

const handlePress = (name) =>{
  Alert.alert(`Merkataanko " ${name} " tehtävä tehdyksi`);
};

  return (
 
    <View style={styles.container}>
       <View style={styles.wrapContainer}> 
       
       <View style={styles.monthlyContainer}>
     <Text style={styles.header}>Monthly task</Text> 
      <Pressable onPress={() => handlePress(randomTaskMonth.name)}>
      <Image source={randomTaskMonth.source}style={styles.taskImage}/>
      </Pressable>

      </View>
      
      <View style={styles.weeklyContainer}>
      <Text style={styles.header}>Weekly task</Text> 
      <Pressable onPress={() => handlePress(randomTaskWeek.name)}>
      <Image source={randomTaskWeek.source}style={styles.taskImage}/>
      </Pressable>
        
      </View>
      
      <View style={styles.dailyContainer}>
      <Text style={styles.header}>Daily tasks</Text> 
      <FlatList
          data={dailyDATA}
          horizontal
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Pressable onPress={() => handlePress(item.name)}>
              <Image source={item.source}style={styles.taskImage}/>
            </Pressable>
            )}
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapContainer: {
    flex:2,
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: '#110D15',
    padding:10,
    alignItems: 'center',
  },
  monthlyContainer:{
    width:'100%',
    alignItems: 'center',
  },
  weeklyContainer:{
    width:'100%',
    alignItems: 'center',
  },
  dailyContainer:{
    width:'100%',
    alignItems: 'center',
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
    padding:5,
    margin:10,
    width:'90%',
    textAlign:'center',
    textAlignVertical:'center',
    fontSize: 18,
    color: 'white',
    fontFamily: 'georgia',
    backgroundColor: 'black',
    borderColor: 'grey',
    borderWidth: 1,
  },
  taskImage: {
    width: 130,
    height: 150,
    resizeMode: 'cover',
    margin: 5,
    borderRadius:15,
    borderWidth: 3,
    borderColor: 'black',
  }
});
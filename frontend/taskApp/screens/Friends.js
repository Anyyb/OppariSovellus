import { StyleSheet, Text, View , Pressable,Image, FlatList,Alert, ScrollView} from 'react-native';
const friendRequests = [
  { id: '1', name:'mimi'},
  { id: '2', name:'kiki'},
  { id: '2', name:'Sarah'},
];
const handlePress = (name) =>{
  Alert.alert(`" ${name} " wants to be your friend, do you accept?`,'',
    [
      {
        text: 'remove',
        onPress: () => console.log('Friend request declined'),
        style: 'cancel'
      },
      {
        text: 'accept',
        onPress: () => console.log('Friend request accepted')
      }
    ]);
};
export default function FriensScreen() {
  return (
      <View style={styles.container}>
        <View style={styles.wrapContainer}>
        <View style={styles.friendrequestContainer}>
         <Text style={styles.header}>Friend requests</Text>
         <FlatList
         data={friendRequests} 
         horizontal
         keyExtractor={item => item.id}
         renderItem={({ item }) => (
         <Pressable onPress={() => handlePress(item.name)}>
          <Image source={require('../assets/img/profiilikuva.png')} style={styles.image} />
          </Pressable>
          )}/>
          </View>
          <View style={styles.friendsContainer}></View>
          <Text style={styles.header}>Friends</Text>
          <ScrollView style={styles.scrollf}
          horizontal>
          <Text style={styles.text}>Mimi</Text>
          <Text style={styles.text}>Minna</Text>
          </ScrollView>
          <View style={styles.tasksContainer}></View>
          <Text style={styles.header}>Tasks together</Text>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapContainer: {
    width:'100%',
    height:'100%',
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: '#110D15',
    padding:10,
    alignItems: 'center',
  },
  friendrequestContainer:{
    width:'100%',
    alignItems: 'center',
  },
  friendsContainer:{
    width:'100%',
    alignItems: 'center',
  },
  tasksContainer:{
    width:'100%',
    alignItems: 'center',
  },
  text: {
    alignSelf:'left',
    fontSize: 18,
    lineHeight: 24,
    color: 'white',
    padding:15,
    fontFamily: 'georgia',
    textAlign:'left',
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
  image: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius:40,
    borderColor: 'grey',
    borderWidth: 2, 
    shadowColor: '#000',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  scrollf: {
    width:'50%',
    maxHeight: 100,
  }
});
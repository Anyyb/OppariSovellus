import { StyleSheet, Text, View , Pressable} from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.infoContainer}>
        <Text style={styles.header}>CZONE</Text>
        <Text style={styles.text}> Discover new opportunities and increase your personal growth with CZONE.</Text>
        <View style={styles.profileContainer}></View>
        </View>
        <View style={styles.tasksContainer}>
        <Text style={styles.header}>Completed</Text>
        </View>
        
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  infoContainer: {
    width:'55%',
    height:'65%',
    marginLeft:10,
    borderColor: 'grey',
    borderWidth: 1, 
    shadowColor: '#000',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  profileContainer: {
    width:'55%',
    height:'55%',
    borderColor: 'grey',
    borderWidth: 1, 
    shadowColor: '#000',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  tasksContainer: {
    marginTop:40,
    marginLeft:50,
    marginRight:50,
    borderColor: 'grey',
    borderWidth: 1, 
    shadowColor: '#000',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: { width: 0, height: 9 },
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
import { StyleSheet, Text, View , Pressable, Image} from 'react-native';

export default function ProfileScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
        <View style={styles.leftColumn}>
        <Text style={styles.header}>Profile</Text>
        </View>
        <View style={styles.rightColumn}>
        <Image source={require('../assets/img/profiilikuva.png')} style={styles.image} />
          <View style={styles.box}>
          <Text style={styles.header}>Tasks</Text>
            <Text style={styles.text}>1/10</Text>
            </View>
          <View style={styles.box}>
          <Text style={styles.header}>Points</Text>
            <Text style={styles.text}>1/100</Text>
            </View>
          <View style={styles.box}>
          <Text style={styles.header}>Tasks together</Text>
            <Text style={styles.text}>1/10</Text>
            </View>
        </View>
        </View>
        <View style={styles.completedContainer}>
          <Text style={styles.header}>Completed</Text>
          <Text style={styles.text}>Here will be icons for completed tasks</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#110D15',
    padding:20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  leftColumn: {
    flex:1,
    justifyContent: 'space-between',
    width: '100%',
    borderColor: 'grey',
    borderWidth: 1, 
    shadowColor: '#000',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  rightColumn: {
    width:'55%',
    height:'65%',
    alignItems:'center',
    
  },
  box: {
    margin:10,
    borderRadius: 8,
    width: '70%',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1, 
    shadowColor: '#000',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
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
  completedContainer: {
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
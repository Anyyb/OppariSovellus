import { StyleSheet, Text, View , Pressable, Image, TextInput} from 'react-native';
import { useState, useEffect,useContext } from 'react';
import createUserService from '../services/signup.js';

export default function SingupScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [email, setEmail] = useState('');

  //lisää käyttäjä
const handleaddNewUser =  async () => {
  console.log('New User added')
  
  const newUser = {
    username: newUsername,
    email: email,
    password: newPassword,
  }
  try {
    await createUserService.createUser(newUser)
    setErrorMessage(`New User added: Username: ${newUser.username}`) 
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  } catch (error) {
    console.error('Error adding user:', error)
    setErrorMessage('Error creating user.')
  }
}
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.header}>Become a part of CZONE community! </Text>
        <CreateUserForm handleaddNewUser={handleaddNewUser} newUsername={newUsername} 
        newPassword={newPassword} email={email} setNewUsername={setNewUsername} setNewPassword={setNewPassword} setEmail={setEmail} />
      </View>
    </View>
  );
};

const CreateUserForm=(props) => {
  return(
    <View style={styles.createContainer}>
      <View>
      <Text style={styles.inputLabel}>Käyttäjänimi:</Text>
        <TextInput
            style={styles.input}
            type="text"
            value={props.newUsername}
            placeholder="Anna käyttäjänimi"
            onChangeText={props.setNewUsername}
          />
        </View>
        <View>
        <Text style={styles.inputLabel}>Salasana:</Text>
          <TextInput
            style={styles.input}
            type="text"
            value={props.newPassword}
            secureTextEntry={true} 
            placeholder="Anna salasana"
            onChangeText={props.setNewPassword}
          />
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            type="text"
            value={props.email}
            placeholder="Give Email addres"
            onChangeText={props.setEmail}
          />
      <Pressable
      style={styles.buttonSingup} 
      onPress={props.handleaddNewUser}>
      <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#110D15',
  },
  infoContainer: {
    width:'85%',
    height:'85%',
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
    buttonContainer: {
      flexDirection: 'row-reverse',
      padding:15,
  }, 
  createContainer: {
    margin:20,
    padding:20,
    borderRadius: 5,
    backgroundColor: '#716090',
    borderColor: 'grey',
    borderWidth: 1, 
    shadowColor: '#000',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  input: {
    padding:10,
    marginBottom:10,
    backgroundColor: 'white',
    color:'black',
  },
  inputLabel: {
    fontFamily:'georgia',
    margin:5,
    textAlign:'left',
    fontWeight:'500',
    color:'white',
    marginBottom:2,

  },
  buttonSingup: {
    padding:5,
    margin:5,
    width:100,
    borderColor: 'grey',
    borderWidth: 1, 
    shadowColor: '#000',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
},
  buttonText:{
    fontFamily:'georgia',
    fontWeight:'bold',
    color: 'white',
    fontSize:13,
},
});
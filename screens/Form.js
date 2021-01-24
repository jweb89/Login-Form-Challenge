import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-paper';
import axios from 'axios';
import Prokeep from '../Prokeep.png';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Form = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const submitForm = async () => {
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email,
        password,
      });
      navigation.navigate('success', { token: response.data.token });
      // Cleans state on navigate
      setError('');
      setEmail('');
      setPassword('');
    } catch (e) {
      setError('Invalid Credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Prokeep} />
      <Text style={styles.motto}>
        Keep your communications flowing... and business growing.
      </Text>
      <Text style={styles.header}>Login</Text>
      <View style={styles.inputContainer}>
        <Input
          style={styles.email}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          style={styles.password}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text style={styles.errorText}>{error}</Text>
      </View>
      <Button
        style={styles.button}
        onPress={submitForm}
        // If email regex fails or there is no password the button will be disabled
        disabled={!emailRegex.test(email) || !password}
        mode="contained"
        color="#132C41"
      >
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  errorText: {
    color: 'red',
    marginBottom: '4%',
    fontSize: 15,
    textAlign: 'center',
  },
  motto: {
    color: '#132C41',
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: '75%',
    marginBottom: '-5%',
  },
  header: {
    marginVertical: '10%',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2A7990',
  },
  button: {
    width: '80%',
    borderRadius: 20,
  },
  success: {
    marginTop: '5%',
    color: 'green',
  },
});
// FFF3E2

export default Form;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

export default function SuccessScreen({ route, navigation }) {
  const { token } = route.params;

  return (
    <View style={styles.container}>
      <AntDesign
        name="checkcircle"
        size={150}
        color="#132C41"
        style={styles.icon}
      />
      <Text style={styles.header}>Login Successful</Text>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('form')}
        mode="contained"
        color="#132C41"
      >
        Back to login
      </Button>
      <Text style={styles.tokenText}>Your token is: {token}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E2',
    alignItems: 'center',
    justifyContent: 'center',
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
  tokenText: {
    marginTop: '10%',
    color: '#132C41',
    fontSize: 20,
    textAlign: 'center',
  },
});

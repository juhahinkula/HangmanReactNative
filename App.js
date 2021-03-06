import React from 'react';
import { StyleSheet, View } from 'react-native';
import Keyboard from './components/Keyboard';

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container} >
        <Keyboard/>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

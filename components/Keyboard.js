import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Keyboard extends React.Component {
  state = {word: ''};

  _handlePress(buttonTitle) {
    console.log(buttonTitle);
    this.setState({word: this.state.word + buttonTitle});
  }
  
  letters1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  letters2 = ['J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'];
  letters3 = ['S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
  
  render() {
    return (
      <View style={styles.container} >
        <Text>{this.state.word}</Text>
        <View style={styles.buttonContainer}  >
         { this.letters1.map((_, index) => 
            <Button key={this.letters1.index} title={this.letters1[index]} onPress={() => this._handlePress(this.letters1[index])} />) }
        </View> 
        <View style={styles.buttonContainer}  >
         { this.letters2.map((_, index) => 
            <Button key={this.letters2.index} title={this.letters2[index]} onPress={() => this._handlePress(this.letters2[index])} />) }
        </View>
        <View style={styles.buttonContainer}  >
          { this.letters3.map((_, index) => 
            <Button key={this.letters3.index} title={this.letters3[index]} onPress={() => this._handlePress(this.letters3[index])} />) }  
        </View>
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
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  letterButton: {
    marginRight: 5
  }
});

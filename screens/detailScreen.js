import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class DetailScreen extends Component{
  render() {
    return (
      <View style={{flex:1,backgroundColor:'red'}}>
        <Text>
        This is Detail screen
        </Text>
      </View>
    );
  }
}
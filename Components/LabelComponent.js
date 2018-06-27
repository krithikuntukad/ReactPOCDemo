import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
class LabelComponent extends Component{
  constructor(props){
    super(props);
  }
 
  render(){
    return (
      <View>
        <Text style={this.props.style}>{this.props.value}</Text>
      </View>
    );
  }
}

export default LabelComponent;
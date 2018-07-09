import React, { Component } from 'react';
import {
  View,
  TextInput,
  Dimensions
} from 'react-native';
 
const width = Dimensions.get('window').width;
 
class TextFieldComponent extends Component{
  constructor(props){
    super(props);
  }
 
  render(){
    return (
      <View key = {this.props.key}>
        <TextInput
        style={this.props.style}
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          maxLength={this.props.maxLength}
          keyboardType = {this.props.keyboardType}
          />
      </View>
    );
  }
}

export default TextFieldComponent;
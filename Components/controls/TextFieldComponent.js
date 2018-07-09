import React, { Component } from 'react';
import {
  View,
  TextInput
} from 'react-native';
import styles from '../Styles/textFieldStyle';

 
class TextFieldComponent extends Component{
  constructor(props){
    super(props);
  }
 
  render(){
    return (
      <View key = {this.props.key}>
        <TextInput
          style={styles.textFieldStyle}
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
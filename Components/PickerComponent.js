
import React, { Component } from 'react';
import {
  View,
  TextInput,
  Dimensions,Picker
} from 'react-native';

 
class PickerComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
        language:""  
    }
  }
 
  render(){
    return (
      <View key = {this.props.key} style={this.props.style}>
       <Picker
  selectedValue={this.state.language}
  style={{ height: 50, width: 100 }}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
      </View>
    );
  }
}

export default PickerComponent;
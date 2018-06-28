import { Dropdown } from 'react-native-material-dropdown';
import React, { Component } from 'react';
import {
  View,
  TextInput,
  Dimensions
} from 'react-native';
 
const width = Dimensions.get('window').width;
 
class DropdownComponent extends Component{
  constructor(props){
    super(props);
  }
 
  render(){
    return (
      <View key = {this.props.key}>
         <Dropdown label={this.props.label} data={this.props.dropDowValues}
              fontSize={10} baseColor="black" textColor='black'
             labelFontSize={10} />
          
      </View>
    );
  }
}

export default DropdownComponent;
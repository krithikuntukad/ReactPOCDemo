import React, { Component } from 'react';
import RadioButton from 'radio-button-react-native';
import {
  View,
  Text,
  Dimensions
} from 'react-native';
 

 
class RadioButtonComponent extends Component{
  constructor(props){
    super(props);
  }
 
  render(){
    return (
        <View style={this.props.radio}>
       <RadioButton currentValue={this.props.currentValue} value={this.props.name}
       onPress={()=>this.props.onPress}
         outerCircleColor='grey'
         innerCircleColor='#153875'
         innerCircleSize={8}
         outerCircleSize={18}
       >
       </RadioButton>
       <Text style={this.props.radioText} >{this.props.name}</Text>
       </View>
    
    );
  }
}

export default RadioButtonComponent;
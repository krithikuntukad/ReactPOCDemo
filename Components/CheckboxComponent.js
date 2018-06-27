import React, { Component } from 'react';
//import { CheckBox } from 'react-native-elements';
import { View,Text } from 'react-native';
import CheckBox from 'react-native-checkbox';

class CheckboxComponent extends Component{
    constructor(props){
      super(props);
    }
    render() {
        return (
<View  style={{flexDirection: 'row'}}>
        
          <CheckBox  style={this.props.style}
            label = {this.props.label}
            labelStyle={this.props.labelStyle}
            checkboxStyle={this.props.checkBoxStyle}
             onChange={this.props.onChange}
          />
          <Text numberOfLines={this.props.numberOfLines} style={this.props.style }>{this.props.value}</Text>
          </View>
            
        
      );
    
  }
}
  export default CheckboxComponent;
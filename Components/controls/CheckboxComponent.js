import React, { Component } from 'react';
//import { CheckBox } from 'react-native-elements';
import { View,Text } from 'react-native';
import CheckBox from 'react-native-checkbox';
import styles from '../Styles/checkBoxStyle';
class CheckboxComponent extends Component{
    constructor(props){
      super(props);
    }
    render() {
        return (
         <View  style={{flexDirection: 'row'}}>
          <CheckBox
            label = {this.props.label}
            checked={this.props.checked}
            checkboxStyle={styles.checkBoxStyle}
             onChange={this.props.onChange}
          />
          <Text numberOfLines={this.props.numberOfLines} style={styles.checkBoxLable }>{this.props.value}</Text>
          </View>
      );
  }
}
  export default CheckboxComponent;
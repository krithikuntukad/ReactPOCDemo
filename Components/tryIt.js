
import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Image, Alert, ScrollView, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Column as Col, Row } from 'react-native-flexbox-grid';
import { Icon, Header, Content, Left, Right } from 'native-base';
var XMLParser = require('react-xml-parser');
import HTML from 'react-native-render-html';
import styles from './Styles/styleFive';
import { Container } from 'native-base';
const Entities = require('html-entities').AllHtmlEntities;
const AllHtmlEntities = require('html-entities').AllHtmlEntities;
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import { Form, FormItem } from 'react-native-form-validation';
import ComponentWithValue from './TextFieldComponent2'
import LabelComponent from './LabelComponent'
import CheckboxComponent from './CheckboxComponent'
import DropdownComponent from './DropdownComponent'
import { DialogComponent } from 'react-native-dialog-component';
var jsonData = require('./Constants/xmlDataStyleFive.json');
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
var responseText;
var x =[]
export default class tryIt extends Component {
  constructor(props) {
    super(props);
    this.state = {
     userInfo:"",
     errorMessage:{},
     controlArray:[],
     values:{}
 
    }
  x=[{
      "title":"Archana",
      "id":1
  },
  {
    "title":"Krithi",
    "id":2
}]
   this.state.controlArray = x
  }

//     x.push(<View key="1"> <Text>working</Text>
//     <TextInput
//  style=''
//    value={this.state.userInfo}
//    onChange={(a)=>{this.validate(a)}}
//    placeholder="input"
//    />
//    <Text style={{color: "red"}}>{this.state.errorMessage}</Text></View>
// )
//    this.state.controlArray = x
    //this.state.controlArray = x
  
  /**
 * Function : changeStateAttributeValue
 * Description : Assigns user action  values to dynamic text fields 
 */
  
validate=(event,id)=>{
    let statusCopy = Object.assign({}, this.state);
    statusCopy.values[id] = event.nativeEvent.text;
    this.setState(statusCopy);
    //console.warn('enterd Text',event.nativeEvent.text)
    //this.setState({userInfo:event.nativeEvent.text})
    if(this.state.values[id].length<4){
        let statusCopy = Object.assign({}, this.state);
        statusCopy.errorMessage[id] = "invalid";
        this.setState(statusCopy);
       
    }else{
        let statusCopy = Object.assign({}, this.state);
        statusCopy.errorMessage[id] = null;
        this.setState(statusCopy);
    }

  console.warn(id)
}
  

  render() {
    contents = this.state.controlArray.map((item) => {
        //We need to return the corresponding mapping for each item too.
        return (
            <View key={item.title}>
              <Text>
                {item.title}

              </Text>
              <TextInput
 style=''
   value={this.state.values[item.id]}
   onChange={(a)=>{this.validate(a,item.id)}}
   placeholder="input"
   />
   <Text style={{color: "red"}}>{this.state.errorMessage[item.id]}</Text></View>
          
          );
       });
      
    return (
      <View>
         {contents}
      </View>
    );
  }
}

AppRegistry.registerComponent('tryIt', () => tryIt);

import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, TouchableOpacity,Image, Alert, ScrollView, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Column as Col, Row } from 'react-native-flexbox-grid';
import CheckBox from 'react-native-checkbox';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import { Icon, Header, Content, Left, Right } from 'native-base';
//import HTML from 'react-native-render-html';
//mport { Picker } from 'react-native-picker-dropdown'
import { Dropdown } from 'react-native-material-dropdown';

import { WebView } from 'react-native';
//var DOMParser = require('xmldom').DOMParser
var XMLParser = require('react-xml-parser');

import HTML from 'react-native-render-html';


import styles from './Styles/styleOne';
import { Container } from 'native-base';
import Swiper from 'react-native-swiper';

//import PaginatedListView from 'react-native-paginated-listview'
const Entities = require('html-entities').AllHtmlEntities;
const AllHtmlEntities = require('html-entities').AllHtmlEntities;
var jsonData = require('./Constants/xmlData.json');
export default class DemoPagination extends Component {

  constructor(props) {
    super(props);
    this.state = {
      controlsArray: []
    }
  var responseText = jsonData[0].data
    this.constructControls(responseText)
  }

/**
  * Function : constructControls
  * Description : Creates Controls from JSON
  */

  constructControls(responseText) {
    var xml = new XMLParser().parseFromString(responseText);    // Assume xmlText contains the example XML
    var xmlJson = []
    var controlsArray = []
    xmlJson.push(xml)
    var keyIndex = 0;
    xmlJson[0].children.map((currentSection, index) =>{
      currentSection.children.map((currentItem, itemIndex) =>{
        if (currentItem.name == "Controls") {
          currentSection.children.map((currentControl, controlIndex) =>{
            if (currentControl.name == "Controls") {
              currentControl.children.map( (controlItem, controlItemIndex)=> {
                if (controlItem.name == "Checkbox") {
                  controlItem.children.map( (innerItem, innerItemIndex) =>{
                    if (innerItem.name == "FieldHeader") {
                      keyIndex = keyIndex + 1
                      labelStyle = {
                        color: 'black',
                        fontSize: 10
                      }
                      checkBoxStyle = {
                        width: 18,
                        height: 18
                      }
                    
                      controlsArray.push(
                        <TouchableOpacity key={keyIndex} style={styles.paginationContent}>
                          <CheckBox  style={styles.checkBox}
                            label = ""
                            labelStyle={labelStyle}
                            checkboxStyle={checkBoxStyle}
                            onChange={(checked) => console.log('I am checked', checked)}
                          />
                           <Text numberOfLines={15} style={styles.checkBoxLable }>{innerItem.value}</Text>
                        </TouchableOpacity>
                      )
                    }
                  })


                } else if (controlItem.name == "Label") {
                  controlItem.children.map( (innerItem, innerItemIndex) =>{
                    if (innerItem.name == "FieldHeader") {
                      keyIndex = keyIndex + 1
                      var y = innerItem.value
                      y = new Entities().decode(y);
                      controlsArray.push(
                        <WebView
                          source={{ html: y }}
                          style={{
                            flex: 1,
                            marginTop: 5,
                            height: 200,
                          }}
                        />
                      )
                    }

                  })
                } else if (controlItem.name == "RadioButton") {
                  controlItem.children.map((innerItem, innerItemIndex) =>{
                    var text = ""
                    var radioBtn = []

                    if (innerItem.name == "FieldHeader") {
                      text = innerItem.value //<Text style={styles.Header }>{innerItem.value}</Text>
                      text = new Entities().decode(text);
                      text = text.replace("<p>", "").replace("</p>", "").replace("<d>", "").replace("<dfn>", "").replace("</dfn>", "").replace("<em>", "").replace("</em>", "").replace("</d>", "").replace("&nbsp;", "")
                      text = '<p style="fontSize:10;margin-bottom:5">' + text + '</p>'
                    
                    }
                    if (innerItem.name == "UserDefinedList") {
                      innerItem.children.map((radioBtnOption, radioBtnOptionIndex) => {

                        if (radioBtnOption.name == "ListItem") {
                          keyIndex = keyIndex + 1
                          radioBtn.push(
                            <RadioButton value={radioBtnOption.attributes.name} >
                            <Text style={styles.radioText}>{radioBtnOption.attributes.value}</Text>
                          </RadioButton>
                          )
                        }
                      })
                    }
                    keyIndex = keyIndex + 1
                  })
                
                } else if (controlItem.name == "Textbox") {
                  controlItem.children.map( (innerItem, innerItemIndex) =>{
                    if (innerItem.name == "FieldHeader") {
                      keyIndex = keyIndex + 1

                      var text = new AllHtmlEntities().decode(innerItem.value);
                      text = text.replace("<d>", "").replace("</d>", "").replace("&amp;", "&").replace("&nbsp;", "").replace("&quot;", "'").replace("&#39;", "'")

                      controlsArray.push(
                        <TouchableOpacity key={keyIndex} style={{margin:10}}>
                          <Text style={styles.textBox}>{text}</Text>
                          <TextInput
                            style={{
                              height: 30,
                              borderWidth: 1,
                              marginBottom: 10,
                              paddingLeft: 5,
                              fontSize: 10
                            }}
                            placeholder="Enter Text Here"
                          />
                        </TouchableOpacity>
                      )
                    }

                  })
                } else if (controlItem.name == "DropDownList") {
                  var dropDowValues = []
                  var obj = {}
                  var text = ""
                  var label = ""
                  controlItem.children.map( (innerItem, innerItemIndex)=> {

                    if (innerItem.name == "FieldHeader") {
                      var y = innerItem.value
                      y = new Entities().decode(innerItem.value);
                      y = y.replace("<d>", "").replace("</d>", "").replace("&amp;", "&").replace("&nbsp;", "").replace("&quot;", "'").replace("&#39;", "'")
                      text = <Text>{y}</Text>
                      label = y

                    }
                    if (innerItem.name == "ControlActions") {
                      innerItem.children.map( (dropdownItem, dropdownItemIndex)=> {
                        if (dropdownItem.name == "UdfControlAction") {
                          dropdownItem.children.map(function (udfControlAction, udfControlActionIndex) {

                            if (udfControlAction.name == "SourceValue") {
                              obj = {
                                value: udfControlAction.value,
                              }
                              dropDowValues.push(obj)
                            }

                          })
                        }

                      })

                    }

                  })
                  keyIndex = keyIndex + 1
                  console.log("dropDowValues",dropDowValues)
                  controlsArray.push(
                    <TouchableOpacity key={keyIndex} style ={styles.pageStyles} style ={{margin:10}}  >

                      <Dropdown label={label} data={dropDowValues}
                        fontSize={10} baseColor="black" textColor='black'
                        labelFontSize={10} />
                    </TouchableOpacity>
                  )

                } else if(controlItem.name == "AttachmentControl"){
              controlItem.children.map(function(innerItem, innerItemIndex){
                if(innerItem.name == "FieldHeader"){
                  keyIndex = keyIndex+1
                  console.log(innerItem.value)
                    var text = new AllHtmlEntities().decode(innerItem.value);
                    text = text.replace("<d>", "").replace("</d>", "").replace("&amp;", "&").replace("&nbsp;", "").replace("&quot;", "'").replace("&#39;", "'")
                   
                }
              })
          }
              })
            }
          })
        }
      })
    });
    this.state.controlsArray = controlsArray
  }

  render() {
    return (
      <Container>
      <Header style={{backgroundColor: "#153875",}}>
      <Left>
        <Icon name="ios-menu" style={{color: 'white'}} onPress={() =>
          this.props.navigation.openDrawer()} />
      </Left>
      <Content contentContainerStyle={{
       flex:1,
       alignItems:'center',
      justifyContent:'center'}}>
     <Text style={{ color: 'white',textAlign:'center'}}> Demo Pagination</Text>
     </Content>
      <Right>
        <Image style={{ width: 30, height: 30, }}
          source={require('./images/Save-White.png')} />
      </Right>
    </Header>
      <View style={styles.pageStyle} >
        <Swiper style={styles.wrapper} showsButtons={true}>
            {this.state.controlsArray}
            </Swiper> 
        <View >
          <Row size={12}>
            <Col sm={6} style={styles.buttonBorderColor}>
              <Button
                title='Cancel'
                color="#153875"
                onPress={() => {
                  Alert.alert('You tapped the button!');
                }}
                accessibilityLabel="Learn more about this purple button"
              />
            </Col>
            <Col style={styles.createButtonColor} sm={6}>
              <Button
                title="Create"
                color="white"
                onPress={() => {
                  Alert.alert('You tapped the button!');
                }}
                accessibilityLabel="Learn more about this purple button"
              />
            </Col>
          </Row>
        </View>
      </View>
      </Container>
    );
  }
}

AppRegistry.registerComponent('DemoPagination', () =>DemoPagination);
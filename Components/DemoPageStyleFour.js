import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Image,ImageBackground, Alert, ScrollView, TextInput, StyleSheet, Dimensions } from 'react-native';
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
 
import styles from './Styles/styleFour';
import { Container } from 'native-base';
 
const Entities = require('html-entities').AllHtmlEntities;
const AllHtmlEntities = require('html-entities').AllHtmlEntities;
var jsonData = require('./Constants/xmlData.json');
export default class DemoPageStyleFour extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      doc: [],
      controlsArray: [],
      splitArray: [],
      checked: false,
      value: 0,
      text: '',
      htmlContent: '',
      radioBtnOptions: []
    }


    var responseText = jsonData[0].data



    // this.handlePress = this.handlePress.bind(this);
 
    this.constructControls(responseText)
 
  }
  handleOnPress(radioBtnOption, indexVal) {
    console.log("radioBtnOptions")
    console.log(this.state.radioBtnOptions)
    //this.state.value = value
    this.state.radioBtnOptions[indexVal] = 1
    console.log(this.state.radioBtnOptions)
    //  Alert.alert("radioBtnOptions")
  }
 
  constructControls(responseText) {
 
    var xml = new XMLParser().parseFromString(responseText);    // Assume xmlText contains the example XML
    // console.log(JSON.stringify(xml));
 
    var xmlJson = []
    var controlsArray = []
    var splitArray = []
    xmlJson.push(xml)
    var keyIndex = 0;
    var radioVal = 0
    xmlJson[0].children.map((currentSection, index) => {
 
      console.log("currentSection", index)
 
      currentSection.children.map((currentItem, itemIndex) => {
        console.log("currentItem", itemIndex)
        if (currentItem.name == "Controls") {
          currentSection.children.map((currentControl, controlIndex) => {
 
            //console.log("currentControl",controlIndex)
 
            if (currentControl.name == "Controls") {
              currentControl.children.map((controlItem, controlItemIndex) => {
                if (controlItem.name == "Checkbox") {
                  controlItem.children.map((innerItem, innerItemIndex) => {
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
                        // <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
                        // <View style={{width: 350, height: 100, backgroundColor: '#F2F2F2'}} >
                        <View key={keyIndex} style={{ flexDirection: 'row' }}>
 
                          <CheckBox style={styles.checkBox}
                            label=""
                            labelStyle={labelStyle}
                            checkboxStyle={checkBoxStyle}
                            onChange={(checked) => console.log('I am checked', checked)}
                          />
                          <Text numberOfLines={15} style={styles.checkBoxLable}>{innerItem.value}</Text>
                          <View
                            style={{
                              borderBottomColor: 'black',
                              borderBottomWidth: 1,
                            }}
                          />
                        </View>
                        // </View>
                        // </View>
                      )
                    }
                  })
 
                } else if (controlItem.name == "Label") {
                  controlItem.children.map((innerItem, innerItemIndex) => {
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
                      //  controlsArray.push(
                      //  <HTML html={y} imagesMaxWidth={Dimensions.get('window').width} decodeEntities={true} debug= {true}/>
                      //  )
                    }
 
                  })
                } else if (controlItem.name == "RadioButton") {
                  controlItem.children.map((innerItem, innerItemIndex) => {
                    var text = ""
                    var radioBtn = []
 
                    if (innerItem.name == "FieldHeader") {
                      text = innerItem.value //<Text style={styles.Header }>{innerItem.value}</Text>
                      console.log("innerItem.value ")
                      console.log(innerItem.value)
                      text = new Entities().decode(text);
                      console.log("text")
                      console.log(text)
                      text = text.replace("<p>", "").replace("</p>", "").replace("<d>", "").replace("<dfn>", "").replace("</dfn>", "").replace("<em>", "").replace("</em>", "").replace("</d>", "").replace("&nbsp;", "")
                      console.log(text)
                      text = '<p style="fontSize:12;margin-bottom:5;font-weight: bold;">' + text + '</p>'
 
                    }
                    if (innerItem.name == "UserDefinedList") {
                      innerItem.children.map((radioBtnOption, radioBtnOptionIndex) => {
 
                        if (radioBtnOption.name == "ListItem") {
                          keyIndex = keyIndex + 1
                          radioVal = radioVal + 111
                          console.log('radioBtnOption["radioVal"]', this.state.radioBtnOptions["radioVal"])
                          this.state.radioBtnOptions["radioVal"] = this.state.radioBtnOptions["radioVal"] || 0
                          radioBtn.push(
              
                            <RadioButton value={radioBtnOption.attributes.name} >
                            <Text style={styles.radioText}>{radioBtnOption.attributes.value}</Text>
                            </RadioButton>
                          )
                        }
                      })
                    }
                    keyIndex = keyIndex + 1
 
                    controlsArray.push(
                      <View>
                      <View key={keyIndex}>
                      <HTML html={text} imagesMaxWidth={Dimensions.get('window').width} decodeEntities={true} debug={true} />
                                                <RadioGroup
                                                        size={24}
                                                        thickness={2}
                                                        color='#153875'
                                                        //highlightColor='blue'
                                                onSelect = {(index, value) => {

                                                console.log(value)}}
                                            >
                                                {radioBtn}
                                            </RadioGroup>
                       
                      </View>
                      {/* <View
                            style={{
                             borderBottomColor: '#b1b1b1',
                              borderBottomWidth: 1,
                            }}
                          /> */}
                      </View>
                    )
                  })
                } else if (controlItem.name == "Textbox") {
                  controlItem.children.map((innerItem, innerItemIndex) => {
                    if (innerItem.name == "FieldHeader") {
                      keyIndex = keyIndex + 1
 
                      var text = new AllHtmlEntities().decode(innerItem.value);
                      text = text.replace("<d>", "").replace("</d>", "").replace("&amp;", "&").replace("&nbsp;", "").replace("&quot;", "'").replace("&#39;", "'")
 
                      controlsArray.push(
                        <View key={keyIndex}>
                          <Text style={styles.textBox}>{text}</Text>
                          <TextInput
                            style={{
                              height: 40,
                              // fontWeight:'bold',
                              borderBottomColor:'#a8a8a8',
                              //  borderWidth: 1,
                             marginBottom: 10,
                              paddingLeft: 5,
                              fontSize: 10
                            }}
                            placeholder="Enter Text Here"
                          />
                             <View
                            style={{
                              borderBottomColor: '#b1b1b1',
                              borderBottomWidth: 2,
                            }}
                          />
                         
                        </View>
                      )
                    }
 
                  })
                } else if (controlItem.name == "DropDownList") {
                  //console.log("controlItem.DropDownList",controlItem.name)
                  var dropDowValues = []
                  var obj = {}
                  var text = ""
                  var label = ""
                  controlItem.children.map((innerItem, innerItemIndex) => {
 
                    if (innerItem.name == "FieldHeader") {
                      var y = innerItem.value
                      y = new Entities().decode(innerItem.value);
                      y = y.replace("<d>", "").replace("</d>", "").replace("&amp;", "&").replace("&nbsp;", "").replace("&quot;", "'").replace("&#39;", "'")
                      text = <Text style={{
                        fontWeight:'bold',fontSize: 12
                      }} >{y}</Text>
                      label = y
 
                    }
                    if (innerItem.name == "ControlActions") {
                      innerItem.children.map((dropdownItem, dropdownItemIndex) => {
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
                  controlsArray.push(
                    <View key={keyIndex}>
 
                      <Dropdown label={label} data={dropDowValues}
                        fontSize={10} baseColor="black" textColor='black'
                        labelFontSize={10} />
                           <View
                            style={{
                              borderBottomColor: '#b1b1b1',
                              borderBottomWidth: 1,
                            }}
                          />
                    </View>
                  )
 
                } /*else if(controlItem.name == "AttachmentControl"){
              controlItem.children.map(function(innerItem, innerItemIndex){
                console.log("AttachmentControl")
                if(innerItem.name == "FieldHeader"){
                  keyIndex = keyIndex+1
                  controlsArray.push(
                    <View key={keyIndex}>
                    <Text>{innerItem.value}</Text>
                   </View>
                    )
                }
 
              })
          }*/
              })
            }
          })
        }
      })
      //console.log("controlsArray")
      console.log('controlsArray', controlsArray)
      console.log('array length is', controlsArray.length)
      console.log('json data', xmlJson)
 
      splitArray = controlsArray.slice(0, 10);
      // console.log('splitArray',splitArray)
    });


    this.state.controlsArray = controlsArray;
 
    //console.log('split array',JSON.stringify(this.state.controlsArray.slice(4)));
    // Alert.alert(JSON.stringify(this.state.controlsArray.slice(0,2)));
 
    controlsArray = splitArray;
    this.state.splitArray = splitArray;
    // Alert.alert( JSON.stringify(this.state.splitArray))
 
    //Alert.alert(this.state.controlsArray);
    // console.log('array lenght is',this.state.controlsArray.length);
 
    this.state.doc = JSON.stringify(xml)
 
  }
 
  render() {
    return (
        <Container>
        <ImageBackground style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', }}
            source={require('./images/BackgroundImage.jpg')} >
            <Header style={{ backgroundColor: "#0865a3", }}>
                <Left>
                    <Icon name="ios-menu" style={{ color: 'white' }} onPress={() =>
                        this.props.navigation.openDrawer()} />
                </Left>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}> Style Four  </Text>
                </Content>
                <Right>
                    <Image style={{ width: 30, height: 30, }}
                        source={require('./images/Save-White.png')} />
                </Right>
            </Header>
        <View  style={styles.pageStyle} >
 
          <ScrollView >
            <View style={styles.container}>
 
              {this.state.controlsArray}
 
              <View
                style={{
                  borderBottomColor: '#b1b1b1',
                  borderBottomWidth: 1,
                }}
              />
            </View>
 
          </ScrollView>


        </View>
        </ImageBackground>
      </Container>
    );
  }
}
 
AppRegistry.registerComponent('DemoPageStyleFour', () => DemoPageStyleFour);
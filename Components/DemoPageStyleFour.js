import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Image,ImageBackground, Alert, ScrollView, TextInput, StyleSheet, Dimensions } from 'react-native';
import CheckBox from 'react-native-checkbox';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import { Icon, Header, Content, Left, Right } from 'native-base';
import { Dropdown } from 'react-native-material-dropdown';
 
import { WebView } from 'react-native';
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
      controlsArray: []
    }
    var responseText = jsonData[0].data
    this.constructControls(responseText)
 
  }

 
  constructControls(responseText) {
    var xml = new XMLParser().parseFromString(responseText);    // Assume xmlText contains the example XML
  
    var xmlJson = []
    var controlsArray = []
    xmlJson.push(xml)
    var keyIndex = 0;
    xmlJson[0].children.map((currentSection, index) => {
      currentSection.children.map((currentItem, itemIndex) => {
        if (currentItem.name == "Controls") {
          currentSection.children.map((currentControl, controlIndex) => {
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
                    }
 
                  })
                } else if (controlItem.name == "RadioButton") {
                  controlItem.children.map((innerItem, innerItemIndex) => {
                    var text = ""
                    var radioBtn = []
 
                    if (innerItem.name == "FieldHeader") {
                      text = innerItem.value //<Text style={styles.Header }>{innerItem.value}</Text>
                      text = new Entities().decode(text);
                      text = text.replace("<p>", "").replace("</p>", "").replace("<d>", "").replace("<dfn>", "").replace("</dfn>", "").replace("<em>", "").replace("</em>", "").replace("</d>", "").replace("&nbsp;", "")
                      text = '<p style="fontSize:12;margin-bottom:5;font-weight: bold;">' + text + '</p>'
 
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
                     }}
                  >
                      {radioBtn}
                  </RadioGroup>
                      </View>
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
                              borderBottomColor:'#a8a8a8',
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
                } 
              })
            }
          })
        }
      }) 
    });
    this.state.controlsArray = controlsArray;
    
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

import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Image, Alert, ScrollView, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { Column as Col, Row } from 'react-native-flexbox-grid';
import CheckBox from 'react-native-checkbox';
import { Icon, Header, Content, Left, Right } from 'native-base';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import { Dropdown } from 'react-native-material-dropdown';
import { WebView } from 'react-native';
var XMLParser = require('react-xml-parser');
import HTML from 'react-native-render-html';
import styles from './Styles/styleFour';
import { Container } from 'native-base';
const Entities = require('html-entities').AllHtmlEntities;
const AllHtmlEntities = require('html-entities').AllHtmlEntities;
var totalData;

var jsonData = require('./Constants/xmlData.json');
export default class DemoPageStyleThree extends Component {


    constructor(props) {
        super(props);
        this.state = {
            displayedSection: false,
            displayedSectionTwo: false,
            controlsArrayOne: [],
            controlsArrayTwo: [],
            controlsArray: []
        }
        var responseText = jsonData[0].data
        this.constructControls(responseText)
    }
 
    sectionOne = () => {
        this.setState({
            displayedSection: !this.state.displayedSection,
            displayedSectionTwo: false
        })
    }
    sectionTwo = () => {
        this.setState({
            displayedSectionTwo: !this.state.displayedSectionTwo,
            displayedSection: false
        });

    }


    constructControls(responseText) {

        var xml = new XMLParser().parseFromString(responseText);    // Assume xmlText contains the example XML
     
        var mainArray = [];
        var xmlJson = []
        var controlsArrayOne = []
        var controlsArrayTwo = []
        xmlJson.push(xml)
        var keyIndex = 0;
        var radioVal = 0;

        xmlJson[0].children.map((currentSection, index) => {
            controlsArray = []
            console.log("currentSection", currentSection)

            currentSection.children.map((currentItem, itemIndex) => {
                console.log('currentItem', currentItem.value)
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
                                            text = innerItem.value 
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

                                        controlsArray.push(
                                            <View key={keyIndex}>
                                               <HTML html={text} imagesMaxWidth={Dimensions.get('window').width} decodeEntities={true} debug={true} />
                                                <RadioGroup
                                                        size={24}
                                                        thickness={2}
                                                        color='#153875'
                                                onSelect = {(index, value) => {
                                                }}
                                            >
                                                {radioBtn}
                                            </RadioGroup>
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
                                                            height: 30,
                                                            borderWidth: 1,
                                                            marginBottom: 10,
                                                            paddingLeft: 5,
                                                            fontSize: 10
                                                        }}
                                                        placeholder="Enter Text Here"
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
                                            text = <Text>{y}</Text>
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
                                    //  controlsArray.push(
                                    controlsArray.push(
                                        <View key={keyIndex}>

                                            <Dropdown label={label} data={dropDowValues}
                                                fontSize={10} baseColor="black" textColor='black'
                                                labelFontSize={10} />
                                        </View>
                                    )

                                }
                            })
                        }
                    })
                }
            })
            obj = {
                "key": controlsArray
            }
            mainArray.push(obj)

        });
        this.state.controlsArrayOne = mainArray[0].key
        this.state.controlsArrayTwo = mainArray[1].key
    }
    render() {
        var section1 = this.state.displayedSection ? this.state.controlsArrayOne : null;
        var section2 = this.state.displayedSectionTwo ? this.state.controlsArrayTwo : null
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
                            <Text style={{ color: 'white', textAlign: 'center' }}> Style Three  </Text>
                        </Content>
                        <Right>
                            <Image style={{ width: 30, height: 30, }}
                                source={require('./images/Save-White.png')} />
                        </Right>
                    </Header>
                    <View style={styles.pageStyle} >
                        <View style={styles.container}>
                            <View style={{ marginBottom: 10, borderColor: 'grey'}}>
                                <TouchableOpacity style={{ backgroundColor: '#0865a3', height: 30 }} onPress={this.sectionOne}>
                                    <Row size={12} >
                                        <Col sm={11} >
                                            <Text style={{ color: 'white', paddingLeft: 5 ,paddingTop:5}}>Section 2</Text>
                                        </Col>
                                        <Col sm={1} >
                                            <Image
                                                style={{ width: 20, height: 20,marginTop:5 }}
                                                source={require('./images/Arrow.png')}
                                            />
                                        </Col>
                                    </Row>
                                </TouchableOpacity>
                                <View  >
                                    <ScrollView style={{ padding: 5, borderColor: 'grey' }} >
                                        {section1}
                                    </ScrollView>
                                </View>

                            </View>
                            <View style={{ marginBottom: 10, borderColor: 'gray' }}>
                                <TouchableOpacity style={{ backgroundColor: '#0865a3', height: 30 }} onPress={this.sectionTwo}>
                                    <Row size={12}>
                                        <Col sm={11} >
                                            <Text style={{ color: 'white', paddingLeft: 5,paddingTop:5 }}>Entertainment</Text>
                                        </Col>
                                        <Col sm={1} >
                                            <Image
                                                style={{ width: 20, height: 20,marginTop:5 }}
                                                source={require('./images/Arrow.png')}
                                            />


                                        </Col>
                                    </Row>
                                </TouchableOpacity>
                                <View >
                                    <ScrollView style={{ padding: 5, backgroundColor: 'white' }}>
                                        {section2}
                                    </ScrollView>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </Container>
        );
    }
}

AppRegistry.registerComponent('DemoPageStyleThree', () => DemoPageStyleThree);
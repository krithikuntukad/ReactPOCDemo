import React, { Component } from "react";

import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
  Alert,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from "react-native";

import { Column as Col, Row } from "react-native-flexbox-grid";

import CheckBox from "react-native-checkbox";

import { Icon, Header, Content, Left, Right } from "native-base";

import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";

import { Dropdown } from "react-native-material-dropdown";

import { WebView } from "react-native";

var XMLParser = require("react-xml-parser");

import HTML from "react-native-render-html";

import styles from "./Styles/accordianStyle";

import commonStyles from "./Styles/commonStyles";

import { Container } from "native-base";

const Entities = require("html-entities").AllHtmlEntities;

const AllHtmlEntities = require("html-entities").AllHtmlEntities;

import {
  DocumentPicker,
  DocumentPickerUtil
} from "react-native-document-picker";

var jsonData = require("./Constants/xmlData.json");

export default class Accordian extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedSection: false,

      displayedSectionTwo: false,

      controlsArrayOne: [],

      controlsArrayTwo: [],

      controlsArray: []
    };

    var responseText = jsonData[0].data;

    this.constructControls(responseText);
  }

  /**

* Function : sectionOne

* Description :displays section one

* Parameters : null

*/

  sectionOne = () => {
    this.setState({
      displayedSection: !this.state.displayedSection,

      displayedSectionTwo: false
    });
  };

  /**

* Function : sectionTwo

* Description : displays section Two

* Parameters : null

*/

  sectionTwo = () => {
    this.setState({
      displayedSectionTwo: !this.state.displayedSectionTwo,

      displayedSection: false
    });
  };

  /**

* Function : createCheckBoxControl

* Description : Creates Check box controls

* parameters : KeyIndex is the unique value, controlItem holds controls globally, controlsArray holds Checkbox Controls

*/

  createCheckBoxControl(keyIndex, controlItem, controlsArray) {
    controlItem.children.map((innerItem, innerItemIndex) => {
      if (innerItem.name == "FieldHeader") {
        keyIndex = keyIndex + 1;

        controlsArray.push(
          <View key={keyIndex} style={{ flexDirection: "row" }}>
            <CheckBox
              style={styles.checkBox}
              label=""
              labelStyle={styles.labelStyle}
              checkboxStyle={styles.checkBoxStyle}
            />

            <Text numberOfLines={15} style={styles.checkBoxLable}>
              {innerItem.value}
            </Text>
          </View>
        );
      }
    });
  }

  /**

* Function : createHTMLTable

* Description : Creates HTML Table controls

* parameters : KeyIndex is the unique value, controlItem holds controls globally, controlsArray holds Table Controls

*/

  createHTMLTable(keyIndex, controlItem, controlsArray) {
    controlItem.children.map((innerItem, innerItemIndex) => {
      if (innerItem.name == "FieldHeader") {
        keyIndex = keyIndex + 1;

        var fieldHeaderVal = innerItem.value;

        fieldHeaderVal = new Entities().decode(fieldHeaderVal);

        controlsArray.push(
          <WebView
            source={{ html: fieldHeaderVal }}
            style={styles.webViewStyle}
          />
        );
      }
    });
  }

  /**

* Function : createRadioButtonControl

* Description : Creates Radio Button controls

* parameters : KeyIndex is the unique value, controlItem holds controls globally, controlsArray holds Radio Button Controls

*/

  createRadioButtonControl(keyIndex, controlItem, controlsArray) {
    controlItem.children.map((innerItem, innerItemIndex) => {
      var text = "";

      var radioBtn = [];

      if (innerItem.name == "FieldHeader") {
        text = innerItem.value;

        text = new Entities().decode(text);

        text = text
          .replace("<p>", "")
          .replace("</p>", "")
          .replace("<d>", "")
          .replace("<dfn>", "")
          .replace("</dfn>", "")
          .replace("<em>", "")
          .replace("</em>", "")
          .replace("</d>", "")
          .replace("&nbsp;", "");

        text = '<p style="fontSize:10;margin-bottom:5">' + text + "</p>";
      }

      if (innerItem.name == "UserDefinedList") {
        innerItem.children.map((radioBtnOption, radioBtnOptionIndex) => {
          if (radioBtnOption.name == "ListItem") {
            keyIndex = keyIndex + 1;

            radioBtn.push(
              <RadioButton value={radioBtnOption.attributes.name}>
                <Text style={styles.radioText}>
                  {radioBtnOption.attributes.value}
                </Text>
              </RadioButton>
            );
          }
        });
      }

      keyIndex = keyIndex + 1;

      controlsArray.push(
        <View key={keyIndex}>
          <HTML
            html={text}
            imagesMaxWidth={Dimensions.get("window").width}
            decodeEntities={true}
            debug={true}
          />

          <RadioGroup
            size={24}
            thickness={2}
            color="#153875"
            onSelect={(index, value) => {
            }}
          >
            {radioBtn}
          </RadioGroup>
        </View>
      );
    });
  }

  /**

* Function : createTextFieldControl

* Description : Creates Text Field controls

* parameters : KeyIndex is the unique value, controlItem holds controls globally, controlsArray holds Text Box Controls

*/

  createTextFieldControl(keyIndex, controlItem, controlsArray) {
    controlItem.children.map((innerItem, innerItemIndex) => {
      if (innerItem.name == "FieldHeader") {
        keyIndex = keyIndex + 1;

        var text = new AllHtmlEntities().decode(innerItem.value);

        text = text
          .replace("<d>", "")
          .replace("</d>", "")
          .replace("&amp;", "&")
          .replace("&nbsp;", "")
          .replace("&quot;", "'")
          .replace("&#39;", "'");

        controlsArray.push(
          <View key={keyIndex}>
            <Text style={styles.textBox}>{text}</Text>

            <TextInput
              style={styles.textFieldControl}
              placeholder="Enter Text Here"
            />
          </View>
        );
      }
    });
  }

  /**

* Function : createDropdownControl

* Description : Creates Dropdown Controls

* parameters : KeyIndex is the unique value, controlItem holds controls globally, controlsArray holds Dropdown Controls

*/

  createDropdownControl(keyIndex, controlItem, controlsArray) {
    var dropDowValues = [];

    var obj = {};

    var text = "";

    var label = "";

    controlItem.children.map((innerItem, innerItemIndex) => {
      if (innerItem.name == "FieldHeader") {
        var fieldHeaderVal = innerItem.value;

        fieldHeaderVal = new Entities().decode(innerItem.value);

        fieldHeaderVal = fieldHeaderVal
          .replace("<d>", "")
          .replace("</d>", "")
          .replace("&amp;", "&")
          .replace("&nbsp;", "")
          .replace("&quot;", "'")
          .replace("&#39;", "'");

        text = <Text>{fieldHeaderVal}</Text>;

        label = fieldHeaderVal;
      }

      if (innerItem.name == "ControlActions") {
        innerItem.children.map((dropdownItem, dropdownItemIndex) => {
          if (dropdownItem.name == "UdfControlAction") {
            dropdownItem.children.map(function(
              udfControlAction,
              udfControlActionIndex
            ) {
              if (udfControlAction.name == "SourceValue") {
                obj = {
                  value: udfControlAction.value
                };

                dropDowValues.push(obj);
              }
            });
          }
        });
      }
    });

    keyIndex = keyIndex + 1;

    controlsArray.push(
      <View key={keyIndex}>
        <Dropdown
          label={label}
          data={dropDowValues}
          fontSize={10}
          baseColor="black"
          textColor="black"
          labelFontSize={10}
        />
      </View>
    );
  }

  /**

* Function : createAttachmentControl

* Description : Creates Attachment Controls

* parameters : KeyIndex is the unique value, controlItem holds controls globally, controlsArray holds Attachment Controls

*/

  createAttachmentControl(keyIndex, controlItem, controlsArray) {
    controlItem.children.map((innerItem, innerItemIndex) => {
      if (innerItem.name == "FieldHeader") {
        keyIndex = keyIndex + 1;

        var text = new AllHtmlEntities().decode(innerItem.value);

        text = text
          .replace("<d>", "")
          .replace("</d>", "")
          .replace("&amp;", "&")
          .replace("&nbsp;", "")
          .replace("&quot;", "'")
          .replace("&#39;", "'")
          .replace("<ul>", "")
          .replace("</ul>", "")
          .replace("<li>", "")
          .replace("</li>", "")
          .replace("<li>", "")
          .replace("</li>", "")
          .replace("&quot;", "");

        controlsArray.push(
          <View key={keyIndex}>
            <Text style={styles.textBox}>{text}</Text>

            <View style={styles.BrowserStyle}>
              <Button
                key={keyIndex}
                title="Open Button"
                color="white"
                style={styles.browseButtonStyle}
                onPress={this.browsing}
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        );
      }
    });
  }

  /**

* Function : constructControls

* Description :Convert XML to JSON and Creates Controls from JSON 

* Parameters : response text holds the XML file

*/

  constructControls(responseText) {
    var xml = new XMLParser().parseFromString(responseText); // Assume xmlText contains the example XML

    var mainArray = [];

    var xmlJson = [];

    var controlsArrayOne = [];

    var controlsArrayTwo = [];

    xmlJson.push(xml);

    var keyIndex = 0;

    var radioVal = 0;

    xmlJson[0].children.map((currentSection, index) => {
      controlsArray = [];

      currentSection.children.map((currentItem, itemIndex) => {
        if (currentItem.name == "Controls") {
          currentSection.children.map((currentControl, controlIndex) => {
            if (currentControl.name == "Controls") {
              currentControl.children.map((controlItem, controlItemIndex) => {
                if (controlItem.name == "Checkbox") {
                  this.createCheckBoxControl(
                    keyIndex,
                    controlItem,
                    controlsArray
                  );
                } else if (controlItem.name == "Label") {
                  this.createHTMLTable(keyIndex, controlItem, controlsArray);
                } else if (controlItem.name == "RadioButton") {
                  this.createRadioButtonControl(
                    keyIndex,
                    controlItem,
                    controlsArray
                  );
                } else if (controlItem.name == "Textbox") {
                  this.createTextFieldControl(
                    keyIndex,
                    controlItem,
                    controlsArray
                  );
                } else if (controlItem.name == "DropDownList") {
                  this.createDropdownControl(
                    keyIndex,
                    controlItem,
                    controlsArray
                  );
                } else if (controlItem.name == "AttachmentControl") {
                  this.createAttachmentControl(
                    keyIndex,
                    controlItem,
                    controlsArray
                  );
                }
              });
            }
          });
        }
      });

      obj = {
        key: controlsArray
      };

      mainArray.push(obj);
    });

    this.state.controlsArrayOne = mainArray[0].key;

    this.state.controlsArrayTwo = mainArray[1].key;
  }

  /**

* Function : browsing

* Description : Browses files from iOS and Android devices.

* Parameters : null

*/

  browsing = () => {
    DocumentPicker.show(
      {
        filetype: [DocumentPickerUtil.allFiles()]
      },
      (error, res) => {
        // Android

        this.setState({
          Url: res.uri,

          display: true
        });
        Alert.alert(this.state.Url);
      }
    );
  };

  render() {
    var section1 = this.state.displayedSection
      ? this.state.controlsArrayOne
      : null;

    var section2 = this.state.displayedSectionTwo
      ? this.state.controlsArrayTwo
      : null;

    return (
      <Container>
        <ImageBackground
          style={styles.imageStyle}
          source={require("./images/BackgroundImage.jpg")}
        >
          <Header style={commonStyles.headrBgColor}>
            <Left>
              <Icon
                name="ios-menu"
                style={commonStyles.menuIcon}
                onPress={() => this.props.navigation.openDrawer()}
              />
            </Left>

            <Content
              contentContainerStyle={commonStyles.contentStyle}
            >
              <Text style={commonStyles.contentLabel}> Style Three </Text>
            </Content>

            <Right>
              <Image
                style={commonStyles.contentImage}
                source={require("./images/Save-White.png")}
              />
            </Right>
          </Header>

          <View style={styles.pageStyle}>
            <View style={styles.container}>
              <View style={styles.buttonView}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={this.sectionOne}
                >
                  <Row size={12}>
                    <Col sm={11}>
                      <Text style={styles.buttonText}>Section 2</Text>
                    </Col>

                    <Col sm={1}>
                      <Image
                        style={styles.buttonImage}
                        source={require("./images/Arrow.png")}
                      />
                    </Col>
                  </Row>
                </TouchableOpacity>

                <View>
                  <ScrollView style={styles.sectionView}>{section1}</ScrollView>
                </View>
              </View>

              <View style={styles.buttonView}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={this.sectionTwo}
                >
                  <Row size={12}>
                    <Col sm={11}>
                      <Text style={styles.buttonText}>Entertainment</Text>
                    </Col>

                    <Col sm={1}>
                      <Image
                        style={styles.buttonImage}
                        source={require("./images/Arrow.png")}
                      />
                    </Col>
                  </Row>
                </TouchableOpacity>

                <View>
                  <ScrollView style={styles.sectionView}>{section2}</ScrollView>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

AppRegistry.registerComponent("Accordian", () => Accordian);

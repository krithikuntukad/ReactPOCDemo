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
  Dimensions,
  Switch
} from "react-native";

import { Column as Col, Row } from "react-native-flexbox-grid";

import CheckBox from "react-native-checkbox";

import { Icon, Header, Content, Left, Right } from "native-base";

import { Dropdown } from "react-native-material-dropdown";

import { WebView } from "react-native";

var XMLParser = require("react-xml-parser");

import HTML from "react-native-render-html";

import styles from "./Styles/xmlFormWithSwitchStyle";

import commonStyles from "./Styles/commonStyles";

import { Container } from "native-base";

const Entities = require("html-entities").AllHtmlEntities;

const AllHtmlEntities = require("html-entities").AllHtmlEntities;

import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";

var jsonData = require("./Constants/xmlData.json");

import {
  DocumentPicker,
  DocumentPickerUtil
} from "react-native-document-picker";

export default class DemoPageStyleTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      controlsArray: [],

      Url: "",

      display: false
    };

    var responseText = jsonData[0].data;

    this.constructControls(responseText);
  }

  /**
  * Function : createCheckBoxControl
  * Description : Creates Check box controls by pushing checkbox controls into controlsArray by using key index value
                  and  applying external styles for each control 
  * Params : KeyIndex is the unique value, controlItem holds controls globally, controlsArray holds checkbox controls,
              labelStyle is for styling checkbox label data            
  */

  createCheckBoxControl(keyIndex, controlItem, controlsArray) {
    controlItem.children.map((innerItem, innerItemIndex) => {
      if (innerItem.name == "FieldHeader") {
        keyIndex = keyIndex + 1;

        labelStyle = {
          color: "black",

          fontSize: 10
        };

        checkBoxStyle = {
          width: 18,

          height: 18
        };

        controlsArray.push(
          <View key={keyIndex} style={{ flexDirection: "row" }}>
            <CheckBox
              style={styles.checkBox}
              label=""
              labelStyle={labelStyle}
              checkboxStyle={checkBoxStyle}
              onChange={checked => console.log("I am checked", checked)}
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
  * Description : Creates HTML Table controls and displays in webview
  * params : KeyIndex is the unique value,controlItem holds controls globally, controlsArray holds HTML table controls, innerItem indicates the table data
  */

  createHTMLTable(keyIndex, controlItem, controlsArray) {
    controlItem.children.map((innerItem, innerItemIndex) => {
      if (innerItem.name == "FieldHeader") {
        keyIndex = keyIndex + 1;

        var y = innerItem.value;

        y = new Entities().decode(y);

        controlsArray.push(
          <WebView
            source={{ html: y }}
            style={{
              flex: 1,

              marginTop: 5,

              height: 200
            }}
          />
        );
      }
    });
  }

  /**
  * Function : createRadioButtonControl
  * Description : Creates Radio Button controls and displays switch control if innerItem lenght is 2
  * params: KeyIndex is the unique value, controlItem holds controls globally, controlsArray holds radio button controls, FieldHeader is for label data, UseDefinedList is the list of values for dropdown
  *          switchFlag is true if length is 2 , radioBtnOptionIndex is the unique index value for radio button options
  */

  createRadioButtonControl(keyIndex, controlItem, controlsArray) {
    controlItem.children.map(function(innerItem, innerItemIndex) {
      var text = "";

      var radioBtn = [];

      var SwitchFlag = false;

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
        var switchOrRadioArray = [];

        var switchOrRadioControlArray = [];

        innerItem.children.map(function(radioBtnOption, radioBtnOptionIndex) {
          if (innerItem.children.length == 2) {
            SwitchFlag = true;

            var obj = {
              value: radioBtnOption.attributes.value,

              name: radioBtnOption.attributes.name
            };

            switchOrRadioArray.push(obj);

            if (innerItem.children.length - 1 == radioBtnOptionIndex) {
              radioBtn.push(
                <View style={styles.radio} key={keyIndex}>
                  <Row size={12} style={styles.switchRow}>
                    <Col sm={1} style={{ flex: 0.1, justifyContent: "center" }}>
                      {" "}
                      <Text style={styles.swicthLable}>
                        {switchOrRadioArray[0].value}
                      </Text>
                    </Col>

                    <Col sm={2}>
                      <Switch
                        style={styles.switchIcon}
                        onValueChange={val => {}}
                      />
                    </Col>

                    <Col sm={8} style={{ flex: 1, justifyContent: "center" }}>
                      {" "}
                      <Text style={styles.swicthLable}>
                        {switchOrRadioArray[1].value}
                      </Text>
                    </Col>
                  </Row>
                </View>
              );
            }
          } else {
            SwitchFlag = false;

            switchOrRadioControlArray.push(radioBtnOption);

            console.log("switchOrRadioControlArray");

            if (innerItem.children.length - 1 == radioBtnOptionIndex) {
              console.log(JSON.stringify(switchOrRadioControlArray));

              switchOrRadioControlArray.map(function(rad, radBtnOptionIndex) {
                if (rad.name == "ListItem") {
                  keyIndex = keyIndex + 1;

                  radioBtn.push(
                    <RadioButton value={rad.attributes.name}>
                      <Text style={styles.radioText}>
                        {rad.attributes.value}
                      </Text>
                    </RadioButton>
                  );
                }
              });
            }
          }
        });
      }

      keyIndex = keyIndex + 1;

      if (SwitchFlag) {
        controlsArray.push(
          <View key={keyIndex}>
            <HTML
              html={text}
              imagesMaxWidth={Dimensions.get("window").width}
              decodeEntities={true}
              debug={true}
            />

            {radioBtn}
          </View>
        );
      } else {
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
              onSelect={(index, value) => {}}
            >
              {radioBtn}
            </RadioGroup>
          </View>
        );
      }
    });
  }

  /**
  * Function : createTextFieldControl
  * Description : Creates Text Field  controls
  * params: KeyIndex is the unique value,controlItem holds controls globally, controlsArray holds TextInput controls, replace removes all unnecessary tags , FieldHeader is the label for TextInput
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
        );
      }
    });
  }

  /**
  * Function : createDropdownControl
  * Description : Creates Dropdown Controls
  * params :KeyIndex is the unique value,controlItem holds controls globally, controlsArray holds DropDown controls, dropDownValues are values to be displayed in the dropdownlist, ControlActions indicates interdependency actions
  */

  createDropdownControl(keyIndex, controlItem, controlsArray) {
    var dropDowValues = [];

    var obj = {};

    var text = "";

    var label = "";

    controlItem.children.map((innerItem, innerItemIndex) => {
      if (innerItem.name == "FieldHeader") {
        var y = innerItem.value;

        y = new Entities().decode(innerItem.value);

        y = y
          .replace("<d>", "")
          .replace("</d>", "")
          .replace("&amp;", "&")
          .replace("&nbsp;", "")
          .replace("&quot;", "'")
          .replace("&#39;", "'");

        text = <Text>{y}</Text>;

        label = y;
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
  * Params : KeyIndex is the unique value, controlItem holds controls globally,controlsArray holds attachment controls
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
  * Description : Creates Controls from JSON
  */

  constructControls(responseText) {
    var xml = new XMLParser().parseFromString(responseText); // Assume xmlText contains the example XML
    var xmlJson = [];

    var controlsArray = [];

    xmlJson.push(xml);

    var keyIndex = 0;

    xmlJson[0].children.map((currentSection, index) => {
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
    });

    this.state.controlsArray = controlsArray;

    this.state.doc = JSON.stringify(xml);
  }

  /**
  * Function : browsing
  * Description : Browses files from iOS andAndroid devices.
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

        // this.setS = res.uri

        Alert.alert(this.state.Url);

        console.log(
          res.uri,

          res.type, // mime type

          res.fileName,

          res.fileSize
        );
      }
    );
  };

  render() {
    return (
      <Container>
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
            <Text style={commonStyles.contentLabel}>
              Style Two
            </Text>
          </Content>

          <Right>
            <Image
              style={commonStyles.contentImage}
              source={require("./images/Save-White.png")}
            />
          </Right>
        </Header>

        <View style={styles.pageStyle}>
          <ScrollView>
            <View style={commonStyles.container}>{this.state.controlsArray}</View>
          </ScrollView>

          <View>
            <Row size={12}>
              <Col sm={6} style={styles.buttonBorderColor}>
                <Button
                  title="Cancel"
                  color="#153875"
                  onPress={() => {
                    Alert.alert("You tapped the button!");
                  }}
                  accessibilityLabel="Learn more about this purple button"
                />
              </Col>

              <Col style={styles.createButtonColor} sm={6}>
                <Button
                  title="Create"
                  color="white"
                  onPress={() => {
                    Alert.alert("You tapped the button!");
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

AppRegistry.registerComponent("XMLFormWithSwitch", () => XMLFormWithSwitch);

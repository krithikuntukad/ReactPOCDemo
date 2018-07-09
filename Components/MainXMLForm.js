import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
  Alert,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  AsyncStorage
} from "react-native";

import { Column as Col, Row } from "react-native-flexbox-grid";

import { Icon, Header, Content, Left, Right } from "native-base";

var XMLParser = require("react-xml-parser");

import HTML from "react-native-render-html";

import styles from "./Styles/mainXMLFormStyle";

import validationStyles from "./Styles/validationStyle";

import commonStyles from "./Styles/commonStyles";

import { Container } from "native-base";

const Entities = require("html-entities").AllHtmlEntities;

const AllHtmlEntities = require("html-entities").AllHtmlEntities;

import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";

import { Form, FormItem } from "react-native-form-validation";

import TextFieldComponent from "./controls/TextFieldComponent";

import LabelComponent from "./controls/LabelComponent";

import CheckboxComponent from "./controls/CheckboxComponent";

import DropdownComponent from "./controls/DropdownComponent";

import { DialogComponent } from "react-native-dialog-component";

var jsonData = require("./Constants/xmlDataStyleFive.json");

import { WebView } from "react-native";

var responseText;
let FileValues = [
  {
    value: "xmlData"
  },
  {
    value: "xmlDataStyleFive"
  },
  {
    value: "xmlWithFiveControls"
  },
  {
    value: "xmlWithTenControls"
  },
  {
    value: "Interdependency"
  },
  {
    value: "noTableData"
  },
  {
    value: "originalxmlData"
  },
  {
    value: "sixControlData"
  }
];
export default class MainXMLForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      controlsArray: [],
      controlInputs: {},
      values: [],
      controlValid: {},
      validityRules: {},
      visibilityInputs: {},
      xmlJson: [],
      displayLoader: true,
      validForm: false
    };
    responseText = jsonData[0].data;
    this.convertXMLDataToJson(responseText);
  }

  /**
   * Function : componentWillMount
   * Description : It is React native component life cycle event & invoked just before mounting occurs
   */
  componentWillMount() {
    setTimeout(() => {
      this.setState({ displayLoader: false });
    }, 3000);
    this.displayData();
  }
  /**
   * Function : componentWillUnmount
   * Description : It is React native component life cycle event & invoked when a component is being removed from the DOM
   */
  componentWillUnmount() {
    if (!(Object.keys(this.state.controlInputs).length === 0)) {
      AsyncStorage.setItem(
        "savedData",
        JSON.stringify(this.state.controlInputs)
      );
      AsyncStorage.setItem(
        "visibilityData",
        JSON.stringify(this.state.visibilityInputs)
      );
    }
  }

  /**
   * Function : changeFileValue
   * Description : Dynamically requires xml data from specified file paths.
   * Params : fileName is the name of the file from which the function should load xml data.
   */
  changeFileValue = fileName => {
    var path = "./Constants/xmlData.json";
    if (fileName == "xmlData") {
      jsonData = require("./Constants/xmlData.json");
    } else if (fileName == "xmlDataStyleFive") {
      jsonData = require("./Constants/xmlDataStyleFive.json");
    } else {
      jsonData = require("./Constants/noTableData.json");
    }
    responseText = jsonData[0].data;
    var xml = new XMLParser().parseFromString(responseText);
    var tempArray = [];
    tempArray.push(xml);
    let statusCopy = Object.assign({}, this.state);
    statusCopy.xmlJson = tempArray;
    this.setState(statusCopy);
  };

  /**
   * Function : formateText
   * Description : removes all html tags from a string
   * Params : text to be formated
   */ 

  formateText=(text)=>{
   return  text.replace("<p>", "")
    .replace("</p>", "")
    .replace("<d>", "")
    .replace("</d>", "")
    .replace("<dfn>", "")
    .replace("</dfn>", "")
    .replace("<em>", "")
    .replace("</em>", "")
    .replace("&nbsp;", "")
    .replace("&amp;", "&")
    .replace("&quot;", "'")
    .replace("&#39;", "'")

  }
  /**
   * Function : visibilityPropertyOnControlAction
   * Description : Defines Visibility Property of eacj control based on Action,SourceField and Source value.
   * Params : innerItem is the object holding Action,SourceField and Source value of eact control
   */
  visibilityPropertyOnControlAction = innerItem => {
    var arrayObj = [];
    if (innerItem.name == "ControlActions" && innerItem.children.length > 0) {
      for (index = 0; index < innerItem.children.length; index++) {
        var controlActions = innerItem.children[index];
        if (controlActions.name == "UdfControlAction") {
          var Action = "",
            SourceField = "",
            SourceValue = "";
          for (
            subIndex = 0;
            subIndex < controlActions.children.length;
            subIndex++
          ) {
            var udfControlAction = controlActions.children[subIndex];
            if (udfControlAction.name == "Action") {
              Action = udfControlAction.value;
            }
            if (udfControlAction.name == "SourceField") {
              SourceField = udfControlAction.value;
            }

            if (udfControlAction.name == "SourceValue") {
              SourceValue = udfControlAction.value;
            }
            if (controlActions.children.length - 1 == subIndex) {
              let obj = {
                Action: Action,
                SourceField: SourceField,
                SourceValue: SourceValue
              };
              arrayObj.push(obj);
            }
          }
          if (innerItem.children.length - 1 == index) {
            return arrayObj;
          }
        }
      }
    } else {
      return arrayObj;
    }
  };

  /**
   * Function : getValidationRules
   * Description : Defines validation rules for each control.
   * Params : arrayObj is the array of object having specified key defined to indicate validation error message and validation rules
   */
  getValidationRules = arrayObj => {
    var validityArray = {};
    for (index = 0; index < arrayObj.length; index++) {
      let innerItem = arrayObj[index];
      if (innerItem.name == "FieldId") {
        validityArray["fieldId"] = innerItem.value;
      }
      if (innerItem.name == "Visible") {
        validityArray["visibility"] = innerItem.value;
      }
      if (innerItem.name == "Validator") {
        if (innerItem.value == "String") {
          validityArray["regtext"] = /^[a-zA-Z]+$/;
        } else {
          validityArray["regtext"] = /^\d+$/;
        }
      }
      if (innerItem.name == "MaxLength") {
        validityArray["maxLength"] = parseInt(innerItem.value);
      }
      if (innerItem.name == "ValidatorErrorMessage") {
        validityArray["validatorErrorMessage"] = innerItem.value;
      }
      if (innerItem.name == "RequiredField") {
        validityArray["isRequired"] = innerItem.value;
      }
      if (innerItem.name == "RequiredFieldErrorMessage") {
        validityArray["requiredFieldErrorMessage"] = innerItem.value;
      }

      if (innerItem.name == "Validator") {
        if (innerItem.value == "String") {
          validityArray["keyboardType"] = "default";
        } else if (innerItem.value == "Integer") {
          validityArray["keyboardType"] = "numeric";
        }
      }
    }
    return validityArray;
  };

  /**
   * Function : validateControl
   * Description : Validates the each control against the rule defined for that particular control.
   * Params : attributeKey uniquely identifies the each control,and validityArray has the validitu rule defined for particular control.
   */
  validateControl = (attributeKey, validityArray) => {
    let statusCopy = Object.assign({}, this.state);
    if (
      this.state.controlInputs[attributeKey].length == 0 &&
      validityArray["isRequired"] == "true"
    ) {
      statusCopy.controlValid[attributeKey] =
        validityArray["requiredFieldErrorMessage"];
      this.setState(statusCopy);
    } else if (
      this.state.controlInputs[attributeKey].length > 0 &&
      validityArray["regExp"] != "" &&
      !validityArray["regtext"].test(this.state.controlInputs[attributeKey])
    ) {
      statusCopy.controlValid[attributeKey] =
        validityArray["validatorErrorMessage"];
      this.setState(statusCopy);
    } else {
      statusCopy.controlValid[attributeKey] = null;
      this.setState(statusCopy);
    }
  };

  /**
   * Function : displayData
   * Description : gets and pre populates the user entered data if any form data is stored previously.
   */
  displayData = async () => {
    try {
      var value = await AsyncStorage.getItem("savedData");
      var visibilityData = await AsyncStorage.getItem("visibilityData");
      let parsedVisibilityData = JSON.parse(visibilityData);
      let parsed = JSON.parse(value);
      if (parsed) {
        Alert.alert("Do you want to Replace previous data", "", [
          {
            text: "Cancel",
            onPress: () => AsyncStorage.removeItem("saveData")
          },
          {
            text: "OK",
            onPress: () => {
              this.setState({
                controlInputs: parsed
              });
              this.setState({
                visibilityInputs: parsedVisibilityData
              });
            }
          }
        ]);
      }
    } catch (error) {
      Alert.alert("plzzz", error);
    }
  };

  /**
   * Function : changeStateAttributeValue
   * Description : Updates States
   * Params : valueObj holds the user entered text field value,validity rules.
   */
  changeStateAttributeValue = (valueObj) => {
    let statusCopy = Object.assign({}, this.state);
    let evt =   valueObj.event
    statusCopy.controlInputs[valueObj.attributeKey] =
    evt.nativeEvent.text;
    statusCopy.visibilityInputs[valueObj.validityArray.fieldId] =
    evt.nativeEvent.text;
    this.setState(statusCopy);
    this.validateControl(valueObj.attributeKey, valueObj.validityArray);
  };

  /**
   * Function : changeRadioButtonAttributeValue
   * Description : Updates States
   * Params : selectedRadioVal holds the user entered text field value,validity rules.
   */
  changeRadioButtonAttributeValue = selectedRadioVal => {
    let statusCopy = Object.assign({}, this.state);
    statusCopy.controlInputs[selectedRadioVal.displayLabel] =
      selectedRadioVal.value;
    statusCopy.controlInputs[selectedRadioVal.displayLabel + "index"] =
      selectedRadioVal.index;
    statusCopy.visibilityInputs[selectedRadioVal.fieldId] =
      selectedRadioVal.value;
    this.setState(statusCopy);
    this.validateControl(
      selectedRadioVal.displayLabel,
      selectedRadioVal.validityArray
    );
  };

  /**
   * Function : changeCheckboxAttributeValue
   * Description : Updates States
   * Params : checkedAttributes holds the user entered text field value,validity rules.
   */
  changeCheckboxAttributeValue = checkedAttributes => {
    let statusCopy = Object.assign({}, this.state);
    statusCopy.controlInputs[checkedAttributes.attributeKey] =
      checkedAttributes.value;
    statusCopy.visibilityInputs[checkedAttributes.validityArray.fieldId] =
      checkedAttributes.value == true ? "true" : "false";
    this.setState(statusCopy);
    this.validateControl(
      checkedAttributes.attributeKey,
      checkedAttributes.validityArray
    );
  };

  /**
   * Function : changeDropDownAttributeValue
   * Description : Updates States
   * Params : checkedAttributes holds the user entered text field value,validity rules.
   */
  changeDropDownAttributeValue = dropDownSelectedAttributes => {
    var name = "";
    for (var i = 0; i < dropDownSelectedAttributes.data.length - 1; i++) {
      if (
        dropDownSelectedAttributes.value ==
        dropDownSelectedAttributes.data[i].value
      ) {
        name = dropDownSelectedAttributes.data[i].name;
      }
    }
    let statusCopy = Object.assign({}, this.state);
    statusCopy.controlInputs[dropDownSelectedAttributes.attributeKey] =
      dropDownSelectedAttributes.value;
    statusCopy.visibilityInputs[dropDownSelectedAttributes.validityArray.fieldId] = name;
    this.setState(statusCopy);
    this.validateControl(
      dropDownSelectedAttributes.attributeKey,
      dropDownSelectedAttributes.validityArray
    );
  };

  /**
  * Function : createCheckBoxControl
  * Description : Creates Check box controls by pushing checkbox controls into controlsArray by using key index value
                  and  applying external styles for each control 
  * Params : KeyIndex is the unique value,controlItem holds control attributes.
  *             
  */
  createCheckBoxControl(keyIndex, controlItem) {
    var visibility = false;
    var isRequired = false;
    var contolArray = [];
    var controlActionsArray = [];
    var validityArray = {};
    return controlItem.children.map((outerItem, outerItemIndex) => {
      contolArray.push(outerItem);

      if (controlItem.children.length - 1 == outerItemIndex) {
        var tempArray = contolArray.reverse();
        return tempArray.map((innerItem, innerItemIndex) => {
          if (innerItem.name == "FieldId") {
            validityArray = this.getValidationRules(tempArray);
          }

          visibility = validityArray["visibility"];
          isRequired = validityArray["isRequired"];

          if (innerItem.name == "ControlActions") {
            controlActionsArray = this.visibilityPropertyOnControlAction(
              innerItem
            );
          }

          if (innerItem.name == "FieldHeader") {
            keyIndex = keyIndex + 1;
            controlActionsArray.length > 0 &&
              controlActionsArray.map(
                (visibilityAction, visibilityActionIndex) => {
                  if (
                    this.state.visibilityInputs[visibilityAction.SourceField] ==
                    visibilityAction.SourceValue
                  ) {
                    if (visibilityAction.Action == "Hide") {
                      visibility = "false";
                    } else if (visibilityAction.Action == "Show") {
                      visibility = "true";
                    } else if (
                      visibilityAction.Action == "ShowAndRequiredField"
                    ) {
                      visibility = "true";
                      isRequired = "true";
                    }
                  }
                }
              );
            if (visibility == "true") {
              this.state.validityRules[innerItem.value] = validityArray;
              return (
                <FormItem isRequired={isRequired == "true" ? true : false}>
                  {
                    <Text style={validationStyles.error}>
                      {this.state.controlValid[innerItem.value]}
                    </Text>
                  }
                  <CheckboxComponent
                    key={keyIndex}
                    label=""
                    checked={this.state.controlInputs[innerItem.value]}
                    onChange={checked => {
                      let obj = {
                        value:
                          this.state.controlInputs[innerItem.value] == undefined
                            ? true
                            : checked
                              ? false
                              : true,
                        attributeKey: innerItem.value,
                        validityArray: validityArray
                      };
                      this.changeCheckboxAttributeValue(obj);
                    }}
                    numberOfLines={15}
                    value={this.getDisplayLabel(innerItem.value, isRequired)}
                  />
                </FormItem>
              );
            }
          }
        });
      }
    });
  }

  /**
   * Function : createHTMLTable
   * Description : Creates HTML Table controls and displays in webview
   * params : KeyIndex is the unique value,controlItem holds control attributes.
   */

  createHTMLTable(keyIndex, controlItem) {
    var visibility = false;
    var isRequired = false;
    var contolArray = [];
    var controlActionsArray = [];
    var validityArray = {};
    return controlItem.children.map((outerItem, outerItemIndex) => {
      contolArray.push(outerItem);

      if (controlItem.children.length - 1 == outerItemIndex) {
        var tempArray = contolArray.reverse();
        return tempArray.map((innerItem, innerItemIndex) => {
          if (innerItem.name == "FieldId") {
            validityArray = this.getValidationRules(tempArray);
            console.log("validityArray Table", validityArray);
          }

          visibility = validityArray["visibility"];
          isRequired = validityArray["isRequired"];
          if (innerItem.name == "ControlActions") {
            controlActionsArray = this.visibilityPropertyOnControlAction(
              innerItem
            );
          }

          if (innerItem.name == "FieldHeader") {
            keyIndex = keyIndex + 1;
            var y = innerItem.value;
            y = new Entities().decode(y);
            console.log("controlActionsArray",controlActionsArray)
            controlActionsArray.length > 0 &&
              controlActionsArray.map(
                (visibilityAction, visibilityActionIndex) => {
                  if (
                    this.state.visibilityInputs[visibilityAction.SourceField] ==
                    visibilityAction.SourceValue
                  ) {
                    if (visibilityAction.Action == "Hide") {
                      visibility = "false";
                    } else if (visibilityAction.Action == "Show") {
                      visibility = "true";
                    } else if (
                      visibilityAction.Action == "ShowAndRequiredField"
                    ) {
                      visibility = "true";
                      isRequired = "true";
                    }
                  }
                }
              );

            if (visibility == "true") {
              return (
                <WebView source={{ html: y }} style={styles.webviewStyle} />
              );
            }
          }
        });
      }
    });
  }

  /**
   * Function : createRadioButtonControl
   * Description : Creates Radio Button controls and displays switch control if innerItem lenght is 2
   * params: KeyIndex is the unique value,controlItem holds control attributes.
   */
  createRadioButtonControl(keyIndex, controlItem) {
    var visibility = false;
    var isRequired = false;
    var contolArray = [];
    var text = "";
    var radioBtn = [];
    var displayTxt = "";
    var displayLabel = "";
    var controlActionsArray = [];
    var validityArray = {};
    return controlItem.children.map((outerItem, outerItemIndex) => {
      contolArray.push(outerItem);

      if (controlItem.children.length - 1 == outerItemIndex) {
        var tempArray = contolArray.reverse();

        return tempArray.map((innerItem, innerItemIndex) => {
          if (innerItem.name == "FieldId") {
            validityArray = this.getValidationRules(tempArray);
          }

          visibility = validityArray["visibility"];
          isRequired = validityArray["isRequired"];

          if (innerItem.name == "ControlActions") {
            controlActionsArray = this.visibilityPropertyOnControlAction(
              innerItem
            );
          }
          if (innerItem.name == "FieldHeader") {
            displayLabel = innerItem.value;
            text = innerItem.value; //<Text style={styles.Header }>{innerItem.value}</Text>
            text = new Entities().decode(text);
            text = this.formateText(text)

            this.state.validityRules[displayLabel] = validityArray;
            displayTxt =
              '<p style="fontSize:10;margin-bottom:5">' +
              this.getDisplayLabel(text, isRequired) +
              "</p>";
          }
          if (innerItem.name == "UserDefinedList") {
            return innerItem.children.map(
              (radioBtnOption, radioBtnOptionIndex) => {
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
              }
            );
          }
          if (tempArray.length - 1 == innerItemIndex) {
            controlActionsArray.length > 0 &&
              controlActionsArray.map(
                (visibilityAction, visibilityActionIndex) => {
                  if (
                    this.state.visibilityInputs[visibilityAction.SourceField] ==
                    visibilityAction.SourceValue
                  ) {
                    if (visibilityAction.Action == "Hide") {
                      visibility = "false";
                    } else if (visibilityAction.Action == "Show") {
                      visibility = "true";
                    } else if (
                      visibilityAction.Action == "ShowAndRequiredField"
                    ) {
                      visibility = "true";
                      isRequired = "true";
                    }
                  }
                }
              );
            if (visibility == "true") {
              keyIndex = keyIndex + 1;

              return (
                <FormItem>
                  {
                    <Text style={validationStyles.error}>
                      {this.state.controlValid[displayLabel]}
                    </Text>
                  }
                  <View key={keyIndex}>
                    <HTML
                      html={displayTxt}
                      imagesMaxWidth={Dimensions.get("window").width}
                      decodeEntities={true}
                      debug={true}
                    />
                    <RadioGroup
                      size={24}
                      thickness={2}
                      color="#153875"
                      selectedIndex={
                        this.state.controlInputs[displayLabel + "index"]
                      }
                      onSelect={(index, value) => {
                        let obj = {
                          index: index,
                          value: value,
                          displayLabel: displayLabel,
                          fieldId: validityArray["fieldId"],
                          validityArray: validityArray
                        };
                        this.changeRadioButtonAttributeValue(obj);
                      }}
                    >
                      {radioBtn}
                    </RadioGroup>
                  </View>
                </FormItem>
              );
            }
          }
        });
      }
    });
  }

  /**
   * Function : getDisplayLabel
   * Description : Appends * for mandatory field's label
   */
  getDisplayLabel(text, isRequired) {
    return (labelVal = isRequired == "true" ? text + "*" : text);
  }

  /**
   * Function : createTextFieldControl
   * Description : Creates Text Field  controls
   * params:KeyIndex is the unique value,controlItem holds control attributes.
   */
  createTextFieldControl(keyIndex, controlItem) {
    var visibility = false;
    var isRequired = false;
    var contolArray = [];
    var validityArray = {};
    var controlActionsArray = [];
    return controlItem.children.map((outerItem, outerItemIndex) => {
      contolArray.push(outerItem);

      if (controlItem.children.length - 1 == outerItemIndex) {
        var tempArray = contolArray.reverse();
        return tempArray.map((innerItem, innerItemIndex) => {
          if (innerItem.name == "FieldId") {
            validityArray = this.getValidationRules(tempArray);
          }
          visibility = validityArray["visibility"];
          isRequired = validityArray["isRequired"];
          if (innerItem.name == "ControlActions") {
            controlActionsArray = this.visibilityPropertyOnControlAction(
              innerItem
            );
          }

          if (innerItem.name == "FieldHeader") {
            keyIndex = keyIndex + 1;
            var text = new AllHtmlEntities().decode(innerItem.value);
            text = this.formateText(text)
            this.state.validityRules[text] = validityArray;
            controlActionsArray.length > 0 &&
              controlActionsArray.map(
                (visibilityAction, visibilityActionIndex) => {
                  if (
                    this.state.visibilityInputs[visibilityAction.SourceField] ==
                    visibilityAction.SourceValue
                  ) {
                    if (visibilityAction.Action == "Hide") {
                      visibility = "false";
                    } else if (visibilityAction.Action == "Show") {
                      visibility = "true";
                    } else if (
                      visibilityAction.Action == "ShowAndRequiredField"
                    ) {
                      visibility = "true";
                      isRequired = "true";
                    }
                  }
                }
              );
            if (visibility == "true") {
              return (
                <FormItem>
                  <LabelComponent
                    style={styles.textBox}
                    value={this.getDisplayLabel(text, isRequired)}
                  />
                  <TextFieldComponent
                    value={this.state.controlInputs[text]} //.xmlJson[0].children[a].children[b].children[c].children[d].value}
                    placeholder="Enter Text Here"
                    key={keyIndex}
                    keyboardType={validityArray["keyboardType"]}
                    maxLength={validityArray["maxLength"]}
                    onChange={event => {
                      let obj = {
                        event: event,
                        attributeKey: text,
                        validityArray: validityArray
                      };
                      this.changeStateAttributeValue(obj);
                    }}
                  />
                  {
                    <Text style={validationStyles.error}>
                      {this.state.controlValid[text]}
                    </Text>
                  }
                </FormItem>
              );
            }
          }
        });
      }
    });
  }

  /**
   * Function : createDropdownControl
   * Description : Creates Dropdown Controls
   * params : KeyIndex is the unique value,controlItem holds control attributes.
   */
  createDropdownControl(keyIndex, controlItem) {
    var visibility = false;
    var isRequired = false;
    var contolArray = [];
    var stateIndexVal = "";
    var controlActionsArray = [];
    var validityArray = {};
    return controlItem.children.map((outerItem, outerItemIndex) => {
      var dropDowValues = [];
      var obj = {};
      var text = "";
      var label = "";
      contolArray.push(outerItem);

      if (controlItem.children.length - 1 == outerItemIndex) {
        var tempArray = contolArray.reverse();
        return tempArray.map((innerItem, innerItemIndex) => {
          if (innerItem.name == "FieldId") {
            validityArray = this.getValidationRules(tempArray);
          }
          visibility = validityArray["visibility"];
          isRequired = validityArray["isRequired"];

          if (innerItem.name == "ControlActions") {
            controlActionsArray = this.visibilityPropertyOnControlAction(
              innerItem
            );
          }

          if (innerItem.name == "FieldHeader") {
            var y = innerItem.value;
            y = new Entities().decode(innerItem.value);
            y = this.formateText(y)
            text = <Text>{y}</Text>;
            label = y;
          }
          stateIndexVal = label;
          this.state.validityRules[label] = validityArray;
          if (innerItem.name == "UserDefinedList") {
            return innerItem.children.map((dropdownItem, dropdownItemIndex) => {
              if (dropdownItem.name == "ListItem") {
                obj = {
                  value: dropdownItem.attributes.value,
                  name: dropdownItem.attributes.name
                };
                dropDowValues.push(obj);
              }
            });
          }
          if (tempArray.length - 1 == innerItemIndex) {
            keyIndex = keyIndex + 1;
            controlActionsArray.length > 0 &&
              controlActionsArray.map(
                (visibilityAction, visibilityActionIndex) => {
                  if (
                    this.state.visibilityInputs[visibilityAction.SourceField] ==
                    visibilityAction.SourceValue
                  ) {
                    if (visibilityAction.Action == "Hide") {
                      visibility = "false";
                    } else if (visibilityAction.Action == "Show") {
                      visibility = "true";
                    } else if (
                      visibilityAction.Action == "ShowAndRequiredField"
                    ) {
                      visibility = "true";
                      isRequired = "true";
                    }
                  }
                }
              );
            if (visibility == "true") {
              return (
                <FormItem>
                  <DropdownComponent
                    key={keyIndex}
                    label={this.getDisplayLabel(label, isRequired)}
                    dropDowValues={dropDowValues}
                    value={this.state.controlInputs[label]}
                    onChangeText={(val, index, data) => {
                      let obj = {
                        value: val,
                        data: data,
                        attributeKey: label,
                        validityArray: validityArray
                      };
                      this.changeDropDownAttributeValue(obj);
                    }}
                  />
                  {
                    <Text style={validationStyles.error}>
                      {this.state.controlValid[label]}
                    </Text>
                  }
                </FormItem>
              );
            }
          }
        });
      }
    });
  }

  /**
   * Function : convertXMLDataToJson
   * Description : Converts XML Data to Required JSON Object
   * params : responseText is the XML Data to be converted.
   */
  convertXMLDataToJson(responseText) {
    var xml = new XMLParser().parseFromString(responseText); // Assume xmlText contains the example XML
    this.state.xmlJson = [];
    this.state.xmlJson.push(xml);
  }

  /**
   * Function : submit
   * Description : Function which Validates and displays the User entered data in an alert box.
   */
  submit = () => {
    var errorMessage = [];
    var validationCheckRules = [];
    validationCheckRules = this.state.validityRules;
    var Array = this.state.controlInputs;
    for (var key in validationCheckRules) {
      var rules = validationCheckRules[key];

      if (
        rules["isRequired"] == "true" &&
        (Array[key] == undefined ||
          Array[key] == "undefined" ||
          Array[key] == "null" ||
          Array[key] == null ||
          Array[key] == "")
      ) {
        let statusCopy = Object.assign({}, this.state);
        statusCopy.controlValid[key] = rules["requiredFieldErrorMessage"];
        errorMessage.push(statusCopy.controlValid[key]);
        this.setState(statusCopy);
      } else {
        let statusCopy = Object.assign({}, this.state);
        statusCopy.controlValid[key] = null;
        this.setState(statusCopy);
      }
    }
    if (errorMessage.length > 0) {
      let statusCopy = Object.assign({}, this.state);
      statusCopy.validForm = false;
      this.setState(statusCopy);
    } else {
      let statusCopy = Object.assign({}, this.state);
      statusCopy.validForm = true;
      this.setState(statusCopy);
    }

    var nonNullArray = [];
    this.state.values = [];
    for (var key in Array) {
      if (Array[key] != "") {
        var text = key; 
        text = new Entities().decode(text);
        text = this.formateText(text)
        obj = {
          Question: text,
          Answer: Array[key]
        };
        nonNullArray.push(obj);
      }
      this.setState({
        values: JSON.stringify(nonNullArray)
      });
    }
    if (this.state.validForm == true) {
      this.dialogComponent.show();
    }
  };

  customValidation() {
    return true;
  }

  render() {
    var keyIndex = 0;
    content = this.state.xmlJson[0].children.map((currentSection, index) => {
      return currentSection.children.map((currentItem, itemIndex) => {
        if (currentItem.name == "Controls") {
          return currentSection.children.map((currentControl, controlIndex) => {
            if (currentControl.name == "Controls") {
              return currentControl.children.map(
                (controlItem, controlItemIndex) => {
                  if (controlItem.name == "Checkbox") {
                    return this.createCheckBoxControl(keyIndex, controlItem);
                  } else if (controlItem.name == "Label") {
                    return this.createHTMLTable(keyIndex, controlItem);
                  } else if (controlItem.name == "RadioButton") {
                    return this.createRadioButtonControl(keyIndex, controlItem);
                  } else if (controlItem.name == "Textbox") {
                    return this.createTextFieldControl(keyIndex, controlItem);
                  } else if (controlItem.name == "DropDownList") {
                    return this.createDropdownControl(keyIndex, controlItem);
                  } 
                }
              );
            }
          });
        }
      });
    });

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
          <Content contentContainerStyle={commonStyles.contentStyle}>
            <Text style={commonStyles.contentLabel}>Main XML Form </Text>
          </Content>
          <Right>
            <Image
              style={commonStyles.contentImage}
              source={require("./images/Save-White.png")}
            />
          </Right>
        </Header>
        <View style={commonStyles.pageStyle}>
          <DropdownComponent
            label="choose xml file/Data"
            dropDowValues={FileValues}
            onChangeText={val => {
              this.changeFileValue(val);
            }}
          />
          <View style={commonStyles.viewStyle}>
            {this.state.displayLoader ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : null}
            {!this.state.displayLoader ? (
              <ScrollView>
                <View style={styles.container}>
                  <Form ref="form" shouldValidate={true}>
                    {content}
                  </Form>
                </View>
              </ScrollView>
            ) : null}
            <DialogComponent
              ref={dialogComponent => {
                this.dialogComponent = dialogComponent;
              }}
            >
              <View>
                <Text>{this.state.values}</Text>
              </View>
            </DialogComponent>
          </View>
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
                    this.submit();
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

AppRegistry.registerComponent("MainXMLForm", () => MainXMLForm);

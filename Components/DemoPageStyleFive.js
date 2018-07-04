
import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Image, Alert,ActivityIndicator, ScrollView, TextInput, StyleSheet, Dimensions } from 'react-native';
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
import { WebView } from 'react-native';

var responseText;
export default class DemoPageStyleFive extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      controlsArray: [],
      controlInputs: {},
      values: [],
      controlValid:{},
      validityRules:{},
      visibilityInputs:{},
      xmlJson:[],
      displayLoader:true
 
    }
     responseText = jsonData[0].data
     this.constructControls(responseText)
    
  }
componentWillMount(){
  setTimeout(() => {
    this.setState({displayLoader:false})
  }, 3000);
}
  controlHideShowAction=(innerItem)=>{
    var controlActionsArray =[]
    if(innerItem.name == "ControlActions"){
      return innerItem.children.map((controlActions,controlActionsIndex) => {
        if(controlActions.name=="UdfControlAction"){
          var Action="",SourceField="",SourceValue=""
          controlActions.children.map((udfControlAction,udfControlActionIndex)=>{
       
        if(udfControlAction.name=="Action"){
        Action=udfControlAction.value
       }
       if(udfControlAction.name=="SourceField"){
        SourceField=udfControlAction.value
       }

      if(udfControlAction.name=="SourceValue"){
        SourceValue=udfControlAction.value
      }
      if(controlActions.children.length-1 == udfControlActionIndex){
        let obj ={
          "Action":Action,
          "SourceField":SourceField,
          "SourceValue":SourceValue
        }
        controlActionsArray.push(obj)
      }
          })
        }
        


      })
return controlActionsArray
    }
  }
  validateControl = (attributeKey, validityArray) =>{
    let statusCopy = Object.assign({}, this.state);
    if(this.state.controlInputs[attributeKey].length == 0 && validityArray.isRequired == "true"){
      statusCopy.controlValid[attributeKey] = "Not valid";
      this.setState(statusCopy);
    }else if(this.state.controlInputs[attributeKey].length>0 && validityArray.regExp !="" && !(new RegExp(validityArray.regExp).test(this.state.controlInputs[attributeKey]))){
      statusCopy.controlValid[attributeKey] = "Not valid";
      this.setState(statusCopy);
    } else{
      statusCopy.controlValid[attributeKey] =null;
      this.setState(statusCopy);
    }
  }
  /**
 * Function : changeStateAttributeValue
 * Description : Assigns user action  values to dynamic text fields 
 */
  changeStateAttributeValue = (event, attributeKey, validityArray,fieldId) => {
    let statusCopy = Object.assign({}, this.state);
    statusCopy.controlInputs[attributeKey] = event.nativeEvent.text;
    statusCopy.visibilityInputs[fieldId] =event.nativeEvent.text;
    this.setState(statusCopy);
this.validateControl(attributeKey, validityArray)
  }

  /**
 * Function : changeRadioButtonAttributeValue
 * Description : Assigns user action  values to dynamic text fields 
 */
  changeRadioButtonAttributeValue = (value, attributeKey,fieldId) => {
    let statusCopy = Object.assign({}, this.state);
    statusCopy.controlInputs[attributeKey] = value;
    //statusCopy.visibilityInputs[fieldId] =value;
    statusCopy.visibilityInputs[fieldId] = value
    this.setState(statusCopy);
  }

    /**
 * Function : changeCheckboxAttributeValue
 * Description : Assigns user action  values to dynamic text fields 
 */
changeCheckboxAttributeValue = (value, attributeKey,fieldId) => {
  let statusCopy = Object.assign({}, this.state);
  statusCopy.controlInputs[attributeKey] = value;
  statusCopy.visibilityInputs[fieldId] = (value==true)?"true":"false";
  //statusCopy.visibilityInputs[fieldId] =value;
  this.setState(statusCopy);
}
  /**
    * Function : createCheckBoxControl
    * Description : Creates Check box controls
    */
  createCheckBoxControl(keyIndex, controlItem) {
    var visibility = false
    var regex = ""
    var maxLength = 0
    var isRequired = false
    var contolArray = []
    var fieldId = ""
    var controlActionsArray =[]
    return controlItem.children.map((outerItem, outerItemIndex) => {
       contolArray.push(outerItem)

      if (controlItem.children.length - 1 == outerItemIndex) {
        var tempArray = contolArray.reverse()
        return tempArray.map((innerItem, innerItemIndex) => {
          if (innerItem.name == "FieldId") {
            fieldId = innerItem.value
          }
          if (innerItem.name == "Visible") {
            visibility = innerItem.value
          }
          if (innerItem.name == "Validator") {
            if (innerItem.value == "String") {
              regex = /^\d+$/
            } else {
              regex = /^\d+$/
            }
          }
          if (innerItem.name == "MaxLength") {
            maxLength = innerItem.value
          }
          if (innerItem.name == "RequiredField") {
            isRequired = innerItem.value
          }
          if(innerItem.name == "ControlActions"){
            return innerItem.children.map((controlActions,controlActionsIndex) => {
              if(controlActions.name=="UdfControlAction"){
                var Action="",SourceField="",SourceValue=""
                controlActions.children.map((udfControlAction,udfControlActionIndex)=>{
             
              if(udfControlAction.name=="Action"){
              Action=udfControlAction.value
             }
             if(udfControlAction.name=="SourceField"){
              SourceField=udfControlAction.value
             }
      
            if(udfControlAction.name=="SourceValue"){
              SourceValue=udfControlAction.value
            }
            if(controlActions.children.length-1 == udfControlActionIndex){
              let obj ={
                "Action":Action,
                "SourceField":SourceField,
                "SourceValue":SourceValue
              }
              controlActionsArray.push(obj)
            }
                })
              }
              
      
      
            })
          }
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
            var labelStyle = {
              color: 'black',
              fontSize: 10
            }
            var checkBoxStyle = {
              width: 18,
              height: 18
            }
            controlActionsArray.map((visibilityAction,visibilityActionIndex)=>{
              if(this.state.visibilityInputs[visibilityAction.SourceField] == visibilityAction.SourceValue){
                if(visibilityAction.Action == "Hide"){
                  visibility = "false"
                }else if(visibilityAction.Action == "Show"){
                  visibility = "true"
                }else if(visibilityAction.Action == "ShowAndRequiredField"){
                  visibility = "true"
                  isRequired = "true"
                }
              }
              })
            if (visibility == 'true') {
              //this.state.controlInputs[innerItem.value] = false
              return(
                <FormItem
                  isRequired={isRequired == "true"?true:false}
                >
                  <CheckboxComponent key={keyIndex} style={styles.checkBox}
                    label=""
                    labelStyle={labelStyle}
                    checkboxStyle={checkBoxStyle}
                    onChange={(checked) =>
                      this.changeCheckboxAttributeValue(checked,innerItem.value,fieldId)
                    }

                    numberOfLines={15}
                    style={styles.checkBoxLable}
                    value={innerItem.value}
                  />

                </FormItem>
              )
            }
          }
        })
      }
    })
  }

    /**
  * Function : createHTMLTable
  * Description : Creates HTML Table controls
  */
 createHTMLTable(keyIndex,controlItem){
  var visibility = false
  var regex = ""
  var maxLength = 0
  var isRequired = false
  var fieldId = ""
  var contolArray = []
  var controlActionsArray=[]
  return controlItem.children.map((outerItem, outerItemIndex) => {
    contolArray.push(outerItem)

    if (controlItem.children.length - 1 == outerItemIndex) {
      var tempArray = contolArray.reverse()
      return tempArray.map((innerItem, innerItemIndex) => {
        if (innerItem.name == "FieldId") {
          fieldId = innerItem.value
        }
        if (innerItem.name == "Visible") {
          visibility = innerItem.value
        }
        if (innerItem.name == "Validator") {
          if (innerItem.value == "String") {
            regex = /^\d+$/
          } else {
            regex = /^\d+$/
          }
        }
        if (innerItem.name == "MaxLength") {
          maxLength = innerItem.value
        }
        if (innerItem.name == "RequiredField") {
          isRequired = innerItem.value
        }
        if(innerItem.name == "ControlActions"){
          innerItem.children.map((controlActions,controlActionsIndex) => {
            if(controlActions.name=="UdfControlAction"){
              var Action="",SourceField="",SourceValue=""
              controlActions.children.map((udfControlAction,udfControlActionIndex)=>{
          
            if(udfControlAction.name=="Action"){
            Action=udfControlAction.value
           }
           if(udfControlAction.name=="SourceField"){
            SourceField=udfControlAction.value
           }
    
          if(udfControlAction.name=="SourceValue"){
            SourceValue=udfControlAction.value
          }
          if(controlActions.children.length-1 == udfControlActionIndex){
            let obj ={
              "Action":Action,
              "SourceField":SourceField,
              "SourceValue":SourceValue
            }
            controlActionsArray.push(obj)
          }
              })
            }
            


          })

        }
        //controlActionsArray = this.controlHideShowAction(innerItem)

        
  if (innerItem.name == "FieldHeader") {
  keyIndex = keyIndex + 1
  var y = innerItem.value
  y = new Entities().decode(y);

  controlActionsArray.map((visibilityAction,visibilityActionIndex)=>{
  if(this.state.visibilityInputs[visibilityAction.SourceField] == visibilityAction.SourceValue){
    if(visibilityAction.Action == "Hide"){
      visibility = "false"
    }else if(visibilityAction.Action == "Show"){
      visibility = "true"
    }else if(visibilityAction.Action == "ShowAndRequiredField"){
      visibility = "true"
      isRequired = "true"
    }
  }
  })
  
  if(visibility == "true"){
  return(
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
  }
      
    })
  }
})
 }
  /**
    * Function : createRadioButtonControl
    * Description : Creates Radio Button controls
    */
  createRadioButtonControl(keyIndex, controlItem) {
    var visibility = false
    var regex = ""
    var maxLength = 0
    var isRequired = false
    var contolArray = []
    var text = ""
    var radioBtn = []
    var displayTxt = ""
    var displayLabel = ""
    var fieldId = ""
    var controlActionsArray=[]
    return controlItem.children.map((outerItem, outerItemIndex) => {
      contolArray.push(outerItem)

      if (controlItem.children.length - 1 == outerItemIndex) {
        var tempArray = contolArray.reverse()

        return tempArray.map((innerItem, innerItemIndex) => {
          if (innerItem.name == "FieldId") {
            fieldId = innerItem.value
          }
          if (innerItem.name == "Visible") {

            visibility = innerItem.value
          }
          if (innerItem.name == "Validator") {
            if (innerItem.value == "String") {
              regex = /^\d+$/
            } else {
              regex = /^\d+$/
            }

          }
          if (innerItem.name == "MaxLength") {
           
            maxLength = innerItem.value
          }
          if (innerItem.name == "RequiredField") {
            isRequired = innerItem.value
          }
          if(innerItem.name == "ControlActions"){
            innerItem.children.map((controlActions,controlActionsIndex) => {
              if(controlActions.name=="UdfControlAction"){
                var Action="",SourceField="",SourceValue=""
                controlActions.children.map((udfControlAction,udfControlActionIndex)=>{
             
              if(udfControlAction.name=="Action"){
              Action=udfControlAction.value
             }
             if(udfControlAction.name=="SourceField"){
              SourceField=udfControlAction.value
             }
      
            if(udfControlAction.name=="SourceValue"){
              SourceValue=udfControlAction.value
            }
            if(controlActions.children.length-1 == udfControlActionIndex){
              let obj ={
                "Action":Action,
                "SourceField":SourceField,
                "SourceValue":SourceValue
              }
              controlActionsArray.push(obj)
            }
                })
              }
              
  
  
            })
  
          }
          if (innerItem.name == "FieldHeader") {
            displayLabel = innerItem.value
            text = innerItem.value //<Text style={styles.Header }>{innerItem.value}</Text>
            text = new Entities().decode(text);
            text = text.replace("<p>", "").replace("</p>", "").replace("<d>", "").replace("<dfn>", "").replace("</dfn>", "").replace("<em>", "").replace("</em>", "").replace("</d>", "").replace("&nbsp;", "")

           // this.state.controlInputs[innerItem.value] = ""

            displayTxt = '<p style="fontSize:10;margin-bottom:5">' + text + '</p>'

          }
          if (innerItem.name == "UserDefinedList") {
            return innerItem.children.map((radioBtnOption, radioBtnOptionIndex) => {

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
          if(tempArray.length-1 == innerItemIndex){
            controlActionsArray.map((visibilityAction,visibilityActionIndex)=>{
              if(this.state.visibilityInputs[visibilityAction.SourceField] == visibilityAction.SourceValue){
                if(visibilityAction.Action == "Hide"){
                  visibility = "false"
                }else if(visibilityAction.Action == "Show"){
                  visibility = "true"
                }else if(visibilityAction.Action == "ShowAndRequiredField"){
                  visibility = "true"
                  isRequired = "true"
                }
              }
              })
            if (visibility == "true") {
              keyIndex = keyIndex + 1
      
              return(
                <FormItem
                  isRequired={true}
                  regExp={regex}
                >
                  <View key={keyIndex}>
                    <HTML html={displayTxt} imagesMaxWidth={Dimensions.get('window').width} decodeEntities={true} debug={true}
                    />
      
                    <RadioGroup
                      size={24}
                      thickness={2}
                      color='#153875'
                      onSelect={(index, value) => {
                        this.changeRadioButtonAttributeValue(value,displayLabel,fieldId)
                        
                      }}
                    >
                      {radioBtn}
                    </RadioGroup>
                  </View>
                </FormItem>
              )
            }
          }
        })
      }
     
    })
  }

  getDisplayLabel(text,isRequired){

    return  labelVal = isRequired == "true"?text+"*":text

  }

  /**
 * Function : createTextFieldControl
 * Description : Creates Text Field  controls
 */
  createTextFieldControl(keyIndex, controlItem) {
    var visibility = false
    var regex = ""
    var maxLength = 0
    var isRequired = false
    var contolArray = []
    var stringVal = false
    var validityArray = {}
    var fieldId = ""
    var controlActionsArray = [];
    // return (
    //   <Text>"archana"</Text>
    // )
    return controlItem.children.map((outerItem, outerItemIndex) => {
      contolArray.push(outerItem)

      if (controlItem.children.length - 1 == outerItemIndex) {
        var tempArray = contolArray.reverse()
        return tempArray.map((innerItem, innerItemIndex) => {
          if (innerItem.name == "FieldId") {
            fieldId = innerItem.value
          }
          if (innerItem.name == "Visible") {
            visibility = innerItem.value
          }
          if (innerItem.name == "Validator") {
            if (innerItem.value == "String") {
              stringVal = true
              regex = ""
            } else {
              regex = /^\d+$/
              stringVal = false
            }
          }

          
          if (innerItem.name == "MaxLength") {
            maxLength =parseInt(innerItem.value) 
           // maxLength = innerItem.value 
          }
          if (innerItem.name == "RequiredField") {
            isRequired = innerItem.value
           
          }

          validityArray = {
            "maxLength": maxLength,
            "isRequired": isRequired,
            "stringVal": stringVal,
            "regex": regex,
            valid: true
          }
         
          if(innerItem.name == "ControlActions"){
            innerItem.children.map((controlActions,controlActionsIndex) => {
              if(controlActions.name=="UdfControlAction"){
                var Action="",SourceField="",SourceValue=""
                controlActions.children.map((udfControlAction,udfControlActionIndex)=>{
             
              if(udfControlAction.name=="Action"){
              Action=udfControlAction.value
             }
             if(udfControlAction.name=="SourceField"){
              SourceField=udfControlAction.value
             }
      
            if(udfControlAction.name=="SourceValue"){
              SourceValue=udfControlAction.value
            }
            if(controlActions.children.length-1 == udfControlActionIndex){
              let obj ={
                "Action":Action,
                "SourceField":SourceField,
                "SourceValue":SourceValue
              }
              controlActionsArray.push(obj)
            }
                })
              }
              
  
  
            })
  
          }
          if (innerItem.name == "FieldHeader") {
            keyIndex = keyIndex + 1
            var text = new AllHtmlEntities().decode(innerItem.value);
            text = text.replace("<d>", "").replace("</d>", "").replace("&amp;", "&").replace("&nbsp;", "").replace("&quot;", "'").replace("&#39;", "'")
           // this.state.controlInputs[text] = "";
            //this.state.controlValid[text] = null;
            this.state.validityRules[text] = validityArray
            controlActionsArray.map((visibilityAction,visibilityActionIndex)=>{
              if(this.state.visibilityInputs[visibilityAction.SourceField] == visibilityAction.SourceValue){
                if(visibilityAction.Action == "Hide"){
                  visibility = "false"
                }else if(visibilityAction.Action == "Show"){
                  visibility = "true"
                }else if(visibilityAction.Action == "ShowAndRequiredField"){
                  visibility = "true"
                  isRequired = "true"
                }
              }
              })
            if (visibility == "true") {
              return(
                <FormItem
                isRequired= {true}
                  regExp={regex}
                >
                  <LabelComponent style={styles.textBox} value={this.getDisplayLabel(text,isRequired)} />
                  <ComponentWithValue
                    style={{
                      height: 30,
                      borderWidth: 1,
                      marginBottom: 10,
                      paddingLeft: 5,
                      fontSize: 10
                    }}
                    value={this.state.controlInputs[text]}//.xmlJson[0].children[a].children[b].children[c].children[d].value}
                    placeholder= "Enter Text Here"
                    key={keyIndex}
                    maxLength={maxLength}
                    onChange={(event) =>
                      this.changeStateAttributeValue(event, text, validityArray,fieldId)} />
                     
                      {(
  <Text style={{color: "red"}}>{this.state.controlValid[text]}</Text>
)}
                </FormItem>
              )
            }
          }
        })
      }
    })
  }

  /**
  * Function : createDropdownControl
  * Description : Creates Dropdown Controls
  */
  createDropdownControl(keyIndex, controlItem) {
    var visibility = false
    var regex = ""
    var maxLength = 0
    var isRequired = false
    var contolArray = []
    var stateIndexVal = ""
    return controlItem.children.map((outerItem, outerItemIndex) => {
      var dropDowValues = []
      var obj = {}
      var text = ""
      var label = ""
      contolArray.push(outerItem)

      if (controlItem.children.length - 1 == outerItemIndex) {
        var tempArray = contolArray.reverse()
        return tempArray.map((innerItem, innerItemIndex) => {
          if (innerItem.name == "Visible") {
            visibility = innerItem.value
          }
          if (innerItem.name == "Validator") {
            if (innerItem.value == "String") {
              regex = /^\d+$/
            } else {
              regex = /^\d+$/
            }

          }
          if (innerItem.name == "MaxLength") {
            maxLength = innerItem.value
          }
          if (innerItem.name == "RequiredField") {
            isRequired = innerItem.value
          }
          if (innerItem.name == "FieldHeader") {
            var y = innerItem.value
            y = new Entities().decode(innerItem.value);
            y = y.replace("<d>", "").replace("</d>", "").replace("&amp;", "&").replace("&nbsp;", "").replace("&quot;", "'").replace("&#39;", "'")
            text = <Text>{y}</Text>
            label = y

          }
          stateIndexVal = label
          //this.state.controlInputs[stateIndexVal] = ""

          if (innerItem.name == "UserDefinedList") {
            return innerItem.children.map((dropdownItem, dropdownItemIndex) => {
              if (dropdownItem.name == "ListItem") {

                console.log("dropdownItem")
                console.log(dropdownItem.attributes.value)
                obj = {
                        value: dropdownItem.attributes.value,
                        name:dropdownItem.attributes.name
                      }
                      dropDowValues.push(obj)
                // return dropdownItem.children.map((udfControlAction, udfControlActionIndex)=> {

                //   if (udfControlAction.name == "SourceValue") {
                //     obj = {
                //       value: udfControlAction.value,
                //     }
                //     dropDowValues.push(obj)
                //   }

                // })
              }

            })

          }
       if(tempArray.length-1 == innerItemIndex){
          keyIndex = keyIndex + 1
       // if (visibility == "true") {
          return (
            <FormItem
            isRequired={isRequired == "true"?true:false}
              regExp={regex}
            >
              <DropdownComponent key={keyIndex} label={label} dropDowValues={dropDowValues} onChangeText={(val) => {
                this.state.controlInputs[stateIndexVal] = val

              }} />
            </FormItem>
          )
        //}
        }
        })
      
        
      }
    })
  }
  /**
  * Function : constructControls
  * Description : Creates Controls from JSON
  */
  constructControls(responseText) {
    var xml = new XMLParser().parseFromString(responseText);    // Assume xmlText contains the example XML
    this.state.xmlJson = []
    var controlsArray = []
    this.state.xmlJson.push(xml)
    var keyIndex = 0;
    // this.state.xmlJson[0].children.map((currentSection, index) => {
    //   currentSection.children.map((currentItem, itemIndex) => {
    //     if (currentItem.name == "Controls") {
    //       currentSection.children.map((currentControl, controlIndex) => {
    //         if (currentControl.name == "Controls") {
    //           currentControl.children.map((controlItem, controlItemIndex) => {
    //             if (controlItem.name == "Checkbox") {
    //              this.createCheckBoxControl(keyIndex, controlItem, controlsArray)
    //             } else if (controlItem.name == "RadioButton") {
    //              // this.createRadioButtonControl(keyIndex, controlItem, controlsArray)
    //             } else if (controlItem.name == "Textbox") {
    //               this.createTextFieldControl(keyIndex, controlItem, controlsArray)
    //             } else if (controlItem.name == "DropDownList") {
    //               this.createDropdownControl(keyIndex, controlItem, controlsArray)

    //             }
    //           })
    //         }
    //       })
    //     }
    //   })
    // })
    // this.state.controlsArray = controlsArray

  }

  submit = () => {
    //console.log(this.refs.form)
    console.log(JSON.stringify(this.state.validityRules))

    var validationCheckRules =[]
    validationCheckRules = this.state.validityRules
    for (var key in validationCheckRules) {
     var  rules = validationCheckRules[key]
     console.log(JSON.stringify(rules))
     console.log(this.state.controlInputs[key])
 
     //if(this.state.controlInputs[key].length > 0 && rules["isRequired"] == "true"){
      let statusCopy = Object.assign({}, this.state);
        statusCopy.controlValid[key] = "Not valid";
        this.setState(statusCopy);
     //}
    }

    var Array = this.state.controlInputs
    var nonNullArray = []
    //console.log(JSON.stringify(this.state.controlInputs))
    this.state.values = []
    for (var key in Array) {
     
      if (Array[key] != "") {

        var text = key //<Text style={styles.Header }>{innerItem.value}</Text>
        text = new Entities().decode(text);
        text = text.replace("<p>", "").replace("</p>", "").replace("<d>", "").replace("<dfn>", "").replace("</dfn>", "").replace("<em>", "").replace("</em>", "").replace("</d>", "").replace("&nbsp;", "")
        obj = {
          "Question": text,
          "Answer": Array[key]

        }
        nonNullArray.push(obj)
      }
      this.setState({
        values: JSON.stringify(nonNullArray)
      })


    }
    this.dialogComponent.show();

  }

  customValidation() {
    return true;
  }
  validate(){
    var Array = this.state.controlInputs
    for (var key in Array) {

    if(Array[key] != "" && Array[key].length<2){
      let statusCopy = Object.assign({}, this.state);
        statusCopy.controlValid[key+"Error"] = "Not valid";
        this.setState(statusCopy);
    }else{
      let statusCopy = Object.assign({}, this.state);
      statusCopy.controlValid[key+"Error"] =null;
      this.setState(statusCopy);
    }
  }
  }
  render() {
    var keyIndex = 0;
    content = this.state.xmlJson[0].children.map((currentSection, index) => {
      return currentSection.children.map((currentItem, itemIndex) => {

        if (currentItem.name == "Controls") {
          return currentSection.children.map((currentControl, controlIndex) => {
            if (currentControl.name == "Controls") {
              return currentControl.children.map((controlItem, controlItemIndex) => {
                if (controlItem.name == "Checkbox") {
                  return this.createCheckBoxControl(keyIndex,controlItem)
                } else if (controlItem.name == "Label") {
                 return  this.createHTMLTable(keyIndex,controlItem)
                } else if (controlItem.name == "RadioButton") {
                  return this.createRadioButtonControl(keyIndex,controlItem)
                } else if (controlItem.name == "Textbox") {
                  return this.createTextFieldControl(keyIndex,controlItem)
                } else if (controlItem.name == "DropDownList") {
                  return this.createDropdownControl(keyIndex,controlItem)
                } else if (controlItem.name == "AttachmentControl") {
                 // this.createAttachmentControl(keyIndex,controlItem)
                }
              })
            }
          })
        }
      })
    })
  // return (
  //   <View>
  //      {contents}
  //   </View>
  // );
    return (
      <Container>
        <Header style={{ backgroundColor: "#153875", }}>
          <Left>
            <Icon name="ios-menu" style={{ color: 'white' }} onPress={() =>
              this.props.navigation.openDrawer()} />
          </Left>
          <Content contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text style={{ color: 'white', textAlign: 'center' }}> Style Five  </Text>
          </Content>
          <Right>
            <Image style={{ width: 30, height: 30, }}
              source={require('./images/Save-White.png')} />
          </Right>
        </Header>
        <View style={styles.pageStyle} >

          <ScrollView >
          
          <View >
            {
              this.state.displayLoader? <ActivityIndicator size="large" color="#0000ff" />:null
            }
       
       
      </View>
            <View style={styles.container}>
              <Form
                ref="form"
                shouldValidate={true}
              >
                {content}
              </Form>

            </View>
          </ScrollView>
          <DialogComponent
            ref={(dialogComponent) => { this.dialogComponent = dialogComponent; }}
          >
            <View>
              <Text>{this.state.values}</Text>
            </View>
          </DialogComponent>
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
                    this.submit()

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

AppRegistry.registerComponent('DemoPageStyleFive', () => DemoPageStyleFive);
import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Image, Alert,ActivityIndicator, ScrollView, TextInput, StyleSheet, Dimensions,AsyncStorage } from 'react-native';
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
import TextFieldComponent from './TextFieldComponent'
import LabelComponent from './LabelComponent'
import CheckboxComponent from './CheckboxComponent'
import DropdownComponent from './DropdownComponent'
import { DialogComponent } from 'react-native-dialog-component';
var jsonData = require('./Constants/xmlData.json');
import { WebView } from 'react-native';
var regtext;
var responseText;
let FileValues = [{
  value: 'xmlData',
}, {
  value: 'xmlDataStyleFive',
}, {
  value: 'xmlWithFiveControls',
},{
  value: 'xmlWithTenControls',
},
{
  value: 'Interdependency',
},{
  value: 'noTableData',
},
{
  value: 'originalxmlData',
},
{
  value: 'sixControlData',
}
];
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
      displayLoader:true,
      validForm:false
 
    }
     responseText = jsonData[0].data
     this.constructControls(responseText)
    
  }

   /**
 * Function : componentWillMount
 * Description : react native component life cycle event
 */
    componentWillMount(){
      setTimeout(() => {
        this.setState({displayLoader:false})
      }, 3000);
      this.displayData()
    }

     /**
 * Function : componentWillUnmount
 * Description : react native component life cycle event
 */
    componentWillUnmount(){
      console.log('unmounted Component');
      console.log(Object.keys(this.state.controlInputs).length === 0)
      if( !(Object.keys(this.state.controlInputs).length === 0)){
     
      AsyncStorage.setItem('savedData',JSON.stringify(this.state.controlInputs));
      AsyncStorage.setItem('visibilityData',JSON.stringify(this.state.visibilityInputs));
      }
    }


      /**
     * Function : changeFileValue
     * Description : dynamically requires xml File
     */
      changeFileValue=(val) => {
        if(val == "xmlData"){
         jsonData =require('./Constants/xmlData.json');
        }else if(val == "xmlDataStyleFive"){
          jsonData =require('./Constants/xmlDataStyleFive.json');
        }else{
          jsonData =require('./Constants/noTableData.json');
        }
      responseText = jsonData[0].data
      var xml = new XMLParser().parseFromString(responseText);
      var tempArray=[];
      tempArray.push(xml)
      let statusCopy = Object.assign({}, this.state);
      statusCopy.xmlJson = tempArray;
      this.setState(statusCopy);
      }

    /**
     * Function : controlHideShowAction
     * Description : creates Hide and Show object based on KEys and values form XML Data
     */
      controlHideShowAction=(innerItem)=>{
        var arrayObj =[]
        if(innerItem.name == "ControlActions" && innerItem.children.length>0){
            for(index=0;index<innerItem.children.length;index++){
                var controlActions = innerItem.children[index]
                if(controlActions.name=="UdfControlAction"){
                 var Action="",SourceField="",SourceValue=""
                 for(subIndex=0;subIndex<controlActions.children.length;subIndex++){
                   var udfControlAction = controlActions.children[subIndex]
                   if(udfControlAction.name=="Action"){
                     Action=udfControlAction.value
                    }
                    if(udfControlAction.name=="SourceField"){
                     SourceField=udfControlAction.value
                    }
             
                   if(udfControlAction.name=="SourceValue"){
                     SourceValue=udfControlAction.value
                   }
                   if(controlActions.children.length-1 == subIndex){
                     let obj ={
                       "Action":Action,
                       "SourceField":SourceField,
                       "SourceValue":SourceValue
                     }
                     arrayObj.push(obj)
                   }
                 }
                 if(innerItem.children.length-1 == index ){
                   return arrayObj
                   }
              }
           }
      }else{
        return arrayObj
      }
      }


  validateControl = (attributeKey, validityArray) =>{
    let statusCopy = Object.assign({}, this.state);
    if (this.state.controlInputs[attributeKey].length == 0 && validityArray.isRequired == "true") {
      statusCopy.controlValid[attributeKey] = validityArray["RequiredFieldErrorMessage"];
      this.setState(statusCopy);
    }  else if (this.state.controlInputs[attributeKey].length > 0 && validityArray.regExp != "" && !regtext.test(this.state.controlInputs[attributeKey])) {
      statusCopy.controlValid[attributeKey] =validityArray["ValidatorErrorMessage"]
      this.setState(statusCopy);
    }
    else {
      statusCopy.controlValid[attributeKey] = null;
      this.setState(statusCopy);
    }
  }


  /**
 * Function : displayData
 * Description : gets data from local storage
 */
displayData=async ()=>{
  try {
  var value = await AsyncStorage.getItem('savedData');
  var visibilityData =await AsyncStorage.getItem('visibilityData');
  let parsedVisibilityData= JSON.parse(visibilityData)
  let parsed = JSON.parse(value);
  console.log('parsedVisibilityData',parsed)
  if(parsed){
  Alert.alert("Do you want to Replace previous data",'',
  [
  {text: 'Cancel', onPress: () =>AsyncStorage.removeItem('saveData')},
  {text: 'OK', onPress: () =>{this.setState({
  controlInputs:parsed
  })
  this.setState({
    visibilityInputs:parsedVisibilityData
    })
  }
},
  ]
  )
  }
  }
  catch(error){
  Alert.alert('plzzz',error)
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
  changeRadioButtonAttributeValue = (selectedRadioVal) => {
    let statusCopy = Object.assign({}, this.state);
    console.log("changeRadioButtonAttributeValue Krithi",JSON.stringify(selectedRadioVal))
    statusCopy.controlInputs[selectedRadioVal.displayLabel] = selectedRadioVal.value;
    statusCopy.controlInputs[selectedRadioVal.displayLabel+"index"] = selectedRadioVal.index;
    statusCopy.visibilityInputs[selectedRadioVal.fieldId] = selectedRadioVal.value
    this.setState(statusCopy);
    this.validateControl(selectedRadioVal.displayLabel, selectedRadioVal.validityArray)
  }

    /**
 * Function : changeCheckboxAttributeValue
 * Description : Assigns user action  values to dynamic text fields 
 */
changeCheckboxAttributeValue = (value, attributeKey,fieldId,validityArray) => {
  let statusCopy = Object.assign({}, this.state);
  console.log("changeRadioButtonAttributeValue",value)
  statusCopy.controlInputs[attributeKey] = value;
  statusCopy.visibilityInputs[fieldId] = (value==true)?"true":"false";
  this.setState(statusCopy);
  this.validateControl(attributeKey, validityArray)
}

 /**
 * Function : changeRadioButtonAttributeValue
 * Description : Assigns user action  values to dynamic text fields 
 */
changeDropDownAttributeValue = (value, attributeKey,fieldId,data,validityArray) => {
  var name =""
  for(var i =0;i<data.length-1;i++){
    if(value ==data[i].value ){
      name =data[i].name
    }
  }
  let statusCopy = Object.assign({}, this.state);
  statusCopy.controlInputs[attributeKey] = value;
  //statusCopy.visibilityInputs[fieldId] =value;
  statusCopy.visibilityInputs[fieldId] = name
  this.setState(statusCopy);
  this.validateControl(attributeKey, validityArray)
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
    var stringVal = false
    var keyboardType = ""
    var ValidatorErrorMessage
    var RequiredFieldErrorMessage
    var Validator = ""
    var validityArray = {}
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
          
          if (innerItem.name == "MaxLength") {
            maxLength =parseInt(innerItem.value) 
          }
          if (innerItem.name == "ValidatorErrorMessage") {
            ValidatorErrorMessage = ""
          }
          if (innerItem.name == "RequiredField") {
            isRequired = innerItem.value
          }
          if (innerItem.name == "RequiredFieldErrorMessage") {
            RequiredFieldErrorMessage = innerItem.value
          }
          if (innerItem.name == "Validator") {
            Validator = innerItem.value
          }
          if (innerItem.name == "Validator") {
            if (innerItem.value == "String") {
              regex =""
            } else {
              regex = ""
            }

          }

          validityArray = {
            "maxLength": maxLength,
            "isRequired": isRequired,
            "stringVal": stringVal,
            "ValidatorErrorMessage" : ValidatorErrorMessage,
            "RequiredFieldErrorMessage":RequiredFieldErrorMessage,
            "regex": regex,
            valid: true
          }

          if(innerItem.name == "ControlActions"){
            controlActionsArray =this.controlHideShowAction(innerItem)
          } 

          if (innerItem.name == "FieldHeader") {
            keyIndex = keyIndex + 1
            controlActionsArray.length>0 && controlActionsArray.map((visibilityAction,visibilityActionIndex)=>{
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
              // this.state.controlInputs[innerItem.value] = false
              console.log("cheeked",this.state.controlInputs[innerItem.value])
             
             // console.log(this.state.controlInputs[innerItem.value] === true)
              this.state.validityRules[innerItem.value] = validityArray
              return(
                <FormItem
                  isRequired={isRequired == "true"?true:false}
                >
              {(
                <Text style={styles.error}>{this.state.controlValid[innerItem.value]}</Text>
              )}
                  <CheckboxComponent key={keyIndex} style={styles.checkBox}
                    label=""
                    labelStyle={styles.labelStyle}
                    checkboxStyle={styles.checkBoxStyle}
                    checked={this.state.controlInputs[innerItem.value]}
                    onChange={(checked) =>
                       this.changeCheckboxAttributeValue(this.state.controlInputs[innerItem.value] == undefined?true:(checked?false:true),innerItem.value,fieldId,validityArray)
                    }
                    numberOfLines={15}
                    style={styles.checkBoxLable}
                    value={this.getDisplayLabel(innerItem.value,isRequired)}
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
          controlActionsArray =this.controlHideShowAction(innerItem)
        }
        
        if (innerItem.name == "FieldHeader") {
        keyIndex = keyIndex + 1
        var y = innerItem.value
        y = new Entities().decode(y);

        console.log("table,",controlActionsArray)
        controlActionsArray.length>0 && controlActionsArray.map((visibilityAction,visibilityActionIndex)=>{
      console.log("it is table view Display action",this.state.visibilityInputs[visibilityAction.SourceField])
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
            style={styles.webviewStyle}
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
    var stringVal = false
    var keyboardType = ""
    var ValidatorErrorMessage
    var RequiredFieldErrorMessage
    var Validator = ""
    var validityArray = {}
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
              regtext = /^[a-zA-Z]+$/
            } else {
              regtext = /^\d+$/
              stringVal = false
            }
          }
          
          if (innerItem.name == "MaxLength") {
            maxLength =parseInt(innerItem.value) 
          }
          if (innerItem.name == "ValidatorErrorMessage") {
            ValidatorErrorMessage = ""
          }
          if (innerItem.name == "RequiredField") {
            isRequired = innerItem.value
          }
          if (innerItem.name == "RequiredFieldErrorMessage") {
            RequiredFieldErrorMessage = innerItem.value
          }
          if (innerItem.name == "Validator") {
            Validator = innerItem.value
          }
          if (innerItem.name == "Validator") {
            if (innerItem.value == "String") {
              regex =""
            } else {
              regex = ""
            }

          }

          validityArray = {
            "maxLength": maxLength,
            "isRequired": isRequired,
            "stringVal": stringVal,
            "ValidatorErrorMessage" : ValidatorErrorMessage,
            "RequiredFieldErrorMessage":RequiredFieldErrorMessage,
            "regex": regex,
            valid: true
          }

          if(innerItem.name == "ControlActions"){
              controlActionsArray =this.controlHideShowAction(innerItem)
          }
          if (innerItem.name == "FieldHeader") {
            displayLabel = innerItem.value
            text = innerItem.value //<Text style={styles.Header }>{innerItem.value}</Text>
            text = new Entities().decode(text);
            text = text.replace("<p>", "").replace("</p>", "").replace("<d>", "").replace("<dfn>", "").replace("</dfn>", "").replace("<em>", "").replace("</em>", "").replace("</d>", "").replace("&nbsp;", "")

           // this.state.controlInputs[innerItem.value] = ""
          
           this.state.validityRules[displayLabel] = validityArray
            displayTxt = '<p style="fontSize:10;margin-bottom:5">' + this.getDisplayLabel(text,isRequired) + '</p>'

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
            console.log("controlActionsArray hide",controlActionsArray)
            controlActionsArray.length>0 && controlActionsArray.map((visibilityAction,visibilityActionIndex)=>{
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
              console.log("index of radio grp")
              console.log(this.state.controlInputs[displayLabel+"index"])
              keyIndex = keyIndex + 1
      
              return(
                <FormItem
                  isRequired={true}
                  regExp={regex}
                >
                {(
               <Text style={styles.error}>{this.state.controlValid[displayLabel]}</Text>
                )}
                  <View key={keyIndex}>
                    <HTML html={displayTxt} imagesMaxWidth={Dimensions.get('window').width} decodeEntities={true} debug={true}
                    />
                    <RadioGroup
                      size={24}
                      thickness={2}
                      color='#153875'
                      selectedIndex={this.state.controlInputs[displayLabel+"index"]}
                      onSelect={(index, value) => {
                        let obj ={
                          "index":index,
                          "value":value,
                          "displayLabel":displayLabel,
                          "fieldId":fieldId,
                          "validityArray":validityArray
                        }
                        this.changeRadioButtonAttributeValue(obj)
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
    var keyboardType = ""
    var ValidatorErrorMessage
    var RequiredFieldErrorMessage
    var Validator = ""
    var validityArray = {}
    var fieldId = ""
    var controlActionsArray = [];
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
              regtext = /^[a-zA-Z]+$/
            } else {
              regtext = /^\d+$/
              stringVal = false
            }
          }

          
          if (innerItem.name == "MaxLength") {
            maxLength =parseInt(innerItem.value) 
          }
          if (innerItem.name == "ValidatorErrorMessage") {
            ValidatorErrorMessage = innerItem.value
          }
          if (innerItem.name == "RequiredField") {
            isRequired = innerItem.value
          }
          if (innerItem.name == "RequiredFieldErrorMessage") {
            RequiredFieldErrorMessage = innerItem.value
          }

          if (innerItem.name == "Validator") {
            Validator = innerItem.value
          }

          if (Validator == "String") {
            keyboardType = 'default'
          }

          else if (Validator == "Integer") {
            keyboardType = 'numeric'
          }
          validityArray = {
            "maxLength": maxLength,
            "isRequired": isRequired,
            "stringVal": stringVal,
            "ValidatorErrorMessage" : ValidatorErrorMessage,
            "RequiredFieldErrorMessage":RequiredFieldErrorMessage,
            "regex": regex,
            valid: true
          }
         
          if(innerItem.name == "ControlActions"){
            controlActionsArray =this.controlHideShowAction(innerItem)
          }

          if (innerItem.name == "FieldHeader") {
            keyIndex = keyIndex + 1
            var text = new AllHtmlEntities().decode(innerItem.value);
            text = text.replace("<d>", "").replace("</d>", "").replace("&amp;", "&").replace("&nbsp;", "").replace("&quot;", "'").replace("&#39;", "'")
            this.state.validityRules[text] = validityArray
            controlActionsArray.length>0 && controlActionsArray.map((visibilityAction,visibilityActionIndex)=>{
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
                  <TextFieldComponent
                    style={styles.textFieldStyle}
                   
                    //style={(this.state.controlValid[text] == null)?styles.validBorderColor:styles.errorBorderColor
                    //}
                    value={this.state.controlInputs[text]}//.xmlJson[0].children[a].children[b].children[c].children[d].value}
                    placeholder= "Enter Text Here"
                    key={keyIndex}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    onChange={(event) =>
                      this.changeStateAttributeValue(event, text, validityArray,fieldId)} />
                {(
                  <Text style={styles.error}>{this.state.controlValid[text]}</Text>
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
    var controlActionsArray = [];
    var stringVal = false
    var keyboardType = ""
    var ValidatorErrorMessage
    var RequiredFieldErrorMessage
    var Validator = ""
    var validityArray = {}
    return controlItem.children.map((outerItem, outerItemIndex) => {
      var dropDowValues = []
      var obj = {}
      var text = ""
      var label = ""
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
              regtext = /^[a-zA-Z]+$/
            } else {
              regtext = /^\d+$/
              stringVal = false
            }
          }
          
          if (innerItem.name == "MaxLength") {
            maxLength =parseInt(innerItem.value) 
          }
          if (innerItem.name == "ValidatorErrorMessage") {
            ValidatorErrorMessage = ""
          }
          if (innerItem.name == "RequiredField") {
            isRequired = innerItem.value
          }
          if (innerItem.name == "RequiredFieldErrorMessage") {
            RequiredFieldErrorMessage = innerItem.value
          }
          if (innerItem.name == "Validator") {
            Validator = innerItem.value
          }
          if (innerItem.name == "Validator") {
            if (innerItem.value == "String") {
              regex =""
            } else {
              regex = ""
            }

          }

          validityArray = {
            "maxLength": maxLength,
            "isRequired": isRequired,
            "stringVal": stringVal,
            "ValidatorErrorMessage" : ValidatorErrorMessage,
            "RequiredFieldErrorMessage":RequiredFieldErrorMessage,
            "regex": regex,
            valid: true
          }
          
          if(innerItem.name == "ControlActions"){
            controlActionsArray =this.controlHideShowAction(innerItem)
          }

          if (innerItem.name == "FieldHeader") {
            var y = innerItem.value
            y = new Entities().decode(innerItem.value);
            y = y.replace("<d>", "").replace("</d>", "").replace("&amp;", "&").replace("&nbsp;", "").replace("&quot;", "'").replace("&#39;", "'")
            text = <Text>{y}</Text>
            label = y
          }
          stateIndexVal = label
          this.state.validityRules[label] = validityArray
          if (innerItem.name == "UserDefinedList") {
            return innerItem.children.map((dropdownItem, dropdownItemIndex) => {
              if (dropdownItem.name == "ListItem") {
                obj = {
                        value: dropdownItem.attributes.value,
                        name:dropdownItem.attributes.name
                      }
                      dropDowValues.push(obj)
              }
            })
          }
       if(tempArray.length-1 == innerItemIndex){
          keyIndex = keyIndex + 1
          controlActionsArray.length>0 && controlActionsArray.map((visibilityAction,visibilityActionIndex)=>{
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
          return (
            <FormItem
            isRequired={isRequired == "true"?true:false}
              regExp={regex}
            >
              <DropdownComponent key={keyIndex} 
              label={this.getDisplayLabel(label,isRequired)} 
              dropDowValues={dropDowValues} 
              value={this.state.controlInputs[label]}
              onChangeText={(val,index,data) => {
                this.changeDropDownAttributeValue(val,label,fieldId,data,validityArray)

              }} />
              {(
              <Text style={styles.error}>{this.state.controlValid[label]}</Text>
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
  * Function : constructControls
  * Description : Creates Controls from JSON
  */
  constructControls(responseText) {
    var xml = new XMLParser().parseFromString(responseText);    // Assume xmlText contains the example XML
    this.state.xmlJson = []
    this.state.xmlJson.push(xml)
  }

  submit = () => {
    
var errorMessage=[]
    var validationCheckRules =[]
    validationCheckRules = this.state.validityRules
    console.log(validationCheckRules)
    var Array = this.state.controlInputs
    for (var key in validationCheckRules) {
      console.log("key")
      console.log(key)
     var  rules = validationCheckRules[key]
     console.log("rules")
      console.log(rules)
      console.log(Array[key])

    if(rules["isRequired"] == "true" && (Array[key] == undefined||Array[key] == 'undefined' || Array[key] == 'null' || Array[key] ==null || Array[key] =="")){
     
     console.log("checking validity")
      let statusCopy = Object.assign({}, this.state);
        statusCopy.controlValid[key] = rules["RequiredFieldErrorMessage"];
        errorMessage.push(statusCopy.controlValid[key])
        console.log("errorMessage",errorMessage)
        this.setState(statusCopy);
     }else{
      let statusCopy = Object.assign({}, this.state);
        statusCopy.controlValid[key] = null;
        this.setState(statusCopy); 
     }

    
    }
    if(errorMessage.length>0){
      let statusCopy = Object.assign({}, this.state);
      statusCopy.validForm = false;
      this.setState(statusCopy);
    }else{
      let statusCopy = Object.assign({}, this.state);
      statusCopy.validForm = true;
      this.setState(statusCopy);
    }
   

    
    var nonNullArray = []
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
    if(this.state.validForm == true){
    this.dialogComponent.show();
    }

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
 
    return (
      <Container>
        <Header style={{ backgroundColor: "#153875", }}>
          <Left>
            <Icon name="ios-menu" style={{ color: 'white' }} onPress={() =>
              this.props.navigation.openDrawer()} />
          </Left>
          <Content contentContainerStyle={styles.contentStyle}>
            <Text style={{ color: 'white', textAlign: 'center' }}> Style Five  </Text>
          </Content>
          <Right>
            <Image style={{ width: 30, height: 30, }}
              source={require('./images/Save-White.png')} />
          </Right>
        </Header>
        <View style={styles.pageStyle} >
        <DropdownComponent label="choose xml file/Data" dropDowValues={FileValues} onChangeText={(val) => {
        this.changeFileValue(val)
       }} />
       <View style={{ flex: 1, justifyContent: 'center' }}>
         {
        this.state.displayLoader ? <ActivityIndicator size="large" color="#0000ff" /> : null
        }
        {
        !this.state.displayLoader ?
        <ScrollView >
        <View style={styles.container}>
        <Form
        ref="form"
        shouldValidate={true}
        >
        {content}
        </Form>
        </View> 
        </ScrollView>: null
        }
        <DialogComponent
        ref={(dialogComponent) => { this.dialogComponent = dialogComponent; }}
        >
        <View>
        <Text>{this.state.values}</Text>
        </View>
        </DialogComponent>
        </View>
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
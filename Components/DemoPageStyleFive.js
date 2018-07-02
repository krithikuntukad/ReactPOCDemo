
import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Image, Alert, ScrollView, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Column as Col, Row } from 'react-native-flexbox-grid';
import CheckBox from 'react-native-checkbox';
//import { CheckBox } from 'react-native-elements';
//import RadioButton from 'radio-button-react-native';
import { Icon, Header, Content, Left, Right } from 'native-base';

import { Dropdown } from 'react-native-material-dropdown';

import { WebView } from 'react-native';

var XMLParser = require('react-xml-parser');

import HTML from 'react-native-render-html';

import styles from './Styles/styleFive';
import { Container } from 'native-base';

const Entities = require('html-entities').AllHtmlEntities;
const AllHtmlEntities = require('html-entities').AllHtmlEntities;
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import { Form, FormItem } from 'react-native-form-validation';


//import TextInputField from './TextFieldComponent'

//import Form from 'react-native-form'

import ComponentWithValue from './TextFieldComponent2'
import LabelComponent from './LabelComponent'
import CheckboxComponent from './CheckboxComponent'
import PickerComponent from './PickerComponent';
import DropdownComponent from './DropdownComponent'
import RadioButtonComponent from './RadioButtonComponent';
//import RadioGroup from 'react-native-radio-group'

import { DialogComponent }from 'react-native-dialog-component';
var jsonData = require('./Constants/xmlData.json');
export default class DemoPageStyleFive extends Component {

  constructor(props) {
    super(props);
    this.state = {
      doc: [],
      controlsArray: [],
      checked: false,
      value: 0,
      text: '',
      htmlContent: '',
      radioBtnOptions:[],
      textInput1:'1',
      textInput2:'2',
      textInput3:'3',
      controlInputs:{},
      controlRadioButtons:[],
      values:[],
      
      controlDropdown:[],
    }
    var xmlJson = []
    var responseText = jsonData[0].data
   // this.handlePress = this.handlePress.bind(this);

    this.constructControls(responseText)


  }
  checkBoxClicked=()=>{
    console.log("Event here",checked)
   this.setState({checked: !this.state.checked})
  }
  handleOnPress(radioBtnOption,indexVal){
  this.state.radioBtnOptions[indexVal] = 1
}
textInputChange(event){
    console.log("event.target.value",event.target.value)
    console.log(event)
    console.log("event.target.value",event.nativeEvent.text)
  }
  changeStateAttributeValue = (event,attributeKey,validityArray)=>{
    // var newState = this.state;
    // console.log("newStatep",event.nativeEvent.text)
    // var stateBeingChanged = this.state[stateName];
    // console.log("stateBeingChanged",stateBeingChanged)
    // stateBeingChanged[attributeKey] = event.nativeEvent.text;
    // console.log("newStateq",stateBeingChanged[attributeKey])
    // newState[stateName] = stateBeingChanged;
    // console.log("newStater",newState[stateName])
    console.log("attributeKey",attributeKey)
console.log(this.state.controlInputs)
//this.state.controlInputs[attributeKey+"ValidityChecker"] = validityArray
console.log(JSON.stringify(validityArray))
  if((event.nativeEvent.text.length != validityArray["maxLength"])|| 
  (event.nativeEvent.text != "" && validityArray["isRequired"] == "true") )
  {
    validityArray["valid"] = false
    //this.state.controlInputs[attributeKey+"ValidityChecker"] = validityArray
  }else{
    validityArray["valid"] = true
   // this.state.controlInputs[attributeKey+"ValidityChecker"] = validityArray
  }

  console.log(JSON.stringify(validityArray))
    this.state.controlInputs[attributeKey] = event.nativeEvent.text;
    
    console.log(this.state.controlInputs[[attributeKey]])
    console.log(JSON.stringify(this.state.controlInputs))
   // this.setState(newState); 
  }
  
  
  constructControls(responseText) {

    var xml = new XMLParser().parseFromString(responseText);    // Assume xmlText contains the example XML
   

    xmlJson=[]
    var controlsArray = []
    xmlJson.push(xml)
    var keyIndex = 0;
    var radioVal = 0

    //console.log("xmlJson")
   // console.log(JSON.stringify(xmlJson))
    for(var a =0; a< xmlJson[0].children.length;a++){
      console.log("a",a)
     
      for(var b =0; b< xmlJson[0].children[a].children.length;b++){
        
        if(xmlJson[0].children[a].children[b].name == "Controls"){
         // console.log("b",b)
          for(var c =0; c< xmlJson[0].children[a].children[b].children.length;c++){
         //
         if (xmlJson[0].children[a].children[b].children[c].name == "Checkbox") {
          var visibility = false
          var regex= ""
          var maxLength = 0
          var isRequired = false
          var contolArray =[] 
          for(var d =0; d< xmlJson[0].children[a].children[b].children[c].children.length;d++){
          
            contolArray.push(xmlJson[0].children[a].children[b].children[c].children[d])
      
         if( xmlJson[0].children[a].children[b].children[c].children.length-1 == d){
         
           var tempArray = contolArray.reverse()
           tempArray.map((innerItem, innerItemIndex) =>{
            if(innerItem.name == "Visible"){
                   
              visibility = innerItem.value
           }
           if(innerItem.name == "Validator"){
             if(innerItem.value == "String"){
              regex = /^\d+$/
             }else{
              regex = /^\d+$/
             }
            
           }
           if(innerItem.name == "MaxLength"){
            maxLength = innerItem.value
           }
           if(innerItem.name =="RequiredField"){
            isRequired = innerItem.value
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
                     var  checkBoxStyle = {
                        width: 18,
                        height: 18
                      }
                      if(visibility == 'true'){
                        //console.log(regex)
                        //console.log(this.state.xmlJson[0])
                            this.state.controlInputs[innerItem.value] = false
                            console.log("this.state.controlInputs[innerItem.value]")
                            console.log(this.state.controlInputs[innerItem.value])
                      controlsArray.push(

                    <FormItem
                    isRequired={isRequired}
                    >             
                      <CheckboxComponent key = {keyIndex} style={styles.checkBox}
                      label = ""
                      labelStyle={labelStyle}
                      checkboxStyle={checkBoxStyle}
                      onChange={(checked) => 
                        this.state.controlInputs[innerItem.value] = checked
                       }

                      numberOfLines={15} 
                      style={styles.checkBoxLable }
                      value = {innerItem.value}
                      />
        
                     </FormItem>     
                      )
                    }
                  }
                  })
                }
              }


                }else if(xmlJson[0].children[a].children[b].children[c].name == "RadioButton"){
                //Krithi start
                var visibility = false
                var regex= ""
                var maxLength = 0
                var isRequired = false
                var contolArray =[]
                var text = ""
                var radioBtn = []
                var displayTxt = ""
                var displayLabel =""
                for(var d =0; d< xmlJson[0].children[a].children[b].children[c].children.length;d++){
             
                    contolArray.push(xmlJson[0].children[a].children[b].children[c].children[d])
              
                 if( xmlJson[0].children[a].children[b].children[c].children.length-1 == d){
                 
                   var tempArray = contolArray.reverse()
                   console.log("radio visible check")
                   console.log(JSON.stringify(tempArray))
                   tempArray.map((innerItem, innerItemIndex) =>{
                   console.log("innerItem Rad")
                   console.log(innerItem)
                     if(innerItem.name == "Visible"){
                      
                       visibility = innerItem.value
                    }
                    if(innerItem.name == "Validator"){
                      if(innerItem.value == "String"){
                       regex = /^\d+$/
                      }else{
                       regex = /^\d+$/
                      }
                     
                    }
                    if(innerItem.name == "MaxLength"){
                     maxLength = innerItem.value
                    }
                    if(innerItem.name =="RequiredField"){
                     isRequired = innerItem.value
                    }
               
                 
                    
  
                      if (innerItem.name == "FieldHeader") {
                        displayLabel = innerItem.value
                        text = innerItem.value //<Text style={styles.Header }>{innerItem.value}</Text>
                        text = new Entities().decode(text);
                        text = text.replace("<p>", "").replace("</p>", "").replace("<d>", "").replace("<dfn>", "").replace("</dfn>", "").replace("<em>", "").replace("</em>", "").replace("</d>", "").replace("&nbsp;", "")
                       
                        this.state.controlInputs[innerItem.value] = ""
                        
                        displayTxt = '<p style="fontSize:10;margin-bottom:5">' + text + '</p>'
                       
                      }
                      //if(visibility == "true"){
                      if (innerItem.name == "UserDefinedList") {
                        innerItem.children.map((radioBtnOption, radioBtnOptionIndex) => {
  
                          if (radioBtnOption.name == "ListItem") {
                            keyIndex = keyIndex + 1
                            radioVal = radioVal+111
                          this.state.radioBtnOptions["radioVal"] =  this.state.radioBtnOptions["radioVal"]  || 0
                           
                          radioBtn.push(
                           <RadioButton value={radioBtnOption.attributes.value} >
          <Text style={styles.radioText}>{radioBtnOption.attributes.value}</Text>
        </RadioButton>
                            )
                          }
                        })
                      }
                    
                   //}
                  
                 
                    })
                  }
                }
                //console.log("visibility radsss",visibility)
                if(visibility == "true"){
                keyIndex = keyIndex + 1
                      
                controlsArray.push(
                  <FormItem
                isRequired={true}
                regExp = {regex}
               >
                  <View key={keyIndex}>
                    <HTML html={displayTxt} imagesMaxWidth={Dimensions.get('window').width} decodeEntities={true} debug={true}
                    />
                   
                   <RadioGroup
                   size={24}
                   thickness={2}
                   color='#153875'
                   //highlightColor='blue'
        onSelect = {(index, value) => {
          this.state.controlInputs[displayLabel] = value
           console.log(value)}}
      >
        {radioBtn}
      </RadioGroup>
                  </View>
                  </FormItem>
                )
              }
                }else if (xmlJson[0].children[a].children[b].children[c].name == "Textbox") {
            var visibility = false
             var regex= ""
             var maxLength = 0
             var isRequired = false
             var contolArray =[]
             var stringVal = false
             var validityArray ={}
             for(var d =0; d< xmlJson[0].children[a].children[b].children[c].children.length;d++){
          
                 contolArray.push(xmlJson[0].children[a].children[b].children[c].children[d])
           
              if( xmlJson[0].children[a].children[b].children[c].children.length-1 == d){
              
                var tempArray = contolArray.reverse()
                tempArray.map((innerItem, innerItemIndex) =>{
                
                  if(innerItem.name == "Visible"){
                   
                    visibility = innerItem.value
                 }
                 if(innerItem.name == "Validator"){
                   if(innerItem.value == "String"){
                     stringVal = true
                    regex = /^\d+$/
                   }else{
                    regex = /^\d+$/
                    stringVal = false
                   }
                  
                 }
                 if(innerItem.name == "MaxLength"){
                  maxLength = innerItem.value
                 }
                 if(innerItem.name =="RequiredField"){
                  isRequired = innerItem.value
                 }
                
                validityArray ={
                  "maxLength" :maxLength,
                  "isRequired":isRequired,
                  "stringVal":stringVal,
                  "regex":regex,
                  valid:true
                }

                 
             
                  if (innerItem.name == "FieldHeader") {
                    keyIndex = keyIndex + 1

                    var text = new AllHtmlEntities().decode(innerItem.value);
                    text = text.replace("<d>", "").replace("</d>", "").replace("&amp;", "&").replace("&nbsp;", "").replace("&quot;", "'").replace("&#39;", "'")

                    this.state.controlInputs[text] = ""
                    console.log("visibility",(visibility == "true"),(visibility == true))
                    if(visibility == "true"){
                    controlsArray.push(
                    
                      <FormItem
                      isRequired={true}
                      regExp = {regex}
                     >
                     <LabelComponent  style ={styles.textBox} value = {text}/>
                      <ComponentWithValue
                      style ={{
                        height: 30,
                        //borderBottomColor:'#a8a8a8', 
                        borderWidth: 1,
                        marginBottom: 10,
                        paddingLeft: 5,
                        fontSize: 10
                      }}
                        value={ this.state.controlInputs[text]}//.xmlJson[0].children[a].children[b].children[c].children[d].value}
                        placeholder="Enter Text Here"
                        key={keyIndex}
                        onChange={(event)=>
                        this.changeStateAttributeValue(event,text,validityArray)}/>
                    </FormItem>
                    )
                  }
             
                }
                })
               
              }else{

              }
            
           
          }
           }else if (xmlJson[0].children[a].children[b].children[c].name == "DropDownList"){
             
              var visibility = false
              var regex= ""
              var maxLength = 0
              var isRequired = false
              var contolArray =[] 
var stateIndexVal = ""
             
              for(var d =0; d< xmlJson[0].children[a].children[b].children[c].children.length;d++){
                var dropDowValues = []
            var obj = {}
            var text = ""
            var label = ""
                contolArray.push(xmlJson[0].children[a].children[b].children[c].children[d])
          
             if( xmlJson[0].children[a].children[b].children[c].children.length-1 == d){
            
             var tempArray = contolArray.reverse()
             tempArray.map((innerItem, innerItemIndex) =>{
              if(innerItem.name == "Visible"){
                     console.log("drop")
                     console.log(JSON.stringify(innerItem))
                visibility = innerItem.value
             }
             if(innerItem.name == "Validator"){
               if(innerItem.value == "String"){
                regex = /^\d+$/
               }else{
                regex = /^\d+$/
               }
              
             }
             if(innerItem.name == "MaxLength"){
              maxLength = innerItem.value
             }
             if(innerItem.name =="RequiredField"){
              isRequired = innerItem.value
             }
           
          
           
            
              if (innerItem.name == "FieldHeader") {
                var y = innerItem.value
                y = new Entities().decode(innerItem.value);
                y = y.replace("<d>", "").replace("</d>", "").replace("&amp;", "&").replace("&nbsp;", "").replace("&quot;", "'").replace("&#39;", "'")
                text = <Text>{y}</Text>
                label = y

              }
              stateIndexVal =label
              this.state.controlInputs[stateIndexVal] = ""
              
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
            if(visibility == "true"){
            controlsArray.push(
              <FormItem
              isRequired={true}
              regExp = {regex}
             >
              <DropdownComponent key={keyIndex} label={label} dropDowValues ={dropDowValues} onChangeText={(val)=>{
                this.state.controlInputs[stateIndexVal] =val

              }}/>
              </FormItem>
            )

        
            
          }
          }
        }
             
          
        
          }
           }
           
        }
      }
       
    }

    this.state.controlsArray = controlsArray

    //Alert.alert(this.state.controlsArray);
    this.state.doc = JSON.stringify(xml)

  }

  submit=()=>{
   // let submitResults = this.refs.form.validate();
   //console.log("this.stae")
    //console.log(this.state.controlInputs)

    var Array  = this.state.controlInputs
var nonNullArray = []
    //console.log(JSON.stringify(this.state.controlInputs))
  this.state.values=[]
    for(var key in Array){
      console.log("Key")
      console.log(Array[key])
if(Array[key] !=""){

  var text = key //<Text style={styles.Header }>{innerItem.value}</Text>
  text = new Entities().decode(text);
  text = text.replace("<p>", "").replace("</p>", "").replace("<d>", "").replace("<dfn>", "").replace("</dfn>", "").replace("<em>", "").replace("</em>", "").replace("</d>", "").replace("&nbsp;", "")
  obj= {
    "Question" :text,
    "Answer":Array[key]

  }
  nonNullArray.push(obj)
}
this.setState({
  values: JSON.stringify(nonNullArray)
})
      
     
    }
    this.dialogComponent.show();
    //Alert.alert(Array)
    
    /*for(var a =0; a<xmlJson[0].children.length;a++){
      for(var b =0; b< xmlJson[0].children[a].children.length;b++){
        if(xmlJson[0].children[a].children[b].name == "Controls"){
         // console.log("b",b)
          for(var c =0; c< xmlJson[0].children[a].children[b].children.length;c++){
         //
         if (xmlJson[0].children[a].children[b].children[c].name == "Checkbox") {
          var visibility = false
          var regex= ""
          var maxLength = 0
          var isRequired = false
          var answerKey = ""
          var contolArray =[] 
          for(var d =0; d< xmlJson[0].children[a].children[b].children[c].children.length;d++){
            contolArray.push(xmlJson[0].children[a].children[b].children[c].children[d])
         if(xmlJson[0].children[a].children[b].children[c].children.length-1 == d){
           var tempArray = contolArray.reverse()
           tempArray.map((innerItem, innerItemIndex) =>{
            if(innerItem.name == "Visible"){
                   
              visibility = innerItem.value
           }
           if(innerItem.name == "Validator"){
             if(innerItem.value == "String"){
              regex = /^\d+$/
             }else{
              regex = /^\d+$/
             }
            
           }
           if(innerItem.name == "MaxLength"){
            maxLength = innerItem.value
           }
           if(innerItem.name =="RequiredField"){
            isRequired = innerItem.value
           }
           if (innerItem.name == "FieldHeader") {
             answerKey = innerItem.value
           }
console.log(this.state.controlInputs.length)
          // for(var answerIndex=0 ;answerIndex<this.state.controlInputs.length;answerIndex++){
            // if(answerKey == ){}
           if(this.state.controlInputs.hasOwnProperty(answerKey)) {
             console.log("checkkkkkkkked")
             console.log(this.state.controlInputs(answerKey))

           }
           //}
          })
        }
      }

        }
        }
      }
      }
    }*/
  }
 
  customValidation(){
    return true;
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
     <Text style={{ color: 'white',textAlign:'center'}}> Style Five  </Text>
     </Content>
      <Right>
        <Image style={{ width: 30, height: 30, }}
          source={require('./images/Save-White.png')} />
      </Right>
    </Header>
      <View style={styles.pageStyle} >
     
        <ScrollView >
          {/* <View style={styles.container}>
         {this.state.controlsArray}
          </View> */}
          <View style={styles.container}>
          <Form
            ref="form"
            shouldValidate={true}
            >
             {this.state.controlsArray}
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
                // onPress={onPressLearnMore}
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

AppRegistry.registerComponent('DemoPageStyleFive', () =>DemoPageStyleFive);
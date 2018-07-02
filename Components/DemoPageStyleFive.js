
import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Image, Alert, ScrollView, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Column as Col, Row } from 'react-native-flexbox-grid';
import { Icon, Header, Content, Left, Right } from 'native-base';
var XMLParser = require('react-xml-parser');
import HTML from 'react-native-render-html';
import styles from './Styles/styleFive';
import { Container } from 'native-base';
const Entities = require('html-entities').AllHtmlEntities;
const AllHtmlEntities = require('html-entities').AllHtmlEntities;
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import { Form, FormItem } from 'react-native-form-validation';
import ComponentWithValue from './TextFieldComponent2'
import LabelComponent from './LabelComponent'
import CheckboxComponent from './CheckboxComponent'
import DropdownComponent from './DropdownComponent'
import { DialogComponent }from 'react-native-dialog-component';
var jsonData = require('./Constants/xmlDataStyleFive.json');

export default class DemoPageStyleFive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controlsArray: [],
      controlInputs:{},
      values:[]
    }
    var responseText = jsonData[0].data
    this.constructControls(responseText)
  }

  /**
  * Function : changeStateAttributeValue
  * Description : Assigns user action  values to dynamic text fields 
  */
  changeStateAttributeValue = (event,attributeKey,validityArray)=>{
  if((event.nativeEvent.text.length != validityArray["maxLength"])|| 
  (event.nativeEvent.text != "" && validityArray["isRequired"] == "true") )
  {
    validityArray["valid"] = false
    //this.state.controlInputs[attributeKey+"ValidityChecker"] = validityArray
  }else{
    validityArray["valid"] = true
   // this.state.controlInputs[attributeKey+"ValidityChecker"] = validityArray
  }
    this.state.controlInputs[attributeKey] = event.nativeEvent.text;
  }
  
    /**
  * Function : createCheckBoxControl
  * Description : Creates Check box controls
  */
 createCheckBoxControl(keyIndex,controlItem,controlsArray){
  var visibility = false
  var regex= ""
  var maxLength = 0
  var isRequired = false
  var contolArray =[] 
  controlItem.children.map((outerItem, outerItemIndex) => {
    contolArray.push(outerItem)

    if(controlItem.children.length-1 == outerItemIndex ){
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
                 this.state.controlInputs[innerItem.value] = false
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
  })
}

/**
  * Function : createRadioButtonControl
  * Description : Creates Radio Button controls
  */
 createRadioButtonControl(keyIndex,controlItem,controlsArray){
  var visibility = false
                  var regex= ""
                  var maxLength = 0
                  var isRequired = false
                  var contolArray =[]
                  var text = ""
                  var radioBtn = []
                  var displayTxt = ""
                  var displayLabel =""
                  controlItem.children.map((outerItem, outerItemIndex) => {
                    contolArray.push(outerItem)
                
                    if(controlItem.children.length-1 == outerItemIndex ){
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
                           displayLabel = innerItem.value
                           text = innerItem.value //<Text style={styles.Header }>{innerItem.value}</Text>
                           text = new Entities().decode(text);
                           text = text.replace("<p>", "").replace("</p>", "").replace("<d>", "").replace("<dfn>", "").replace("</dfn>", "").replace("<em>", "").replace("</em>", "").replace("</d>", "").replace("&nbsp;", "")
                          
                           this.state.controlInputs[innerItem.value] = ""
                         
                           displayTxt = '<p style="fontSize:10;margin-bottom:5">' + text + '</p>'
                          
                         }
                         if (innerItem.name == "UserDefinedList") {
                           innerItem.children.map((radioBtnOption, radioBtnOptionIndex) => {
     
                             if (radioBtnOption.name == "ListItem") {
                               keyIndex = keyIndex + 1
                             radioBtn.push(
                              <RadioButton value={radioBtnOption.attributes.value} >
                            <Text style={styles.radioText}>{radioBtnOption.attributes.value}</Text>
                             </RadioButton>
                               )
                             }
                           })
                         }
                       
                       })
                    }
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
                  })
  }
  
   /**
  * Function : createTextFieldControl
  * Description : Creates Text Field  controls
  */
 createTextFieldControl(keyIndex,controlItem,controlsArray){
  var visibility = false
  var regex= ""
  var maxLength = 0
  var isRequired = false
  var contolArray =[]
  var stringVal = false
  var validityArray ={}
  controlItem.children.map((outerItem, outerItemIndex) => {
    contolArray.push(outerItem)

    if(controlItem.children.length-1 == outerItemIndex ){
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
    }
  })
 }

  /**
  * Function : createDropdownControl
  * Description : Creates Dropdown Controls
  */
 createDropdownControl(keyIndex,controlItem,controlsArray){
  var visibility = false
  var regex= ""
  var maxLength = 0
  var isRequired = false
  var contolArray =[] 
   var stateIndexVal = ""
   controlItem.children.map((outerItem, outerItemIndex) => {
    var dropDowValues = []
    var obj = {}
    var text = ""
    var label = ""
    contolArray.push(outerItem)

    if(controlItem.children.length-1 == outerItemIndex ){
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
  })
 }
  /**
  * Function : constructControls
  * Description : Creates Controls from JSON
  */
  constructControls(responseText) {
    var xml = new XMLParser().parseFromString(responseText);    // Assume xmlText contains the example XML
    xmlJson=[]
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
                  this.createCheckBoxControl(keyIndex,controlItem,controlsArray)
                }else if (controlItem.name == "RadioButton") {
                  this.createRadioButtonControl(keyIndex,controlItem,controlsArray)
                 } else if (controlItem.name == "Textbox") {
                  this.createTextFieldControl(keyIndex,controlItem,controlsArray)
                } else if (controlItem.name == "DropDownList") {
                this.createDropdownControl(keyIndex,controlItem,controlsArray)
              
                }
              })
            }
            })
          }
      })
    })


        
 
             
              
             
            
            
             
   
           
           
        
      
       
    

    this.state.controlsArray = controlsArray

  }

  submit=()=>{
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
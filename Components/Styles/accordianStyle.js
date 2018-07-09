import { StyleSheet } from 'react-native';





module.exports = StyleSheet.create({


container: {

flex: 1,

margin: 5,

fontFamily: 'helvetica',


},


header: {

paddingTop: 20,

backgroundColor: "#153875",

color: 'white',

textAlign: 'center',

height: 50

},


headerText: {

fontSize: 15

},

checkBox: {

flexWrap: 'wrap',

},

textBox: {

color: "black",

marginTop: 5,

paddingBottom: 5,

fontWeight:'bold',

fontFamily: 'helvetica',

fontSize: 12

},


label: {

color: "#a8a8a8"

},


radio: {

flex: 1,

paddingBottom: 5,

},


radioText: {

fontSize: 10,

paddingLeft: 5,

paddingBottom: 0,

fontFamily: 'helvetica',

},


inputText: {

width: '80%',

fontSize: 60

},


buttonBorderColor: {

borderWidth: 1,

borderTopColor: '#153875'

},

createButtonColor: {

backgroundColor: '#153875',

},

pageStyle: {

flex: 1,

fontFamily: 'helvetica',

margin:10

},


checkBoxLable: {

fontSize: 11,

color: 'black',

marginLeft: 5

},


browseButtonStyle:{

borderWidth:1,

borderColor:'#153875',

width: 100, height: 30


},

BrowserStyle: {

borderWidth:1,

backgroundColor:'#153875',

flex: 1,

flexDirection: 'column',

justifyContent: 'center'


},

swicthLable:{

fontSize:10,

color:'black',

},

switchIcon:{

transform: [{ scaleX: 0.8 }, { scaleY: 0.6}]

},

webViewStyle:{

flex: 1,

marginTop: 5,

height: 200,

},

TextFieldControl:{

height: 30,

borderWidth: 1,

marginBottom: 10,

paddingLeft: 5,

fontSize: 10

},

imageStyle:{

flex: 1, 

width: '100%', 

height: '100%', 

justifyContent: 'center'

},

headerBackgroundStyle:{

backgroundColor: "#0865a3"

},

iconStyle:{

color: 'white'

},

headerTextStyle:{

color: 'white', 

textAlign: 'center'

},

saveImage:{

width: 30, 

height: 30,

},

buttonView:{

marginBottom: 10, 

borderColor: 'gray'

},

buttonStyle:{

backgroundColor: '#0865a3', 

height: 30

},

buttonText:{

color: 'white', 

paddingLeft: 5,

paddingTop:5

},

buttonImage:{

width: 20, 

height: 20,

marginTop:5

},

sectionView:{

padding: 5, backgroundColor: 'white' 

},

labelStyle : {

color: 'black',

fontSize: 10

},

checkBoxStyle : {

width: 18,

height: 18

}

});
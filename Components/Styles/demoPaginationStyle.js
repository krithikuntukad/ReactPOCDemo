import {StyleSheet} from 'react-native';

import theme from '../Styles/theme.style'

module.exports = StyleSheet.create({

container: {
flex:1,
margin:20,

},

header: {
paddingTop:20,
backgroundColor: theme.COLOR_BLUE,
color: theme.COLOR_WHITE,
textAlign: 'center',
height:50
},

headerText:{
fontSize:15
},
checkBox:{
flexWrap: 'wrap'
},
textBox:{
color:theme.COLOR_BLACK,
marginTop:5,
paddingBottom:5,
fontSize:theme.FONT_SIZE
},

label:{
color:theme.COLOR_LIGHTGREY
},

radio:{
flex:1,
paddingBottom:5,
//paddingRight:10
},

radioText:{
fontSize:theme.FONT_SIZE,
paddingLeft:5,
paddingBottom:0

},

inputText: {
    width: '80%',
    fontSize: 60
},

buttonBorderColor:{
    borderWidth:1,
borderTopColor:theme.COLOR_BLUE
},
createButtonColor:{
backgroundColor:theme.COLOR_BLUE,
},
pageStyle:{
    flex:1,
    backgroundColor:theme.COLOR_WHITE,
  
},

checkBoxLable:{
fontSize:theme.FONT_SIZE,
color:theme.COLOR_BLACK,
marginLeft:5
},


pageStyles:{
    marginLeft:20

},

browseButtonStyle:{
    borderWidth:1,
    borderColor:theme.COLOR_BLUE,
    width: 100, height: 30

},
BrowserStyle: {
    borderWidth:1,
    backgroundColor:theme.COLOR_BLUE,
    //height:30,
    flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    
},
wrapper:{
paddingTop:10
},
paginationContent:{
    flexDirection: 'row',paddingLeft:10,paddingRight:10
}
});

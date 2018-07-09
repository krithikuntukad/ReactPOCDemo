import {StyleSheet} from 'react-native';

import theme from '../Styles/theme.style'

module.exports = StyleSheet.create({
    
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
fontSize:10
},

label:{
color:theme.COLOR_LIGHTGREY
},

radio:{
flex:1,
paddingBottom:5,
},

radioText:{
fontSize:10,
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
    fontSize:10,
    color:theme.COLOR_BLACK,
    marginLeft:5
},
swicthLable:{
fontSize:10,
color:theme.COLOR_BLACK,
},
switchIcon:{
transform: [{ scaleX: 0.8 }, { scaleY: 0.6}]
},
switchRow:{
},
browseButtonStyle:{
    borderWidth:1,
    borderColor:theme.COLOR_BLUE,
    width: 100, height: 30

},
BrowserStyle: {
    borderWidth:1,
    backgroundColor:theme.COLOR_BLUE,
    flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    
},
});

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
},

radioText:{
fontSize:theme.FONT_SIZE,
paddingLeft:5,
paddingBottom:0

},


webviewStyle: {
    flex: 1,
    marginTop: 5,
    height: 200, 
},

dialogStyle:{
marginLeft:10,
marginTop:0,
backgroundColor:theme.COLOR_WHITE,
borderWidth:1,
marginBottom:100
},
dialogFontStyle:{
fontSize:theme.FONT_SIZE,
}
});

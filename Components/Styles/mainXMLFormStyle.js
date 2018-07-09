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
textBox:{
color:"black",
marginTop:5,
paddingBottom:5,
fontSize:10
},

label:{
color:"#a8a8a8"
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

buttonBorderColor:{
borderWidth:1,
borderTopColor:theme.COLOR_BLUE
},

createButtonColor:{
backgroundColor:theme.COLOR_BLUE,
},
webviewStyle: {
    flex: 1,
    marginTop: 5,
    height: 200, 
}
});

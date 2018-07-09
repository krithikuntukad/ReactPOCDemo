import {StyleSheet} from 'react-native';

import theme from '../Styles/theme.style'

module.exports = StyleSheet.create({
container: {
flex:1,
margin:20,
},

header: {
paddingTop:20,
backgroundColor: "#153875",
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
borderTopColor:'#153875'
},

createButtonColor:{
backgroundColor:'#153875',
},
 
});

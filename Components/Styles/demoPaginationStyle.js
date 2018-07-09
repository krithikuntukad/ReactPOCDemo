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

headerText:{
fontSize:15
},
checkBox:{
flexWrap: 'wrap'
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
//paddingRight:10
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
borderTopColor:'#153875'
},
createButtonColor:{
backgroundColor:'#153875',
},
pageStyle:{
    flex:1,
    backgroundColor:theme.COLOR_WHITE,
  
},

checkBoxLable:{
fontSize:10,
color:'black',
marginLeft:5
},


pageStyles:{
    marginLeft:20

},

browseButtonStyle:{
    borderWidth:1,
    borderColor:'#153875',
    width: 100, height: 30

},
BrowserStyle: {
    borderWidth:1,
    backgroundColor:'#153875',
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

import {StyleSheet} from 'react-native';



module.exports = StyleSheet.create({

container: {
flex:1,
margin:20,

},

header: {
paddingTop:20,
backgroundColor: "#153875",
color: 'white',
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
    backgroundColor:'white',
  
},
browseButtonStyle:{
    borderWidth:1,
    borderColor:'#153875',
    width: 150, height: 80,flex: 0.30,
        flexDirection: 'row',
        justifyContent: 'flex-end'

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
error:{
    color:'red',
    fontSize:10, 
    //marginTop:-10,marginBottom:2

},

  webviewStyle: {
        flex: 1,
        marginTop: 5,
        height: 200, 
  },

  textFieldStyle:{
    height: 30,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 5,
    fontSize: 10
  },
  contentStyle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  validBorderColor:{
borderColor:'grey',
height: 30,
borderWidth: 1,
marginBottom: 10,
paddingLeft: 5,
fontSize: 10
  },
  errorBorderColor:{
    borderColor:'red',
    height: 30,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 5,
    fontSize: 10
  }
});

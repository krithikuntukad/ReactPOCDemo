import {StyleSheet} from 'react-native';

import theme from '../Styles/theme.style'
module.exports = StyleSheet.create({

    headrBgColor:{
        backgroundColor: "#153875"
    },
    menuIcon:{
     color: theme.COLOR_WHITE 
    },
    contentStyle:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
    contentLabel:{ 
      color: theme.COLOR_WHITE , 
      textAlign: 'center' 
      },
    contentImage:{ 
      width: 30, 
      height: 30
    },
    pageStyle:{
        flex:1,
        backgroundColor:theme.COLOR_WHITE ,
      
    },
    viewStyle:{ 
        flex: 1, 
        justifyContent: 'center' 
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
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    webviewStyle: {
        flex: 1,
        marginTop: 5,
        height: 200, 
      },
    imageBgStyle:{
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center"
      }

})
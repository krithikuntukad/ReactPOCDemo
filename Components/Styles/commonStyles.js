import {StyleSheet} from 'react-native';
module.exports = StyleSheet.create({

    headrBgColor:{
        backgroundColor: "#153875"
    },
    menuIcon:{
     color: 'white' 
    },
    contentStyle:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
    contentLabel:{ 
      color: 'white', 
      textAlign: 'center' 
      },
    contentImage:{ 
      width: 30, 
      height: 30
    },
    pageStyle:{
        flex:1,
        backgroundColor:'white',
      
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

})
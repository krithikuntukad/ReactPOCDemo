import {StyleSheet} from 'react-native';
import theme from '../Styles/theme.style'
export default StyleSheet.create({
 
FlexBoxStyle: {
    height: 80,
    width: 400
},
backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', // or 'stretch',cover, repeat,contain,center
    justifyContent: 'center',
  },
 
  IconStyle: {
    width: 50,
     height: 50,
     marginTop:10
  },
 
  IconView: {
    width: 150,
     height: 80,
     flex: 0.30,
     flexDirection: 'row',
      justifyContent: 'center'
  },
 
  IconText:{
    width: 250,
    height: 80,
    flex: 1,
    paddingLeft:10,
    justifyContent: 'center'
  },
  FlexStyle:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  }
 
});
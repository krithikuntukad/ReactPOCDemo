import {StyleSheet} from 'react-native';
import theme from '../Styles/theme.style'
module.exports = StyleSheet.create({

    checkBoxLable:{
        fontSize:theme.FONT_SIZE,
        color:theme.COLOR_BLACK,
        marginLeft:5
    },
    checkBoxStyle : {
        width: 18,
        height: 18
    },
    checkBox:{
        flexWrap: 'wrap'
    },

})
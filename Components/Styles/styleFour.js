import { StyleSheet } from 'react-native';


module.exports = StyleSheet.create({
 
    container: {
        flex: 1,
        margin: 5,
        fontFamily: 'helvetica',
 
    },
 
    header: {
        paddingTop: 20,
        backgroundColor: "#153875",
        color: 'white',
        textAlign: 'center',
        height: 50
    },
 
    headerText: {
        fontSize: 15
    },
    checkBox: {
        flexWrap: 'wrap',
    },
    textBox: {
        color: "black",
        marginTop: 5,
        paddingBottom: 5,
        fontWeight:'bold',
        fontFamily: 'helvetica',
        fontSize: 12
    },
 
    label: {
        color: "#a8a8a8"
    },
 
    radio: {
        flex: 1,
        paddingBottom: 5,
        //paddingRight:10
    },
 
    radioText: {
        fontSize: 10,
        paddingLeft: 5,
        paddingBottom: 0,
        fontFamily: 'helvetica',
 
    },
 
    inputText: {
        width: '80%',
        fontSize: 60
    },
 
    buttonBorderColor: {
        borderWidth: 1,
        borderTopColor: '#153875'
    },
    createButtonColor: {
        backgroundColor: '#153875',
    },
    pageStyle: {
        flex: 1,
        fontFamily: 'helvetica',
        margin:10
        // backgroundColor: '#eff2f7',
 
    },
 
    checkBoxLable: {
        fontSize: 11,
        color: 'black',
        marginLeft: 5
    }
 
});
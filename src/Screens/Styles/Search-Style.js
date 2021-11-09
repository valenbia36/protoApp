import { NavigationContainer } from '@react-navigation/native';
import React, {useRef, version,} from 'react';
import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0fbfc',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
    inputView:{
        //position:'absolute',
        width:"80%",
        backgroundColor:"#90e0ef",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        top:"30%"
      },
      inputText:{
        height:50,
        color:"white"
      },
      titulo:{
          top:"20%",
          fontSize:14,
          fontWeight:"900"
      },
      sumbitContainer:{
        top:'-5%',


      },
      sumbit:{
        alignItems:"center",
        justifyContent:"center",
        alignContent:'center',
        textAlign:'center',

      },
      sumbitText:{
        width:150,
        backgroundColor:"#0096c7",
        borderRadius:25,
        height:50,
        color:'white',
        alignItems:"center",
        justifyContent:"center",
        textAlign:'center',
        textAlignVertical:'center',
        top:350,
        fontSize:17
      },
      listContainer:{
        position:'absolute',
        top:500
      },
      pickerCont:{
        position:'absolute',
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center',
        top:"45%",
      }
})
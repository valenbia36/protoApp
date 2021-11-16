import { NavigationContainer } from '@react-navigation/native';
import React, {useRef,useState} from 'react';

import {
    View,
    StyleSheet,
    Animated,
    PanResponder,
    Button,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';




export  function SearchImgs({route,navigation}){
    const [text, onChangeText]=useState("")



    return(
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput placeholder="Ingresar Apellido" style={styles.inputText} placeholderTextColor="#003f5c" onChangeText={(text) => {onChangeText(text)}} value={text}></TextInput>
            </View>
            <TouchableOpacity style={styles.submit} disabled={text==""?true:false}  >
                <Text style={styles.sumbitText}>Buscar</Text>
          </TouchableOpacity>
        </View>

    );
}

const styles=StyleSheet.create({
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
        top:"20%"
      },
      inputText:{
        height:50,
        color:"white"
      },

      sumbit:{
        alignItems:"center",
        justifyContent:"center",
        alignContent:'center',
        textAlign:'center',
        top:"30%"

      },
      sumbitText:{
        width:150,
        backgroundColor:"#0096c7",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        textAlign:'center',
        textAlignVertical:'center',
        top:"300%"
      },

      
})
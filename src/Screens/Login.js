import { NavigationContainer } from '@react-navigation/native';
import React, {useRef,useState} from 'react';


import {
    View,
    StyleSheet,
    Animated,
    PanResponder,
    Button,
    Text,
    Alert,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Image
} from 'react-native';
import {styles} from './Styles/Login-Style';


 export function Login({navigation}){
    const [text, onChangeText]=useState("")
    const [login,setLogin]=useState(false);
    const [disable,setDisable]=useState(true);

    return (
      
        <View style={styles.container}>
          
          <Image source={require('../imgs/Logo-modulo.png')} style={styles.backPhoto} resizeMode={'center'}/>
          
            <View style={styles.inputView} >
            
                < TextInput  
                    style={styles.inputText}
                    placeholder="Email..." 
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => {onChangeText(text);setDisable(false)}}
                    value={text}
                    />
            </View>
        <TouchableOpacity>
          <Text style={styles.signUpText} >Signup</Text>
        </TouchableOpacity>
         
          <TouchableOpacity style={styles.loginBtn}  onPress={()=>{setLogin(true);navigation.navigate("Home",{email:text,login:true});console.log(text)}} disabled={login || disable} activeOpacity={disable?0:1} >
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
  
        
        </View>
        
    );
}





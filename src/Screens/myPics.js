import React, {useRef} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Folder} from './Folder';
import Camera from '../Components/Camera';

export function myPics({navigation}) {
    const carpetas = [];
    function addFolder(){
        carpetas.push();
        console.log(carpetas);
    }
    const imgs = [];
    function addImgs(image){
        imgs.push(image);

    }


    return (
        <ScrollView style={styles.container}>
            <View style={{flex:1,position:'absolute'}}>{carpetas}</View>
            <Camera></Camera>

        </ScrollView>
    );
}

const styles=StyleSheet.create({
    container:{
        //flex:1,
        backgroundColor:'#e0fbfc'
    },
    
    newFolder:{
        alignContent:'center',
        backgroundColor:'#e8e8e4',
        width:150,
        height:20,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0.5,
        borderRadius:3,
        alignSelf:'center',
        marginTop:100,
        marginLeft:100,
        position:'absolute'
    }
});
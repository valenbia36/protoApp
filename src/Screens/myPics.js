import React, {useRef,useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Picker
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Camera from '../Components/Camera';
import SelectDropdown from 'react-native-select-dropdown';

export function myPics({navigation}) {
    const categorias=["Croquis encuesta 1",'Foto familia delante de la casa','Baño actual-Inodoro','Baño actual-Pozo/balde',
                        'Contrato de asignación firmado','Ficha inspección de pozos','Módulo Sanitario por dentro','Familia dentro del MS terminado',
                        'Niños/as y adultos cepillándose los dientes/lavándose las manos dentro del MS','- Foto carta de donación del MS','Foto carta cesión de imagen']; 
    const familias = async()=> {
        const data= await fetch('http://modulo-backoffice.herokuapp.com/families/x-test-obtain-families').then(response => response.json());
        
    }
    const [selectedCat,setSelectedCat]=useState("")
    const [selectedFamily,setSelectedFamily]=useState("")

    return (
        <ScrollView style={styles.container}>
            <View style={{flex:1,position:'absolute'}}></View>
            <Camera></Camera>
            <View style={styles.pickerCont}>
            <SelectDropdown
                data={categorias}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
                defaultButtonText={"Seleccionar Catergoria"}
                buttonStyle={{width:300,borderRadius:20,backgroundColor:'#005f73',}} 
                buttonTextStyle={{color:'white'}}
            />
            <SelectDropdown
                data={data.results}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
                defaultButtonText={"Seleccionar Familia"}
                buttonStyle={{width:300,borderRadius:20,backgroundColor:'#005f73',top:10}} 
                buttonTextStyle={{color:'white'}}
            />
            </View>
            <TouchableOpacity></TouchableOpacity>


        </ScrollView>
    );
}

const styles=StyleSheet.create({
    container:{
        //flex:1,
        backgroundColor:'#e0fbfc'
    },
    pickerCont:{
        position:'absolute',
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center',
        top:510,
    },
    

});
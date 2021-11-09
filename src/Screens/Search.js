import { NavigationContainer } from '@react-navigation/native';
import React, {useRef,useState} from 'react';

import {
    View,
    StyleSheet,
    Animated,
    PanResponder,
    Button,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import {styles} from './Styles/Search-Style';
import SelectDropdown from 'react-native-select-dropdown';





export  function Search({route,navigation}){

    const [text, onChangeText]=useState("")
    const [data_filtrada,setDataFiltrada]=useState([]);
    const criterio=["Apellido","Barrio"]
    const [criterioElegido,setCriterio]=useState("");
    const obtener=async()=> {
        const data= await fetch('http://modulo-backoffice.herokuapp.com/families/x-test-obtain-families').then(response => response.json());
        console.log(criterioElegido,text);
        if(criterioElegido=="Apellido"){
            setDataFiltrada(data.results.filter((item)=>item.apellido==text));}
        else if(criterioElegido=="Barrio"){
            setDataFiltrada(data.results.filter((item)=>(item.encuestaUno.direccion.barrio)==text));}
    };





    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Aca se puede buscar familias</Text>
            <View style={styles.inputView}>
                <TextInput placeholder="Busqueda" style={styles.inputText} placeholderTextColor="#003f5c" onChangeText={(text) => {onChangeText(text)}} value={text}></TextInput>
            </View>
            <View style={styles.pickerCont}>
            <SelectDropdown
                data={criterio}
                onSelect={(selectedItem, index) => {
                    setCriterio(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
                defaultButtonText={"Criterio de Busqueda"}
                buttonStyle={{height:50,width:190,borderRadius:25,backgroundColor:"#0096c7"}}
                buttonTextStyle={{color:'white',fontSize:15}}
            />
            </View>

            <View style={styles.sumbitContainer}>
                <TouchableOpacity style={styles.submit}  >
                    <Text style={styles.sumbitText} onPress={obtener}>Buscar</Text>
                </TouchableOpacity>
            </View>

          <View style={styles.listContainer}>
              <FlatList keyExtractor={item => item._id} data={data_filtrada} renderItem={({item})=>(
                  <Text>{item.apellido},{item._id}</Text>
              )}/>
          </View>

        </View>



    );
}
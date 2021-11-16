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
    ScrollView,
    Image
} from 'react-native';
import {styles} from './Styles/Search-Style';
import SelectDropdown from 'react-native-select-dropdown';
import Item from "./Item";





export  function Search({route,navigation}){

    const [text, onChangeText]=useState("")
    const [data_filtrada,setDataFiltrada]=useState([]);
    const criterio=["Apellido","Barrio","Partido","Provincia"]
    const [criterioElegido,setCriterio]=useState("");
    const obtener=async()=> {
        const data= await fetch('https://modulo-backoffice.herokuapp.com/families/x-test-obtain-families?'+criterioElegido.toLowerCase()+"="+text).then(response => response.json());
        setDataFiltrada(data.results);
        console.log(data_filtrada);
    }

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
                <TouchableOpacity style={styles.submit} disabled={criterioElegido==""?true:false} onPress={obtener} >
                    <Text style={styles.sumbitText} >Buscar</Text>
                </TouchableOpacity>
            </View>

          {//<View style={styles.listContainer}>
}
    
                <FlatList style={{flex:1,top:250}}
                    data={data_filtrada}
                    renderItem={({ item }) => (
                        <View>
                        <Item name={item.apellido} estado={item.estado} barrio={item.encuestaUno.direccion.barrio} partido={item.encuestaUno.direccion.partido} provincia={item.encuestaUno.direccion.provincia} nav={navigation}>
                        </Item>
                        <TouchableOpacity style={styles.ButtonImg} onPress={()=>navigation.navigate("myPics",{id:item._id,ape:item.apellido})}>
                            <Image source={require('../camera.png')} style={styles.img}>
                            </Image>
                        </TouchableOpacity>
                        </View>

                    )}
                    keyExtractor={data_filtrada._id}
                />
                
          {//</View>
}

        </View>




    );
}
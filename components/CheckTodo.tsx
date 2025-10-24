import React,{useState} from 'react';
import {Feather, MaterialIcons} from "@expo/vector-icons";
import { View,Pressable,StyleSheet } from 'react-native';
import { todoContent } from '@/types';


function ChechBox({id,content,completed}:todoContent) {
    const [isChick,setIsChick]=useState<boolean>(completed);
    return (
    <View style={{flexDirection:"row",gap:10,alignItems:"center"}}>
        {isChick ?(
            <Feather name='check-circle' color="green" size={20}/>
        ):(
            <MaterialIcons name='radio-button-unchecked' color="black" size={20}/>
        )}
        <Pressable style={isChick ? styles.chicked :styles.notChiched}  onPress={()=>setIsChick(!isChick)}>{id}:{content}</Pressable>
    </View>
    )
}

export default ChechBox;

const styles=StyleSheet.create({
    chicked:{
        textDecorationStyle:'solid',
        textDecorationLine:"line-through",
        fontSize:18
    },
    notChiched:{
        fontSize:18
    }
})
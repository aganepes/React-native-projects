import React,{useState} from 'react';
import {Feather, MaterialIcons} from "@expo/vector-icons";
import { View,Pressable,StyleSheet,Text } from 'react-native';
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
        <Pressable onPress={()=>setIsChick(!isChick)}>
            <Text style={[styles[isChick ? "chicked" : "notChiched"],styles.text]}>{id}:{content}</Text>
        </Pressable>
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
    },
    text:{
        transitionDelay:"500ms",
        transitionTimingFunction:"ease-in-out",
        transitionProperty:"all"
    }
})
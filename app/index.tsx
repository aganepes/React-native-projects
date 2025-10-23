import { View,Text, StyleSheet,Image,TouchableOpacity,type ColorValue } from "react-native";
import {Link} from 'expo-router';
import { useState } from "react";

const urlImage = "https://codebrahma.com/static/8c27233fcb0ff4aa1bf135f164c98dbd/41099/brickwall.jpg";


type ButtonPromp={
    bgColor?:ColorValue,
    title:string,
    onPress:(() => void) | undefined
}

function MyCustomButton({bgColor,title,onPress}:ButtonPromp){
    return (
        <TouchableOpacity style={[styles.couterButton,{backgroundColor:(!bgColor ? "lightblue": bgColor)}]} onPress={onPress}>
            <Text style={{color:"black"}}>{title}</Text>
        </TouchableOpacity>
    )
}

const colorVariants = {
  black: "bg-black text-white",
  blue: "bg-blue-500 text-white",
  white: "bg-white text-black",
};
export default function HomeScreen(){
    const [couter,setCouter]=useState<number>(0);
    return (
        <View style={styles.Container} >
            <Image source={{uri:urlImage}} style={styles.image}/>
            <View style={styles.contentContainer}>
                <Text style={{fontSize:24,marginTop:16}} className={colorVariants['black']}>Couter: {couter}</Text>
                <Text style={styles.subtitle}>Click buttons to change the counter.</Text>
                <View style={styles.buttonConatiner}>
                    <MyCustomButton title={"Increment +"} onPress={()=>setCouter(couter+1)}/>
                    <MyCustomButton title={"Decrement -"} bgColor={"pink"} onPress={()=>setCouter(couter-1)}/>
                </View>
            </View>
            <Link href={"/todo"} style={styles.button}>
                <Text>Go To Do list page</Text>
            </Link>
        </View>
    )
}




const styles= StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"red",
        alignItems:"center",
        paddingVertical:16
    },
    contentContainer:{
        alignSelf:"flex-start",
        paddingHorizontal:16
    },
    subtitle:{
        color:"darkgray",
        fontSize:18,
    },
    image:{
        boxSizing:"border-box",
        width:"95%",
        height:"30%",
        borderRadius:5
    },
    button:{
        fontSize:16,
        borderRadius:5,
        backgroundColor:"black",
        padding:5,
        color:"white",
        width:150,
        alignItems:"center"
    },
    couterButton:{
        flex:.5,
        fontSize:16,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        padding:5,
        height:40,
    },
    buttonConatiner:{
        flex:1,
        flexDirection:"row",
        gap:10,
        marginVertical:16
    }
})
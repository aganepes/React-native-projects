import { Link } from 'expo-router';
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, type ColorValue } from "react-native";

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

export default function HomeScreen(){
    const [couter,setCouter]=useState<number>(0);
    return (
        <View style={styles.Container} >
            <Image source={{uri:urlImage}} style={styles.image}/>
            <View style={styles.contentContainer}>
                <Text style={{fontSize:24,marginTop:16}}>Couter: {couter}</Text>
                <Text style={styles.subtitle}>Click buttons to change the counter.</Text>
                <View style={styles.buttonConatiner}>
                    <MyCustomButton title={"Increment +"} onPress={()=>setCouter(couter+1)}/>
                    <MyCustomButton title={"Decrement -"} bgColor={"pink"} onPress={()=>setCouter(couter-1)}/>
                </View>
            </View>
            <Link href={"/todo"} asChild>
                <TouchableOpacity style={styles.linkButton}>
                    <Text style={styles.linkText}>Go To Do list page</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}




const styles= StyleSheet.create({
    Container:{
        height:300,
        alignItems:"center",
        paddingVertical:16
    },
    contentContainer:{
        alignSelf:"flex-start",
        paddingHorizontal:16
    },
    couterButton:{
        fontSize:16,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        padding:5,
        height:40,
    },
    subtitle:{
        color:"darkgray",
        fontSize:18,
    },
    image:{
        boxSizing:"border-box",
        width:"95%",
        height:150,
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
    
    buttonConatiner:{
        flex:1,
        flexDirection:"row",
        gap:10,
        marginVertical:16
    },
    linkButton: {
        backgroundColor: "black",
        borderRadius: 5,
        padding: 10,
        minWidth: 150,
        alignItems: 'center',
        marginTop: 10
    },
    linkText: {
        color: "white",
        fontSize: 16,
        fontWeight: '500'
    }
})
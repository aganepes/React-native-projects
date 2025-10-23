import { View,Text,StyleSheet,TextInput,TouchableOpacity,FlatList } from "react-native";
import { Link } from 'expo-router';
import { uniwind } from "uniwind/native";
import { useEffect, useState } from "react";

export default function AboutScreen(){
    const [inputText,setInput] = useState("");
    const [itemArray,setItemArray] = useState<item[]>([]);

    const AddItem=(content:string)=>{
        const item:item ={id:itemArray.length+1 , content}
        if(content) setItemArray(items=>[...items,item]);
        setInput("")
    }
    const RemoveItem=(id:number)=>{
        setItemArray(items=>items.filter(v=>v.id!==id))
    }
    type item={
        id:number,
        content:string
    }
    interface ItemPromp{
        item:item,
        RemoveItem:(id:number)=>void
    }
    // :React.FC<ItemPromp>
    const ItemComponent=({item,RemoveItem}:ItemPromp)=>(
            <View style={[styles.item,
            {borderBottomWidth:1,borderColor: '#e6bbbbff',paddingBottom:3}]} className="bg-red-950">
                <Text>{item.id}: {item.content}</Text>
                <TouchableOpacity 
                    onPress={()=>RemoveItem(item.id)}
                    style={styles.deleteButton}
                    >
                    <Text style={{color:"red"}}>X</Text>
                </TouchableOpacity>
            </View>
        )
    useEffect(()=>{
        console.log(itemArray)
    },[itemArray])
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                    onChangeText={(newText)=>setInput(newText)} 
                    value={inputText}
                    placeholder="Input giriz .."
                    placeholderTextColor={"gray"}
                    style={styles.inputElement} 
                    />
                <TouchableOpacity style={styles.addButton} onPress={()=>{AddItem(inputText)}}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.itemContainer}>
                {/* <FlatList
                    data={itemArray}
                    renderItem={({item})=><ItemComponent item={item} RemoveItem={RemoveItem}/>}
                    keyExtractor={(item)=>item.id.toString()}
                /> */}
                {itemArray.length ? 
                itemArray.map( (v) =>(<ItemComponent item={v} RemoveItem={RemoveItem} key={v.id}/>)) 
                : ""}
            </View>
            <Link href={"/"} style={styles.linkButton}>
                <Text>Go Couter page</Text>
            </Link>
        </View>
    )
}



const styles=StyleSheet.create({
    container:{
        padding:10,
        flex:1,
        alignItems:"center",
        gap:20,
    },
    inputContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:16,
        width:300,
    },
    inputElement:{
        borderWidth:1,
        borderRadius:5,
        padding:5,
        marginRight:16,
        flex:3
    },
    addButton:{
        backgroundColor:"gray",
        padding:5,
        borderRadius:5,
        color:"red",
        textTransform:"uppercase",
        fontWeight:"600"
    },
    itemContainer:{
        gap:10,
        alignItems:"flex-start",
        width:300,
        paddingHorizontal:10
    },
    item:{
        flexDirection:'row',
        width:"100%",
        justifyContent:"space-between",
        alignItems:"center",
        gap:10
    },
    deleteButton:{
        backgroundColor:"gray",
        padding:10,
        paddingVertical:5,
        borderRadius:5,
    },
    linkButton:{
        backgroundColor:"black",
        borderRadius:5,
        color:'white',
        padding:5
    }
})
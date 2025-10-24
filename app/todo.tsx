import { useTodos } from "@/context";
import { Link } from 'expo-router';
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import TodoItemRC from "@/components/TodoItem";


export default function AboutScreen(){

    const [inputText,setInput] = useState("");
    const {todos, addTodo, removeTodo, editTodo} = useTodos();
    
    const AddItem=(content:string)=>{
        if(content) addTodo(content);
        setInput("");
    }
    const RemoveItem=(id:number)=>{
        removeTodo(id);
    }
    const EditItem=(id:number, content:string)=>{
        editTodo(id,content);
    }

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
                    data={todos}
                    renderItem={({item})=><TodoItemRC item={item}  addTodo ={()=>AddItem(inputText)} removeTodo={RemoveItem}/>}
                    keyExtractor={(item)=>item.id.toString()}
                /> */}
                {todos.length ? 
                todos.map( (v) =>(<TodoItemRC item={v}  removeTodo={()=>RemoveItem(v.id)}  key={v.id}/>)) 
                : ""}
            </View>
            <Link href={"/"} style={styles.linkButton}>
                <Text>Go Counter page</Text>
            </Link>
        </View>
    )
}
/*
// :React.FC<ItemPromp>
    const ItemComponent=({item,RemoveItem}:ItemPromp)=>(
            <View style={[styles.item,
            {borderBottomWidth:1,borderColor: '#e6bbbbff',paddingBottom:3}]}>
                <Text>{item.id}: {item.content}</Text>
                <TouchableOpacity onPress={()=>null} style={styles.deleteButton}>
                    <AntDesign name="edit" size={20} color="green" />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>RemoveItem(item.id)}
                    style={styles.deleteButton}
                    >
                    <AntDesign name="delete" size={20} color="red"  />
                </TouchableOpacity>
            </View>
        )

*/


const styles=StyleSheet.create({
    container:{
        padding:10,
        flex:1,
        alignItems:"center",
        gap:20,
        color:"#"
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
        boxSizing:"border-box",
        backgroundColor:"white",
        borderWidth:1,
        borderStyle:"solid",
        padding:5,
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
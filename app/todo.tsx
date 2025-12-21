import TodoItemRC from "@/components/Todo/TodoItem";
import { useTodos } from "@/context/todo/index";
import { Link } from 'expo-router';
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


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
        editTodo(id,content,todos.filter((v)=>v.id===id)[0].completed);
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
                <TouchableOpacity style={styles.addButton} onPress={()=>AddItem(inputText)}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
            {/* <ScrollView style={styles.itemContainer}> */}
                <FlatList
                    data={todos}
                    renderItem={({item}) => <TodoItemRC item={item} removeTodo={RemoveItem} editTodo={EditItem} />}
                    keyExtractor={(item)=>item.id.toString()}
                    style={{gap:10}}
                />
                {/* {todos.length ? 
                todos.map( (v) =>(<TodoItemRC item={v}  removeTodo={()=>RemoveItem(v.id)} editTodo={EditItem}  key={v.id}/>)) 
                : ""} */}
            {/* </ScrollView> */}
            <Link href={"/"}  asChild>
                <TouchableOpacity style={styles.linkButton}>
                    <Text style={{color:"white"}}>Go Counter page</Text>
                </TouchableOpacity>
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
        height:500,
        // alignItems:"flex-start",
        // width:300,
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
        padding:5
    }
})
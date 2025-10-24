import { todoContent } from '@/types';
import React,{ useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


interface Prop{
    todo:todoContent,
    changeView:(isView:boolean)=>void,
    changeTodoContent:(id:number,content:string,completed:boolean)=>void
}


function EditTodo({todo,changeTodoContent,changeView}:Prop) {
    const [content,setContent]=useState<string>(todo.content);
    const editContent=()=>{
        changeTodoContent(todo.id,content,todo.completed);
        changeView(false);
    }
    return (
        <View style={styles.container}>
            <Text>{todo.id}: </Text>
            <TextInput onChangeText={(newText)=>setContent(newText)} value={content} style={styles.inputElement}/>
            <View style={styles.buttons}>
            <TouchableOpacity onPress={()=>editContent()} 
                style={[styles.button,styles.editButton]}>
                <Text>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>changeView(false)} 
                style={[styles.button,styles.deleteButton]}>
                <Text>Close</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default EditTodo;

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        width:"100%",
        justifyContent:"space-between",
        alignItems:"center",
        gap:10,
        borderBottomWidth:1,
        borderColor: '#e6bbbbff',
        paddingBottom:3
    },
    inputElement:{
        borderWidth:1,
        borderRadius:5,
        padding:5,
        marginRight:16,
        flex:3
    },
    buttons:{
      flexDirection:'row',
      gap:10,
    },
    button:{
        boxSizing:"border-box",
        backgroundColor:"white",
        borderWidth:1,
        borderStyle:"solid",
        padding:5,
        paddingVertical:5,
        borderRadius:5,
    },
    deleteButton:{

    },
    editButton:{

    }
})
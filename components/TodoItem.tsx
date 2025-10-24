import { todoContent } from '@/types';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ItemPromp{
    item:todoContent,
    removeTodo:(id:number)=>void
}

const TodoItemRC:React.FC<ItemPromp>=({item,removeTodo})=>{
  
  return (<View style={styles.container}>
          <Text>{item.id}: {item.content}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={()=>null} 
              style={[styles.button,styles.editButton]}>
                <AntDesign name="edit" size={20} color="green" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>removeTodo(item.id)} 
              style={[styles.button,styles.deleteButton]}>
                <AntDesign name="delete" size={20} color="red"  />
            </TouchableOpacity>
          </View>
      </View>
    );

};

export default TodoItemRC;


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
import TodoItem from "@/components/Todo/TodoItem";
import { useTodos } from "@/context/todo";
import { Link } from 'expo-router';
import { useRef, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function AboutScreen() {
	const [textInput, setTextInput] = useState<string>("");
	const textInputRef = useRef<TextInput>(null);
	const { todos, addTodo} = useTodos();
	const addItem = () => {
		if (textInput) addTodo(textInput);
		setTextInput("");
	}
	const onChangeText = (newText:string) =>{
		setTextInput(newText);
		if(textInputRef.current && textInput.length>5){
			// textInputRef.current.setNativeProps({style:{backgroundColor:'green'}});
		}
	}
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					onChangeText={onChangeText}
					value={textInput}
					placeholder="Input task ..."
					placeholderTextColor={"gray"}
					style={styles.inputElement}
				/>
				<TouchableOpacity style={styles.addButton} onPress={addItem}>
					<Text>Add</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={todos}
				renderItem={({ item }) => <TodoItem id={item[0]} item={item[1]} />}
				keyExtractor={(item) => item[0]}
				style={{ gap: 10 }}
			/>
			<Link href={"/"} asChild>
				<TouchableOpacity style={styles.linkButton}>
					<Text style={{ color: "white" }}>Go Counter page</Text>
				</TouchableOpacity>
			</Link>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flex: 1,
		alignItems: "center",
		gap: 20,
		color: "black"
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 16,
		width: 300,
	},
	inputElement: {
		borderWidth: 1,
		borderRadius: 5,
		padding: 5,
		marginRight: 16,
		flex: 3
	},
	addButton: {
		backgroundColor: "gray",
		padding: 5,
		borderRadius: 5,
		textTransform: "uppercase",
		fontWeight: "600",
		color:"white",
	},
	itemContainer: {
		gap: 10,
		height: 500,
		// alignItems:"flex-start",
		// width:300,
		paddingHorizontal: 10
	},
	item: {
		flexDirection: 'row',
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		gap: 10
	},
	deleteButton: {
		boxSizing: "border-box",
		backgroundColor: "white",
		borderWidth: 1,
		borderStyle: "solid",
		padding: 5,
		paddingVertical: 5,
		borderRadius: 5,
	},
	linkButton: {
		backgroundColor: "black",
		borderRadius: 5,
		padding: 5
	}
})
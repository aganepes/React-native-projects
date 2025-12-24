import TodoItem from "@/components/todo/TodoItem";
import { useTheme } from "@/context/theme";
import { useTodos } from "@/context/todo";
import { Link } from 'expo-router';
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function App() {
	const [textInput, setTextInput] = useState<string>("");
	const { todos, addTodo } = useTodos();
	const { theme } = useTheme()!;

	const addItem = () => {
		if (textInput) addTodo(textInput);
		setTextInput("");
	}
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={[styles.container, { backgroundColor: theme.background }]}>

					<View style={[styles.inputContainer, { backgroundColor: theme.background }]}>
						<TextInput
							onChangeText={(newText: string) => {
								setTextInput(newText);
							}}
							value={textInput}
							placeholder="Input task ..."
							placeholderTextColor={"gray"}
							style={textInput.length > 5 ? [styles.inputElement, { backgroundColor: 'green' }] : [styles.inputElement, { color: theme.text }]}
						/>
						<TouchableOpacity style={styles.addButton} onPress={addItem}>
							<Text style={{ color: theme.text }}>Add</Text>
						</TouchableOpacity>
					</View>
					<FlatList
						data={todos}
						renderItem={({ item }) => <TodoItem id={item[0]} item={item[1]} />}
						keyExtractor={(item) => item[0]}
						style={[{ gap: 10 }, { backgroundColor: theme.background }]}
					/>
					<Link href={"/"} asChild>
						<TouchableOpacity style={styles.linkButton}>
							<Text style={{ color: 'white' }}>Go Counter page</Text>
						</TouchableOpacity>
					</Link>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flex: 1,
		alignItems: "center",
		gap: 20,
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 16,
		width: 300,
	},
	inputElement: {
		height: 40,
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
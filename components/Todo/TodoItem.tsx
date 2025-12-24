import { todoContent } from '@/types';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import { Pressable, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import EditTodo from './EditTodo';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useTodos } from '@/context/todo';
import { useTheme } from '@/context/theme';

interface ItemProp {
	id: string;
	item: todoContent;
}

const TodoItem: React.FC<ItemProp> = ({ id, item }) => {
	const [isViewEditElement, setIsViewEditElement] = useState<boolean>(false);
	const [isClick, setIsClick] = useState<boolean>(item.completed);
	const { removeTodo } = useTodos();
	const {theme} = useTheme()!
	return !isViewEditElement ? (
		<View style={styles.container}>
			<Pressable onPress={() => setIsClick(!isClick)} style={styles.checkBoxContainer}>
				{isClick ? (
					<Feather name='check-circle' color="green" size={20} />
				) : (
					<MaterialIcons name='radio-button-unchecked' color={theme.text} size={20} />
				)
				}
				<Text style={[styles[isClick ? "checked" : "notChecked"], styles.text,{color:theme.text}]}>{"  "}{item.content}</Text>
			</Pressable>
			<View style={styles.buttons}>
				<TouchableOpacity onPress={() => setIsViewEditElement(!isViewEditElement)}
					style={[styles.button, styles.editButton]}>
					<AntDesign name="edit" size={20} color="green" />
				</TouchableOpacity>
				<TouchableOpacity onPress={async () => await removeTodo(id)}
					style={[styles.button, styles.deleteButton]}>
					<AntDesign name="delete" size={20} color="red" />
				</TouchableOpacity>
			</View>
		</View>
	) : (
		<EditTodo changeView={setIsViewEditElement} id={id} />
	);

};

export default TodoItem;


const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		gap: 10,
		borderBottomWidth: 1,
		borderColor: '#e6bbbbff',
		paddingBottom: 3
	},
	checkBoxContainer: { flexDirection: "row", gap: 10 },
	checked: {
		textDecorationStyle: 'solid',
		textDecorationLine: "line-through",
		fontSize: 18
	},
	notChecked: {
		fontSize: 18
	},
	text: {
		transitionDelay: "500ms",
		transitionTimingFunction: "ease-in-out",
		transitionProperty: "all"
	},
	buttons: {
		flexDirection: 'row',
		gap: 10,
	},
	button: {
		boxSizing: "border-box",
		backgroundColor: "white",
		borderWidth: 1,
		borderStyle: "solid",
		padding: 5,
		paddingVertical: 5,
		borderRadius: 5,
	},
	deleteButton: {

	},
	editButton: {

	}
})
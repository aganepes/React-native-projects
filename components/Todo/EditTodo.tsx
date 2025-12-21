import { todoContent } from '@/types';
import AsyncStorageService from '@/services/storage';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


interface Props {
	id: string,
	changeView: (isView: boolean) => void,
	changeTodo: (id: string, todo:Partial<todoContent>) => void
}


function EditTodo({ id, changeTodo, changeView }: Props) {
	const inputRef = useRef<TextInput>(null)
	const [content, setContent] = useState<string>('');
	useEffect(() => {
		(async () => {
			const todo = await AsyncStorageService.getTodoById('todo', id);
			if (todo) {
				setContent(todo.content);
			}
		}
		)()
	}, [id]);
	const editContent = () => {
		if(inputRef.current && inputRef.current.value)
			changeTodo(id, {content:inputRef.current.value});
		changeView(false);
	}
	return (
		<View style={styles.container}>
			<TextInput  ref={inputRef} style={styles.inputElement} value={content}/>
			<View style={styles.buttons}>
				<TouchableOpacity onPress={editContent}
					style={[styles.button, styles.editButton]}>
					<Text>Save</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => changeView(false)}
					style={[styles.button, styles.deleteButton]}>
					<Text>Close</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default EditTodo;

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
	inputElement: {
		borderWidth: 1,
		borderRadius: 5,
		padding: 5,
		marginRight: 16,
		flex: 3
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuid } from 'uuid';
import { todoContent } from "@/types";

namespace  AsyncStorageService{

	export const getTodos = async (key: string): Promise<Record<string,todoContent> | undefined> => {
		try {
			const data = await AsyncStorage.getItem(key);
			if (!data)
				throw new Error(`There is no data for this ${key} key.`);
			return JSON.parse(data);
		} catch (error: any) {
			if (error instanceof Error) {
				console.error(error.message);
			}
		}
	}

	export const getTodoById = async (key: string,id:string): Promise<todoContent|undefined> => {
		try {
			const data = await AsyncStorage.getItem(key);
			if (!data)
				throw new Error(`There is no data for this ${key} key.`);
			const todos = JSON.parse(data);
			const selfTodo = todos[id];
			if(!selfTodo)
				throw new Error(`This key ${key} does not contain this ${id} id.`);
			return selfTodo;
		} catch (error: any) {
			if (error instanceof Error) {
				console.error(error.message);
			}
		}
	}

	export const setTodo = async (key:string,content: string): Promise<void> => {
		try {
			const data = await AsyncStorage.getItem(key);
			if (!data)
				throw new Error(`There is no data for this ${key} key.`);

			const todos = JSON.parse(data) as Record<string,todoContent> ;

			const todosEntries = Object.entries(todos) ;
			const todoIndex = todosEntries.findIndex((todo)=>todo[1].content===content);
			if(todoIndex)
				throw new Error(`This content exists.`);

			todos[uuid()]={content,completed:false};

			await AsyncStorage.setItem(key,JSON.stringify(todos));
		} catch (error: any) {
			if (error instanceof Error) {
				console.error(error.message);
			}
		}
	}
	export const updateTodoById = async (key:string,id: string,todo:Partial<todoContent>): Promise<void> => {
		try {
			const data = await AsyncStorage.getItem(key);

			if (!data)
				throw new Error(`There is no data for this ${key} key.`);

			const todos = JSON.parse(data) as Record<string,todoContent>;
			if(!todos[id])
				throw new Error('This ID does not exist.');

			todos[id] = {...todos[id],...todo};

			await AsyncStorage.setItem(key,JSON.stringify(todos));
		} catch (error: any) {
			if (error instanceof Error) {
				console.error(error.message);
			}
		}
	}
}

export default AsyncStorageService;
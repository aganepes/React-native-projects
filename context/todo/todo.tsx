import { type todoContent } from '../../types';
import AsyncStorageService from '@/services/storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface TodoContextType {
	todos: [string, todoContent][];
	getTodo: (id: string) => Promise<todoContent | undefined>;
	addTodo: (content: string) => Promise<void>;
	removeTodo: (id: string) => Promise<void>;
	editTodo: (id: string, todo: Partial<todoContent>) => Promise<void>;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

interface Props {
	children: ReactNode;
}

export const TodoProvider: React.FC<Props> = ({ children }: Props) => {
	const [todos, setTodos] = useState<[string, todoContent][]>([]);
	const refreshTodo = async () => {
		const todos = await AsyncStorageService.getTodos('todos');
		if (todos && Object.keys(todos).length) {
			setTodos(Object.entries(todos));
		}else{
			setTodos([]);
		}
	}
	useEffect(() => {
		refreshTodo();
	}, []);

	const getTodo = async (id: string): Promise<todoContent | undefined> => {
		const todo = await AsyncStorageService.getTodoById('todos', id);
		if (todo)
			return todo
	}
	const addTodo = async (content: string) => {
		await AsyncStorageService.setTodo('todos', content);
		refreshTodo();
	};

	const removeTodo = async (id: string) => {
		await AsyncStorageService.removeTodoById('todos', id);
		refreshTodo();
	};

	const editTodo = async (id: string, todo: Partial<todoContent>) => {
		await AsyncStorageService.updateTodoById('todos', id, todo);
		refreshTodo();
	}

	return (
		<TodoContext.Provider value={{ todos, addTodo, removeTodo, editTodo, getTodo }}>
			{children}
		</TodoContext.Provider>
	);
};

export const useTodos = () => {
	const context = useContext(TodoContext);
	if (context === undefined) {
		throw new Error('useTodos must be used within a TodoProvider');
	}
	return context;
};
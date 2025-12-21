import { type todoContent } from '../../types';

import React, { createContext, ReactNode, useContext, useState } from 'react';

interface TodoContextType {
    todos: todoContent[];
    addTodo: (content: string) => void;
    removeTodo: (id: number) => void;
    editTodo:(id:number, content:string,completed:boolean) =>void;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

interface Props {
    children: ReactNode;
}

export const TodoProvider: React.FC<Props> = ({ children }) => {
    const [todos, setTodos] = useState<todoContent[]>([]);

    const addTodo = (content: string) => {
        const item: todoContent = { id: todos.length + 1, content,completed:false };
        if (content) setTodos(items => [...items, item]);
    };

    const removeTodo = (id: number) => {
        setTodos(items => items.filter(item => item.id !== id));
    };
    const editTodo = (id: number, content: string,completed:boolean) => {
        setTodos(items => items.map(item => item.id === id ? { id:item.id, content, completed} : item));
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, editTodo }}>
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
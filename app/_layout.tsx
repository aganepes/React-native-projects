import { TodoProvider } from "@/context/todo";
import { Stack } from "expo-router";

export default function RootLayout(){
    return (
        <TodoProvider>
        <Stack>
            <Stack.Screen name="index" options={{headerTitle:"Couter"}} />
            <Stack.Screen name="todo" options={{headerTitle:"ToDo List"}} />
        </Stack>
        </TodoProvider>
    )
}
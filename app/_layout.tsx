import { TodoProvider } from "@/context/todo";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
export default function RootLayout() {
	return (
		<TodoProvider>
			<Stack>
				<Stack.Screen name="index" options={{ headerTitle: "Counter" }} />
				<Stack.Screen name="todo" options={{ headerTitle: "ToDo List" }} />
			</Stack>
			<StatusBar barStyle="dark-content" />
		</TodoProvider>
	)
}
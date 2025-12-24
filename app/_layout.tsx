import { ThemeProvider } from "@/context/theme";
import { TodoProvider } from "@/context/todo";
import { Stack } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";


export default function RootLayout() {
	const theme = useColorScheme();
	return (
		<ThemeProvider>
			<TodoProvider>
				<Stack>
					<Stack.Screen name="index" options={{ headerTitle: "Counter" }} />
					<Stack.Screen name="todo" options={{ headerTitle: "ToDo List" }} />
				</Stack>
				<StatusBar barStyle={theme === "dark" ? "dark-content" : "light-content"} />
			</TodoProvider>
		</ThemeProvider>
	)
}
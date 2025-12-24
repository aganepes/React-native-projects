import { Link } from 'expo-router';
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, Text, TouchableOpacity, View, type ColorValue } from "react-native";

const urlImage = "https://codebrahma.com/static/8c27233fcb0ff4aa1bf135f164c98dbd/41099/brickwall.jpg";


type ButtonProps = {
	bgColor?: ColorValue,
	title: string,
	onPress: (() => void) | undefined
}

function MyCustomButton({ bgColor, title, onPress }: ButtonProps) {
	return (
		<TouchableOpacity
			style={[styles.counterButton, { backgroundColor: (!bgColor ? "lightblue" : bgColor) }]}
			onPress={onPress}>
			<Text style={{ color: "black" }}>{title}</Text>
		</TouchableOpacity>
	)
}

export default function HomeScreen() {
	const [counter, setCounter] = useState<number>(0);
	return (<>
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.Container} >
					<Image source={{ uri: urlImage }} style={styles.image} />
					<View style={styles.contentContainer}>
						<Text style={{ fontSize: 24, marginTop: 16 }}>Counter: {counter}</Text>
						<Text style={styles.subtitle}>Click buttons to change the counter.</Text>
						<View style={styles.buttonContainer}>
							<MyCustomButton title={"Increment +"} onPress={() => setCounter(counter => counter + 1)} />
							<MyCustomButton title={"Decrement -"} bgColor={"pink"} onPress={() => setCounter(counter => counter - 1)} />
						</View>
					</View>
					<Link href={"/todo"} asChild >
						<TouchableOpacity style={styles.linkButton}>
							<Text style={styles.linkText}>Go To Do list page</Text>
						</TouchableOpacity>
					</Link>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	</>
	)
}

const styles = StyleSheet.create({
	Container: {
		height: 300,
		alignItems: "center",
		paddingVertical: 16
	},
	contentContainer: {
		alignSelf: "flex-start",
		paddingHorizontal: 16
	},
	counterButton: {
		fontSize: 16,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
		padding: 5,
		height: 40,
	},
	subtitle: {
		color: "darkgray",
		fontSize: 18,
	},
	image: {
		boxSizing: "border-box",
		width: "95%",
		height: 150,
		borderRadius: 5
	},
	button: {
		fontSize: 16,
		borderRadius: 5,
		backgroundColor: "black",
		padding: 5,
		color: "white",
		width: 150,
		alignItems: "center"
	},

	buttonContainer: {
		flex: 1,
		flexDirection: "row",
		gap: 10,
		marginVertical: 16
	},
	linkButton: {
		backgroundColor: "black",
		borderRadius: 5,
		padding: 10,
		minWidth: 150,
		alignItems: 'center',
		marginTop: 10
	},
	linkText: {
		color: "white",
		fontSize: 16,
		fontWeight: '500'
	}
})
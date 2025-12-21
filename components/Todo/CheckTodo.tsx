import React, { useState } from 'react';
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { View, Pressable, StyleSheet, Text } from 'react-native';
import { todoContent } from '@/types';

type Props = {
	id:string;
	todo:todoContent;
}
function ClickBox({ id, todo }: Props) {
	const {completed,content} = todo;
	const [isClick, setIsClick] = useState<boolean>(completed);
	return (
		<View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
			<Pressable onPress={() => setIsClick(!isClick)}>
				{isClick ? (
					<Feather name='check-circle' color="green" size={20} />
				) : (
					<MaterialIcons name='radio-button-unchecked' color="black" size={20} />
				)}
				<Text style={[styles[isClick ? "checked" : "notCliched"], styles.text]}>{id}:{content}</Text>
			</Pressable>
		</View>
	)
}

export default ClickBox;

const styles = StyleSheet.create({
	checked: {
		textDecorationStyle: 'solid',
		textDecorationLine: "line-through",
		fontSize: 18
	},
	notCliched: {
		fontSize: 18
	},
	text: {
		transitionDelay: "500ms",
		transitionTimingFunction: "ease-in-out",
		transitionProperty: "all"
	}
})
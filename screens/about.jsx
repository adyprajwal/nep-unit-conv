import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/globalStyles";

export default function About() {
	return (
		<View style={globalStyles.container}>
			<Text>Nepali Unit Converter App</Text>
			<Text> Version: 0.0.1</Text>
		</View>
	);
}

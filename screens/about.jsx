import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function About() {
	return (
		<View style={globalStyles.container}>
			<Text>Nepali Unit Converter App</Text>
			<Text> Version: 0.7</Text>
		</View>
	);
}

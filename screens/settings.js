import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function Settings() {
	return (
		<View style={globalStyles.container}>
			<StatusBar backgroundColor="#ddd" />
			<Text>This is Settings Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({});

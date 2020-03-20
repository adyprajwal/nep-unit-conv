import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function About() {
	return (
		<View style={globalStyles.container}>
			<Text style={styles.titleText}>Nepali Unit Converter</Text>
			<Text style={styles.versionText}> Version: 1.0</Text>
			<Text>
				This app intends to simplify the conversion of traditional
				Nepali Measurement Units into well known metric as well as
				imperial system.
			</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	titleText: {
		fontWeight: "bold",
		fontSize: 18
	},
	versionText: {
		fontSize: 18
	}
});

import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function About() {
	return (
		<View style={globalStyles.container}>
			<StatusBar backgroundColor="#ddd" />
			<Text style={styles.titleText}>Nepali Unit Converter</Text>
			<Text style={styles.versionText}> Version: 1.1.0</Text>
			<Text style={styles.descriptionText}>
				This app intends to simplify the conversion of traditional
				Nepali Measurement Units into well known metric as well as
				imperial system.
			</Text>
			<View style={styles.credits}>
				<Text style={styles.creditsText}>Powered By</Text>
				<Text style={[styles.creditsText, { fontWeight: "bold" }]}>
					© 2020 Magic Cube Engineering
				</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	titleText: {
		fontFamily: "Exo2-Bold",
		color: "#444",
		fontSize: 19,
		alignSelf: "center",
	},
	versionText: {
		fontSize: 15,
		color: "#444",
		alignSelf: "center",
		fontFamily: "Exo2-Bold",
	},
	descriptionText: {
		fontFamily: "Exo2-Regular",
		color: "#555",
		marginTop: 30,
		paddingHorizontal: 15,
		textAlign: "justify",
	},
	credits: {
		fontFamily: "Exo2-Regular",
		color: "#555",
		marginTop: 50,
	},
	creditsText: {
		fontFamily: "Exo2-Regular",
		color: "#555",
		alignSelf: "center",
	},
});

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function About() {
	return (
		<View style={globalStyles.container}>
			<Text style={styles.titleText}>Nepali Unit Converter</Text>
			<Text style={styles.versionText}> Version: 1.0</Text>
			<Text style={styles.descriptionText}>
				This app intends to simplify the conversion of traditional
				Nepali Measurement Units into well known metric as well as
				imperial system.
			</Text>
			<View style={styles.credits}>
				<Text style={styles.creditsText}>Powered By</Text>
				<Text style={[styles.creditsText, { fontWeight: "bold" }]}>
					© Magic Cube Engineering 2020
				</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	titleText: {
		fontFamily: "exo2-bold",
		fontSize: 19,
		alignSelf: "center"
	},
	versionText: {
		fontSize: 15,
		alignSelf: "center",
		fontFamily: "exo2-bold"
	},
	descriptionText: {
		fontFamily: "exo2-regular",
		marginTop: 30,
		paddingHorizontal: 15,
		textAlign: "justify"
	},
	credits: {
		marginTop: 50
	},
	creditsText: {
		alignSelf: "center"
	}
});

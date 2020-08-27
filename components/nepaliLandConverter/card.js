import React from "react";
import { View, StyleSheet } from "react-native";

export default function Card(props) {
	return (
		<View style={styles.card}>
			<View style={styles.cardContent}>{props.children}</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 4,
		backgroundColor: "#fff",
		elevation: 1,
		marginBottom: 10,
	},
	cardContent: {
		marginHorizontal: 15,
		marginVertical: 15,
	},
});

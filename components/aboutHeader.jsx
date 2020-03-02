import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function AboutHeader({ navigation, title }) {
	const goToPreviousScreen = () => {
		navigation.goBack();
	};
	return (
		<View style={styles.header}>
			<TouchableOpacity onPress={goToPreviousScreen}>
				<MaterialIcons
					name="arrow-back"
					size={28}
					style={styles.icon}
				/>
			</TouchableOpacity>

			<View style={styles.headerTitle}>
				<Text style={styles.headerText}>{title}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},
	headerTitle: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 15
	},
	headerText: {
		fontSize: 20,
		color: "#000"
	},
	icon: {
		color: "#000"
	}
});

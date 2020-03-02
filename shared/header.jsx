import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
	const openMenu = () => {
		navigation.openDrawer();
	};
	return (
		<View style={styles.header}>
			<TouchableOpacity onPress={openMenu}>
				<Entypo name="menu" size={28} style={styles.icon} />
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
		color: "#fff"
	},
	icon: {
		color: "#fff"
	}
});

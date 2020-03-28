import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { globalStyles } from "../../styles/globalStyles";

export default function Header({ navigation, title }) {
	const openMenu = () => {
		navigation.openDrawer();
	};
	return (
		<View style={globalStyles.header}>
			<TouchableOpacity onPress={openMenu}>
				<Entypo name="menu" size={28} style={globalStyles.headerIcon} />
			</TouchableOpacity>

			<View style={globalStyles.headerTitle}>
				<Text style={globalStyles.headerText}>{title}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});

import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { globalStyles } from "../../styles/globalStyles";

export default function SecondHeader({ navigation, title }) {
	const goToPreviousScreen = () => {
		navigation.goBack();
	};
	return (
		<View style={globalStyles.header}>
			<TouchableOpacity onPress={goToPreviousScreen}>
				<MaterialIcons
					name="arrow-back"
					size={28}
					style={{ ...globalStyles.headerIcon, ...styles.headerIcon }}
				/>
			</TouchableOpacity>

			<View style={globalStyles.headerTitle}>
				<Text
					style={{ ...globalStyles.headerText, ...styles.headerText }}
				>
					{title}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	headerText: {
		color: "#000"
	},
	headerIcon: {
		color: "#424242"
	}
});

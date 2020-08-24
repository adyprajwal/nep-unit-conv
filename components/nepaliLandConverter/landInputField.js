import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function LandInputField({ unit, state, handleTextChange }) {
	const renderRopani = () => {
		if (unit == "rapd") {
			return (
				<View style={styles.unitRow}>
					<View style={styles.unitBox}>
						<TextInput
							style={styles.inputField}
							value={state.ropani}
							onChangeText={(text) =>
								handleTextChange(text, { name: "ropani" })
							}
							placeholder="0"
							keyboardType={"numeric"}
						/>
						<Text style={styles.inputFieldLabel}>Ropani</Text>
					</View>
					<View style={styles.unitBox}>
						<TextInput
							style={styles.inputField}
							value={state.aana}
							onChangeText={(text) =>
								handleTextChange(text, { name: "aana" })
							}
							placeholder="0"
							keyboardType={"numeric"}
						/>
						<Text style={styles.inputFieldLabel}>Aana</Text>
					</View>
					<View style={styles.unitBox}>
						<TextInput
							style={styles.inputField}
							value={state.paisa}
							onChangeText={(text) =>
								handleTextChange(text, { name: "paisa" })
							}
							placeholder="0"
							keyboardType={"numeric"}
						/>
						<Text style={styles.inputFieldLabel}>Paisa</Text>
					</View>
					<View style={styles.unitBox}>
						<TextInput
							style={styles.inputField}
							value={state.daam}
							onChangeText={(text) =>
								handleTextChange(text, { name: "daam" })
							}
							placeholder="0"
							keyboardType={"numeric"}
						/>
						<Text style={styles.inputFieldLabel}>Daam</Text>
					</View>
				</View>
			);
		}
	};
	return <View>{renderRopani()}</View>;
}
const styles = StyleSheet.create({
	unitRow: {
		flexDirection: "row",
	},
	unitBox: {
		flex: 1,
		marginHorizontal: 5,
		flexDirection: "column",
	},
	inputField: {
		padding: 7,
		fontFamily: "sans-serif-medium",
		fontSize: 18,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "#fff",
	},
	inputFieldLabel: {
		alignSelf: "center",
		fontFamily: "Exo2-Regular",
		fontSize: 17,
	},
});

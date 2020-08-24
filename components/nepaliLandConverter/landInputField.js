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
							onChange={(evt) =>
								handleTextChange(evt, { name: "ropani" })
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
							onChange={(evt) =>
								handleTextChange(evt, { name: "aana" })
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
							onChange={(evt) =>
								handleTextChange(evt, { name: "paisa" })
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
							onChange={(evt) =>
								handleTextChange(evt, { name: "daam" })
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

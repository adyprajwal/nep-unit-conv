import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function LandInputField({ unit, state, handleTextChange }) {
	const renderInputField = (unit) => {
		switch (unit) {
			case "rapd": {
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
			case "bkd": {
				return (
					<View style={styles.unitRow}>
						<View style={styles.unitBox}>
							<TextInput
								style={styles.inputField}
								value={state.bigha}
								onChangeText={(text) =>
									handleTextChange(text, { name: "bigha" })
								}
								placeholder="0"
								keyboardType={"numeric"}
							/>
							<Text style={styles.inputFieldLabel}>Bigha</Text>
						</View>
						<View style={styles.unitBox}>
							<TextInput
								style={styles.inputField}
								value={state.kattha}
								onChangeText={(text) =>
									handleTextChange(text, { name: "kattha" })
								}
								placeholder="0"
								keyboardType={"numeric"}
							/>
							<Text style={styles.inputFieldLabel}>Kattha</Text>
						</View>
						<View style={styles.unitBox}>
							<TextInput
								style={styles.inputField}
								value={state.dhur}
								onChangeText={(text) =>
									handleTextChange(text, { name: "dhur" })
								}
								placeholder="0"
								keyboardType={"numeric"}
							/>
							<Text style={styles.inputFieldLabel}>Dhur</Text>
						</View>
					</View>
				);
			}
			case "sqmtr": {
				return (
					<View style={{ flexDirection: "row" }}>
						<TextInput
							style={[
								styles.inputField,
								{ flex: 2, marginRight: 20 },
							]}
							value={state.sqmtr}
							onChangeText={(text) =>
								handleTextChange(text, { name: "sqmtr" })
							}
							placeholder="0"
							keyboardType={"numeric"}
						/>
						<Text style={[styles.inputFieldLabel, { flex: 1 }]}>
							Square Meter
						</Text>
					</View>
				);
			}
			case "sqft": {
				return (
					<View style={{ flexDirection: "row" }}>
						<TextInput
							style={[
								styles.inputField,
								{ flex: 2, marginRight: 20 },
							]}
							value={state.sqft}
							onChangeText={(text) =>
								handleTextChange(text, { name: "sqft" })
							}
							placeholder="0"
							keyboardType={"numeric"}
						/>
						<Text style={[styles.inputFieldLabel, { flex: 1 }]}>
							Square Feet
						</Text>
					</View>
				);
			}
		}
	};
	return <View>{renderInputField(unit)}</View>;
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

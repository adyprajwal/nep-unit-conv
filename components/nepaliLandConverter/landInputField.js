import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function LandInputField({ unit, values, handleTextChange }) {
	const renderInputField = (unit) => {
		switch (unit) {
			case "rapd": {
				return (
					<View style={styles.unitRow}>
						<View style={styles.unitBox}>
							<TextInput
								style={styles.inputField}
								defaultValue={values.ropani}
								onChangeText={(text) =>
									handleTextChange(text, "ropani")
								}
								placeholder="0"
								keyboardType={"numeric"}
							/>
							<Text style={styles.inputFieldLabel}>Ropani</Text>
						</View>
						<View style={styles.unitBox}>
							<TextInput
								style={styles.inputField}
								defaultValue={values.aana}
								onChangeText={(text) =>
									handleTextChange(text, "aana")
								}
								placeholder="0"
								keyboardType={"numeric"}
							/>
							<Text style={styles.inputFieldLabel}>Aana</Text>
						</View>
						<View style={styles.unitBox}>
							<TextInput
								style={styles.inputField}
								defaultValue={values.paisa}
								onChangeText={(text) =>
									handleTextChange(text, "paisa")
								}
								placeholder="0"
								keyboardType={"numeric"}
							/>
							<Text style={styles.inputFieldLabel}>Paisa</Text>
						</View>
						<View style={styles.unitBox}>
							<TextInput
								style={styles.inputField}
								defaultValue={values.daam}
								onChangeText={(text) =>
									handleTextChange(text, "daam")
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
								defaultVvalue={values.bigha}
								onChangeText={(text) =>
									handleTextChange(text, "bigha")
								}
								placeholder="0"
								keyboardType={"numeric"}
							/>
							<Text style={styles.inputFieldLabel}>Bigha</Text>
						</View>
						<View style={styles.unitBox}>
							<TextInput
								style={styles.inputField}
								defaultValue={values.kattha}
								onChangeText={(text) =>
									handleTextChange(text, "kattha")
								}
								placeholder="0"
								keyboardType={"numeric"}
							/>
							<Text style={styles.inputFieldLabel}>Kattha</Text>
						</View>
						<View style={styles.unitBox}>
							<TextInput
								style={styles.inputField}
								defaultValue={values.dhur}
								onChangeText={(text) =>
									handleTextChange(text, "dhur")
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
							defaultValue={values.sqmtr}
							onChangeText={(text) =>
								handleTextChange(text, "sqmtr")
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
							defaultValue={values.sqft}
							onChangeText={(text) =>
								handleTextChange(text, "sqft")
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
		color: "gray",
		fontSize: 15,
	},
});

import React, { useState } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export default function LandInputSelection({ state, handleUnitChange }) {
	return (
		<View style={styles.inputUnitView}>
			<View style={styles.inputUnitLabel}>
				<Text
					style={{
						fontFamily: "Exo2-Bold",
						fontSize: 17,
						color: "gray",
					}}
				>
					Input Unit
				</Text>
			</View>
			<View style={styles.inputUnitselectorView}>
				<RNPickerSelect
					onValueChange={handleUnitChange}
					items={[
						{
							label: "Ropani | Aana | Paisa | Daam",
							value: "rapd",
						},
						{
							label: "Bigha | Kattha | Dhur",
							value: "bkd",
						},
						{ label: "Square Meter", value: "sqmtr" },
						{ label: "Square Feet", value: "sqft" },
					]}
					placeholder={{}}
					style={pickerSelectStyles}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputUnitView: {
		flexDirection: "row",
		marginBottom: 20,
	},
	inputUnitLabel: {
		flex: 1,
		marginRight: 2,
		alignItems: "center",
		justifyContent: "center",
	},
	inputUnitselectorView: {
		flex: 3,
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "#ddd",
		borderRadius: 4,
		marginLeft: 2,
	},
});
const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontFamily: "Exo2-Regular",
	},
	inputAndroid: {
		fontFamily: "Exo2-Regular",
	},
});

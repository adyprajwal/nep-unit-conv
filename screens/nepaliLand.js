import React, { useState } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import RNPickerSelect from "react-native-picker-select";

export default function NepaliLand() {
	return (
		<View style={globalStyles.container}>
			<StatusBar backgroundColor="#b05643" />
			<View style={styles.inputView}>
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
							onValueChange={(value) => console.log(value)}
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
				<View style={styles.inputTextView}></View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	inputView: {
		padding: 5,
		backgroundColor: "white",
		borderRadius: 4,
		elevation: 1,
	},
	inputUnitView: {
		flexDirection: "row",
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
	inputTextView: {},
});
const pickerSelectStyles = StyleSheet.create({
	inputIOS: {},
	inputAndroid: {},
});

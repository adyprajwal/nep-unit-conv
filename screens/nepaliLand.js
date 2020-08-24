import React, { useState } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Card from "../components/nepaliLandConverter/card";
import LandInputSelection from "../components/nepaliLandConverter/landInputSelection";
import LandInputField from "../components/nepaliLandConverter/landInputField";

export default function NepaliLand() {
	const [unit, setUnit] = useState("rapd");
	const [state, setState] = useState({
		ropani: "",
		aana: "",
		paisa: "",
		daam: "",
		bigha: "",
		kattha: "",
		dhur: "",
		sqmtr: "",
		sqft: "",
	});

	const handleUnitChange = (value) => {
		setUnit(value);
	};
	const handleTextChange = (evt, { name }) => {
		const text = evt.nativeEvent.text;
		setState({ ...state, [name]: text });
	};
	return (
		<View style={globalStyles.container}>
			<StatusBar backgroundColor="#b05643" />
			<Card>
				<LandInputSelection
					state={state}
					handleUnitChange={handleUnitChange}
				/>
				<LandInputField
					state={state}
					unit={unit}
					handleTextChange={handleTextChange}
				/>
			</Card>
		</View>
	);
}
const styles = StyleSheet.create({});

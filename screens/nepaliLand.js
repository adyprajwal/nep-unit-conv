import React, { useState } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Card from "../components/nepaliLandConverter/card";
import LandInputSelection from "../components/nepaliLandConverter/landInputSelection";
import LandInputField from "../components/nepaliLandConverter/landInputField";
import LandResultCard from "../components/nepaliLandConverter/landResultCard";

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
	const [results, setResults] = useState({
		ropani: "0",
		aana: "0",
		paisa: "0",
		daam: "0",
		bigha: "0",
		kattha: "0",
		dhur: "0",
		sqmtr: "0",
		sqft: "0",
	});
	const handleUnitChange = (value) => {
		setUnit(value);
	};
	const handleTextChange = (text, { name }) => {
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
			<Card>
				<LandResultCard results={results} />
			</Card>
		</View>
	);
}
const styles = StyleSheet.create({});

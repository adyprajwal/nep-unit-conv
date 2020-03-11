import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import InputField from "./inputField";
import Selector from "./selector";

export default function InputCard({ units, convert }) {
	const [unit, setUnit] = useState("ropani");
	const [text, setText] = useState("Enter Values");

	const handleTextChange = (text, { unit }) => {
		setText(text);
		convert(text, unit);
	};
	const handleUnitChange = (value, { text }) => {
		setUnit(value);
		convert(text, value);
	};
	return (
		<View style={globalStyles.inputCard}>
			<InputField
				unit={unit}
				text={text}
				handleTextChange={handleTextChange}
			/>
			<Selector
				handleUnitChange={handleUnitChange}
				units={units}
				text={text}
				unit={unit}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});

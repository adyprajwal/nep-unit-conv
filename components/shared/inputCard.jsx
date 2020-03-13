import React, { useState } from "react";
import { View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import InputField from "./inputField";
import Selector from "./selector";

export default function InputCard({ units, convert }) {
	let values = units.map(unit => unit.value);
	const [unit, setUnit] = useState(values[0]);
	const [text, setText] = useState(0);

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

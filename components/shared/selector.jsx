import React from "react";
import { StyleSheet, View, Text, Picker } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export default function Selector({ handleUnitChange, units, text, unit }) {
	return (
		<Picker
			style={globalStyles.selector}
			selectedValue={unit}
			onValueChange={value => handleUnitChange(value, { text })}
			mode="dropdown"
		>
			{units.map(unit => {
				return (
					<Picker.Item
						key={unit.index}
						label={`${unit.label}`}
						value={`${unit.value}`}
					/>
				);
			})}
		</Picker>
	);
}

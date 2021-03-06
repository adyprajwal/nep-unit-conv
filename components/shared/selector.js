import React from "react";
import { StyleSheet, View, Picker } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export default function Selector({ handleUnitChange, units, text, unit }) {
	return (
		<View style={globalStyles.selector}>
			<Picker
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
		</View>
	);
}

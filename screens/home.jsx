import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	TouchableOpacity,
	TextInput,
	Picker,
	Keyboard,
	TouchableWithoutFeedback
} from "react-native";
import InputCard from "../shared/inputCard";
import { globalStyles } from "../styles/globalStyles";

export default function Home() {
	const units = [
		{ index: "1", label: "Ropani", value: "ropani" },
		{ index: "2", label: "Aana", value: "aana" },
		{ index: "3", label: "Paisa", value: "paisa" },
		{ index: "4", label: "Daam", value: "daam" },
		{ index: "5", label: "Bigha", value: "bigha" },
		{ index: "6", label: "Kattha", value: "kattha" },
		{ index: "7", label: "Dhur", value: "dhur" },
		{ index: "8", label: "Square Meter", value: "sqmtr" },
		{ index: "9", label: "Square Feet", value: "sqft" }
	];
	const [unit, setUnit] = useState("ropani");

	const [ropani, setRopani] = useState("0");
	const [aana, setAana] = useState("0");
	const [paisa, setPaisa] = useState("0");
	const [daam, setDaam] = useState("0");
	const [bigha, setBigha] = useState("0");
	const [kattha, setKattha] = useState("0");
	const [dhur, setDhur] = useState("0");
	const [sqmtr, setSqmtr] = useState("0");
	const [sqft, setSqft] = useState("0");

	const updateSelectedUnit = unit => {
		setUnit(unit);
	};

	const convert = (val, { unit }) => {
		if (unit == "ropani") {
			setRopani(val);
			setAana((val * 16).toFixed(3));
			setPaisa((val * 64).toFixed(3));
			setDaam((val * 256).toFixed(3));
			setBigha((val / 13.31).toFixed(3));
			setKattha((val / 1.5).toFixed(3));
			setDhur((val / 30.05).toFixed(3));
			setSqmtr((val * 508.72).toFixed(3));
			setSqft((val * 5476).toFixed(3));
		}
	};

	return (
		<View style={globalStyles.container}>
			<View style={globalStyles.inputCard}>
				<TextInput
					style={globalStyles.input}
					placeholder="Enter Values"
					onChangeText={val => convert(val, { unit })}
					keyboardType={"numeric"}
				/>
				<View>
					<Picker
						selectedValue={unit}
						onValueChange={updateSelectedUnit}
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
			</View>
			<View>
				<Text>Ropani: {ropani}</Text>
				<Text>Aana: {aana}</Text>
				<Text>Paisa: {paisa}</Text>
				<Text>Daam: {daam}</Text>
				<Text>Bigha: {bigha}</Text>
				<Text>Kattha: {kattha}</Text>
				<Text>Dhur: {dhur}</Text>
				<Text>Square Meter: {sqmtr}</Text>
				<Text>Square Feet: {sqft}</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({});

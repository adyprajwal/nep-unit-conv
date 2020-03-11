import React, { useState } from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import InputCard from "../components/shared/inputCard";
import ResultCard from "../components/shared/resultCard";
import KeyboardSpacer from "react-native-keyboard-spacer";

export default function Length() {
	const units = [
		{ index: "0", label: "Ropani", value: "ropani" },
		{ index: "1", label: "Aana", value: "aana" },
		{ index: "2", label: "Paisa", value: "paisa" },
		{ index: "3", label: "Daam", value: "daam" },
		{ index: "4", label: "Bigha", value: "bigha" },
		{ index: "5", label: "Kattha", value: "kattha" },
		{ index: "6", label: "Dhur", value: "dhur" },
		{ index: "7", label: "Square Meter", value: "sqmtr" },
		{ index: "8", label: "Square Feet", value: "sqft" }
	];

	const [ropani, setRopani] = useState("0");
	const [aana, setAana] = useState("0");
	const [paisa, setPaisa] = useState("0");
	const [daam, setDaam] = useState("0");
	const [bigha, setBigha] = useState("0");
	const [kattha, setKattha] = useState("0");
	const [dhur, setDhur] = useState("0");
	const [sqmtr, setSqmtr] = useState("0");
	const [sqft, setSqft] = useState("0");

	const convert = (val, unit) => {
		if (unit == "ropani") {
			setRopani(+(val * 1).toFixed(5));
			setAana(+(val * 16).toFixed(5));
			setPaisa(+(val * 64).toFixed(5));
			setDaam(+(val * 256).toFixed(5));
			setBigha(+(val / 13.31264).toFixed(5));
			setKattha(+(val * 1.50233).toFixed(5));
			setDhur(+(val * 30.04664).toFixed(5));
			setSqmtr(+(val * 508.72).toFixed(5));
			setSqft(+(val * 5476).toFixed(5));
		} else if (unit == "aana") {
			setRopani(+(val / 16).toFixed(5));
			setAana(+(val * 1).toFixed(5));
			setPaisa(+(val * 4).toFixed(5));
			setDaam(+(val * 16).toFixed(5));
			setBigha(+(val / 213.0022).toFixed(5));
			setKattha(+(val / 10.6501).toFixed(5));
			setDhur(+(val * 1.87791).toFixed(5));
			setSqmtr(+(val * 31.8).toFixed(5));
			setSqft(+(val * 342.25).toFixed(5));
		} else if (unit == "paisa") {
			setRopani(+(val / 64).toFixed(5));
			setAana(+(val / 4).toFixed(5));
			setPaisa(+(val * 1).toFixed(5));
			setDaam(+(val * 4).toFixed(5));
			setBigha(+(val / 852.03366).toFixed(5));
			setKattha(+(val / 42.60168).toFixed(5));
			setDhur(+(val / 2.13008).toFixed(5));
			setSqmtr(+(val * 85.56).toFixed(5));
			setSqft(+(val * 7.95).toFixed(5));
		} else if (unit == "daam") {
			setRopani(+(val / 256).toFixed(5));
			setAana(+(val / 16).toFixed(5));
			setPaisa(+(val / 4).toFixed(5));
			setDaam(+(val * 1).toFixed(5));
			setBigha(+(val / 3408.13464).toFixed(5));
			setKattha(+(val / 170.40673).toFixed(5));
			setDhur(+(val / 8.52034).toFixed(5));
			setSqmtr(+(val * 1.99).toFixed(5));
			setSqft(+(val * 21.39).toFixed(5));
		} else if (unit == "bigha") {
			setRopani(+(val * 13.31264).toFixed(5));
			setAana(+(val * 213.022).toFixed(5));
			setPaisa(+(val * 852.03366).toFixed(5));
			setDaam(+(val * 3408.13464).toFixed(5));
			setBigha(+(val * 1).toFixed(5));
			setKattha(+(val * 20).toFixed(5));
			setDhur(+(val * 400).toFixed(5));
			setSqmtr(+(val * 6772.63).toFixed(5));
			setSqft(+(val * 72900).toFixed(5));
		} else if (unit == "kattha") {
			setRopani(+(val / 1.50233).toFixed(5));
			setAana(+(val * 10.6501).toFixed(5));
			setPaisa(+(val * 42.60168).toFixed(5));
			setDaam(+(val * 170.40673).toFixed(5));
			setBigha(+(val / 20).toFixed(5));
			setKattha(+(val * 1).toFixed(5));
			setDhur(+(val * 20).toFixed(5));
			setSqmtr(+(val * 338.63).toFixed(5));
			setSqft(+(val * 3645).toFixed(5));
		} else if (unit == "dhur") {
			setRopani(+(val / 30.04664).toFixed(5));
			setAana(+(val / 1.87791).toFixed(5));
			setPaisa(+(val * 2.13008).toFixed(5));
			setDaam(+(val * 8.52034).toFixed(5));
			setBigha(+(val / 400).toFixed(5));
			setKattha(+(val / 20).toFixed(5));
			setDhur(+(val * 1).toFixed(5));
			setSqmtr(+(val * 16.93).toFixed(5));
			setSqft(+(val * 182.25).toFixed(5));
		} else if (unit == "sqmtr") {
			setRopani(+(val / 508.72).toFixed(5));
			setAana(+(val / 31.8).toFixed(5));
			setPaisa(+(val / 7.95).toFixed(5));
			setDaam(+(val / 1.99).toFixed(5));
			setBigha(+(val / 6772.63).toFixed(5));
			setKattha(+(val / 338.63).toFixed(5));
			setDhur(+(val / 16.93).toFixed(5));
			setSqmtr(+(val * 1).toFixed(5));
			setSqft(+(val * 10.7639).toFixed(5));
		} else if (unit == "sqft") {
			setRopani(+(val / 5476).toFixed(5));
			setAana(+(val / 342.25).toFixed(5));
			setPaisa(+(val / 85.56).toFixed(5));
			setDaam(+(val / 21.39).toFixed(5));
			setBigha(+(val / 72900).toFixed(5));
			setKattha(+(val / 3645).toFixed(5));
			setDhur(+(val / 182.25).toFixed(5));
			setSqmtr(+(val / 10.7639).toFixed(5));
			setSqft(+(val * 1).toFixed(5));
		}
	};

	const results = [
		{ key: 1, label: "Ropani", value: ropani },
		{ key: 2, label: "Aana", value: aana },
		{ key: 3, label: "Paisa", value: paisa },
		{ key: 4, label: "Daam", value: daam },
		{ key: 5, label: "Bigha", value: bigha },
		{ key: 6, label: "Kattha", value: kattha },
		{ key: 7, label: "Dhur", value: dhur },
		{ key: 8, label: "Square Meter", value: sqmtr },
		{ key: 9, label: "Square Feet", value: sqft }
	];

	return (
		<View style={globalStyles.container}>
			<InputCard units={units} convert={convert} />
			<ResultCard units={units} results={results} />
			<KeyboardSpacer />
		</View>
	);
}

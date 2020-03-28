import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import InputCard from "../components/shared/inputCard";
import ResultCard from "../components/shared/resultCard";

export default function Area() {
	const units = [
		{ index: "0", label: "Khetmuri", value: "khetmuri", num: 0.04 },
		{ index: "1", label: "Matomuri", value: "matomuri", num: 4 },
		{ index: "2", label: "Ropani", value: "ropani", num: 1 },
		{ index: "3", label: "Aana", value: "aana", num: 16 },
		{ index: "4", label: "Paisa", value: "paisa", num: 64 },
		{ index: "5", label: "Daam", value: "daam", num: 256 },
		{ index: "6", label: "Bigha", value: "bigha", num: 0.07512 },
		{ index: "7", label: "Kattha", value: "kattha", num: 1.50233 },
		{ index: "8", label: "Dhur", value: "dhur", num: 30.04664 },
		{
			index: "9",
			label: "Square Kilometer",
			value: "sqkm",
			num: 0.000508737
		},
		{ index: "10", label: "Square Meter", value: "sqmtr", num: 508.737 },
		{
			index: "11",
			label: "Square Mile",
			value: "sqmil",
			num: 0.0001964245
		},
		{ index: "12", label: "Square Feet", value: "sqft", num: 5476 },
		{ index: "13", label: "Hectare", value: "hectare", num: 0.0508737 },
		{ index: "14", label: "Acre", value: "acre", num: 0.1257117 }
	];

	const [khetmuri, setKhetmuri] = useState("0");
	const [matomuri, setMatomuri] = useState("0");
	const [ropani, setRopani] = useState("0");
	const [aana, setAana] = useState("0");
	const [paisa, setPaisa] = useState("0");
	const [daam, setDaam] = useState("0");
	const [bigha, setBigha] = useState("0");
	const [kattha, setKattha] = useState("0");
	const [dhur, setDhur] = useState("0");
	const [sqkm, setSqkm] = useState("0");
	const [sqmtr, setSqmtr] = useState("0");
	const [sqmil, setSqmil] = useState("0");
	const [sqft, setSqft] = useState("0");
	const [hectare, setHectare] = useState("0");
	const [acre, setAcre] = useState("0");

	const values = units.map(item => item.value);
	const nums = units.map(item => item.num);

	const convert = (val, unit) => {
		for (let i = 0; i < 15; i++) {
			if (unit == values[i]) {
				setKhetmuri(+(val * (nums[0] / nums[i])).toFixed(5));
				setMatomuri(+(val * (nums[1] / nums[i])).toFixed(5));
				setRopani(+(val * (nums[2] / nums[i])).toFixed(5));
				setAana(+(val * (nums[3] / nums[i])).toFixed(5));
				setPaisa(+(val * (nums[4] / nums[i])).toFixed(5));
				setDaam(+(val * (nums[5] / nums[i])).toFixed(5));
				setBigha(+(val * (nums[6] / nums[i])).toFixed(5));
				setKattha(+(val * (nums[7] / nums[i])).toFixed(5));
				setDhur(+(val * (nums[8] / nums[i])).toFixed(5));
				setSqkm(+(val * (nums[9] / nums[i])).toFixed(7));
				setSqmtr(+(val * (nums[10] / nums[i])).toFixed(5));
				setSqmil(+(val * (nums[11] / nums[i])).toFixed(8));
				setSqft(+(val * (nums[12] / nums[i])).toFixed(5));
				setHectare(+(val * (nums[13] / nums[i])).toFixed(5));
				setAcre(+(val * (nums[14] / nums[i])).toFixed(5));
			}
		}
	};

	let results = [
		{ key: "0", label: "Square Kilometer", value: sqkm },
		{ key: "1", label: "Square Meter", value: sqmtr },
		{ key: "2", label: "Square Mile", value: sqmil },
		{ key: "3", label: "Square Feet", value: sqft },
		{ key: "4", label: "Hectare", value: hectare },
		{ key: "5", label: "Acre", value: acre },
		{ key: "6", label: "Khetmuri", value: khetmuri },
		{ key: "7", label: "Matomuri", value: matomuri },
		{ key: "8", label: "Ropani", value: ropani },
		{ key: "9", label: "Aana", value: aana },
		{ key: "10", label: "Paisa", value: paisa },
		{ key: "11", label: "Daam", value: daam },
		{ key: "12", label: "Bigha", value: bigha },
		{ key: "13", label: "Kattha", value: kattha },
		{ key: "14", label: "Dhur", value: dhur }
	];

	return (
		<View style={globalStyles.container}>
			<StatusBar backgroundColor="#ff3526" />
			<InputCard units={units} convert={convert} />
			<ResultCard units={units} results={results} />
		</View>
	);
}

import React, { useState } from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import InputCard from "../components/shared/inputCard";
import ResultCard from "../components/shared/resultCard";
import KeyboardSpacer from "react-native-keyboard-spacer";

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
		{ index: "9", label: "Square Meter", value: "sqmtr", num: 508.72 },
		{ index: "10", label: "Square Feet", value: "sqft", num: 5476 }
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
	const [sqmtr, setSqmtr] = useState("0");
	const [sqft, setSqft] = useState("0");

	const nums = units.map(item => item.num);
	const values = units.map(item => item.value);

	const convert = (val, unit) => {
		for (let i = 0; i < 12; i++) {
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
				setSqmtr(+(val * (nums[9] / nums[i])).toFixed(5));
				setSqft(+(val * (nums[10] / nums[i])).toFixed(5));
			}
		}
	};

	let results = [
		{ key: 0, label: "Square Meter", value: sqmtr },
		{ key: 1, label: "Square Feet", value: sqft },
		{ key: 2, label: "Khetmuri", value: khetmuri },
		{ key: 3, label: "Matomuri", value: matomuri },
		{ key: 4, label: "Ropani", value: ropani },
		{ key: 5, label: "Aana", value: aana },
		{ key: 6, label: "Paisa", value: paisa },
		{ key: 7, label: "Daam", value: daam },
		{ key: 8, label: "Bigha", value: bigha },
		{ key: 9, label: "Kattha", value: kattha },
		{ key: 10, label: "Dhur", value: dhur }
	];

	return (
		<View style={globalStyles.container}>
			<InputCard units={units} convert={convert} />
			<ResultCard units={units} results={results} />
			<KeyboardSpacer />
		</View>
	);
}

import React, { useState } from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import InputCard from "../components/shared/inputCard";
import ResultCard from "../components/shared/resultCard";
import KeyboardSpacer from "react-native-keyboard-spacer";

export default function Weight() {
	const units = [
		{ index: "0", label: "Dharni", value: "dharni", num: 1 / 2.3934 },
		{ index: "1", label: "Sher", value: "sher", num: 1 / 0.9931 },
		{ index: "2", label: "Pau", value: "pau", num: 4 },
		{ index: "3", label: "Pau (Ktm)", value: "pauktm", num: 5 },
		{ index: "4", label: "Chatak", value: "chatak", num: 1 / 0.05831 },
		{ index: "5", label: "Tola", value: "tola", num: 1 / 0.01166 },
		{ index: "6", label: "Lal", value: "lal", num: 1 / 0.0001166 },
		{ index: "7", label: "Metric Ton", value: "metricTon", num: 1000 },
		{ index: "8", label: "Kilogram", value: "kilogram", num: 1 },
		{ index: "9", label: "Gram", value: "gram", num: 1 / 1000 },
		{
			index: "10",
			label: "Milligram",
			value: "milligram",
			num: 1 / 1000000
		},
		{ index: "11", label: "Pound", value: "pound", num: 2.2046225 },
		{ index: "12", label: "Ounce", value: "ounce", num: 35.27396 }
	];

	const [dharni, setDharni] = useState("0");
	const [sher, setSher] = useState("0");
	const [pau, setPau] = useState("0");
	const [pauktm, setPauktm] = useState("0");
	const [chatak, setChatak] = useState("0");
	const [tola, setTola] = useState("0");
	const [lal, setLal] = useState("0");
	const [metricTon, setMetricTon] = useState("0");
	const [kilogram, setKilogram] = useState("0");
	const [gram, setGram] = useState("0");
	const [milligram, setMilligram] = useState("0");
	const [pound, setPound] = useState("0");
	const [ounce, setOunce] = useState("0");

	const values = units.map(item => item.value);
	const nums = units.map(item => item.num);

	const convert = (val, unit) => {
		for (let i = 0; i < 13; i++) {
			if (unit == values[i]) {
				setDharni(+(val * (nums[0] / nums[i])).toFixed(5));
				setSher(+(val * (nums[1] / nums[i])).toFixed(5));
				setPau(+(val * (nums[2] / nums[i])).toFixed(5));
				setPauktm(+(val * (nums[3] / nums[i])).toFixed(5));
				setChatak(+(val * (nums[4] / nums[i])).toFixed(5));
				setTola(+(val * (nums[5] / nums[i])).toFixed(5));
				setLal(+(val * (nums[6] / nums[i])).toFixed(5));
				setMetricTon(+(val * (nums[7] / nums[i])).toFixed(5));
				setKilogram(+(val * (nums[8] / nums[i])).toFixed(5));
				setGram(+(val * (nums[9] / nums[i])).toFixed(5));
				setMilligram(+(val * (nums[10] / nums[i])).toFixed(5));
				setPound(+(val * (nums[11] / nums[i])).toFixed(5));
				setOunce(+(val * (nums[12] / nums[i])).toFixed(5));
			}
		}
	};

	const results = [
		{ key: "0", label: "Metric Ton", value: metricTon },
		{ key: "1", label: "Kilogram", value: kilogram },
		{ key: "2", label: "Gram", value: gram },
		{ key: "3", label: "Milligram", value: milligram },
		{ key: "4", label: "Pound", value: pound },
		{ key: "5", label: "Ounce", value: ounce },
		{ key: "6", label: "Dharni", value: dharni },
		{ key: "7", label: "Sher", value: sher },
		{ key: "8", label: "Pau", value: pau },
		{ key: "9", label: "Pau (Ktm)", value: pauktm },
		{ key: "10", label: "Chatak", value: chatak },
		{ key: "11", label: "Tola", value: tola },
		{ key: "12", label: "Lal", value: lal }
	];

	return (
		<View style={globalStyles.container}>
			<InputCard units={units} convert={convert} />
			<ResultCard units={units} results={results} />
			<KeyboardSpacer />
		</View>
	);
}

import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import InputCard from "../components/shared/inputCard";
import ResultCard from "../components/shared/resultCard";

export default function Length() {
	const units = [
		{ index: "0", label: "Yojan", value: "yojan", num: 0.0000625 },
		{ index: "1", label: "Kosh", value: "kosh", num: 0.00025 },
		{
			index: "2",
			label: "Danda/Dhanush",
			value: "danda",
			num: 0.5,
		},
		{ index: "3", label: "Gaj", value: "gaj", num: 1 },
		{ index: "4", label: "Haath", value: "haath", num: 2 },
		{ index: "5", label: "Bitta", value: "bitta", num: 4 },
		{ index: "6", label: "Dhanurmushti", value: "dhanurmushti", num: 6 },
		{ index: "7", label: "Dhanurgrah", value: "dhanurgrah", num: 12 },
		{ index: "8", label: "Angul", value: "angul", num: 48 },
		{
			index: "9",
			label: "Kilometer",
			value: "kilometer",
			num: 0.0009144,
		},
		{ index: "10", label: "Meter", value: "meter", num: 0.9144 },
		{ index: "11", label: "Centimeter", value: "centimeter", num: 91.44 },
		{ index: "12", label: "Mile", value: "mile", num: 0.000568182 },
		{ index: "13", label: "Yard", value: "yard", num: 1 },
		{ index: "14", label: "Foot", value: "foot", num: 3 },
		{ index: "15", label: "Inch", value: "inch", num: 36 },
	];

	const [yojan, setYojan] = useState("0");
	const [kosh, setKosh] = useState("0");
	const [danda, setDanda] = useState("0");
	const [gaj, setGaj] = useState("0");
	const [haath, setHaath] = useState("0");
	const [bitta, setBitta] = useState("0");
	const [dhanurmushti, setDhanurmushti] = useState("0");
	const [dhanurgrah, setDhanurgrah] = useState("0");
	const [angul, setAngul] = useState("0");
	const [kilometer, setKilometer] = useState("0");
	const [meter, setMeter] = useState("0");
	const [centimeter, setCentimeter] = useState("0");
	const [mile, setMile] = useState("0");
	const [yard, setYard] = useState("0");
	const [foot, setFoot] = useState("0");
	const [inch, setInch] = useState("0");

	const nums = units.map((item) => item.num);
	const values = units.map((item) => item.value);

	const convert = (val, unit) => {
		for (let i = 0; i < 16; i++) {
			if (unit == values[i]) {
				setYojan(+(val * (nums[0] / nums[i])).toFixed(5));
				setKosh(+(val * (nums[1] / nums[i])).toFixed(5));
				setDanda(+(val * (nums[2] / nums[i])).toFixed(5));
				setGaj(+(val * (nums[3] / nums[i])).toFixed(5));
				setHaath(+(val * (nums[4] / nums[i])).toFixed(5));
				setBitta(+(val * (nums[5] / nums[i])).toFixed(5));
				setDhanurmushti(+(val * (nums[6] / nums[i])).toFixed(5));
				setDhanurgrah(+(val * (nums[7] / nums[i])).toFixed(5));
				setAngul(+(val * (nums[8] / nums[i])).toFixed(5));
				setKilometer(+(val * (nums[9] / nums[i])).toFixed(5));
				setMeter(+(val * (nums[10] / nums[i])).toFixed(5));
				setCentimeter(+(val * (nums[11] / nums[i])).toFixed(5));
				setMile(+(val * (nums[12] / nums[i])).toFixed(5));
				setYard(+(val * (nums[13] / nums[i])).toFixed(5));
				setFoot(+(val * (nums[14] / nums[i])).toFixed(5));
				setInch(+(val * (nums[15] / nums[i])).toFixed(5));
			}
		}
	};

	const results = [
		{ key: "0", label: "Kilometer", value: kilometer },
		{ key: "1", label: "Meter", value: meter },
		{ key: "2", label: "Centimeter", value: centimeter },
		{ key: "3", label: "Mile", value: mile },
		{ key: "4", label: "Yard", value: yard },
		{ key: "5", label: "Foot", value: foot },
		{ key: "6", label: "Inch", value: inch },
		{ key: "7", label: "Yojan", value: yojan },
		{ key: "8", label: "Kosh", value: kosh },
		{ key: "9", label: "Danda/Dhanush", value: danda },
		{ key: "10", label: "Gaj", value: gaj },
		{ key: "11", label: "Haath", value: haath },
		{ key: "12", label: "Bitta", value: bitta },
		{ key: "13", label: "Dhanurmushti", value: dhanurmushti },
		{ key: "14", label: "Dhanurgrah", value: dhanurgrah },
		{ key: "15", label: "Angul", value: angul },
	];

	return (
		<View style={globalStyles.container}>
			<StatusBar backgroundColor="#00aeff" />
			<InputCard units={units} convert={convert} />
			<ResultCard units={units} results={results} />
		</View>
	);
}

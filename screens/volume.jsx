import React, { useState } from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import InputCard from "../components/shared/inputCard";
import ResultCard from "../components/shared/resultCard";
import KeyboardSpacer from "react-native-keyboard-spacer";

export default function Volume() {
	const units = [
		{ index: "1", label: "Muri", value: "muri" },
		{ index: "2", label: "Pathi", value: "pathi" },
		{ index: "3", label: "Kuruwa", value: "kuruwa" },
		{ index: "4", label: "Mana", value: "mana" },
		{ index: "5", label: "Muthi", value: "muthi" },
		{ index: "6", label: "Cubic Meter", value: "cubicMeter" },
		{ index: "7", label: "Liter", value: "liter" },
		{ index: "8", label: "Milliliter", value: "milliliter" },
		{ index: "9", label: "Cubic Foot", value: "cubicFoot" },
		{ index: "10", label: "Cubic Inch", value: "cubicInch" }
	];

	const [muri, setMuri] = useState("0");
	const [pathi, setPathi] = useState("0");
	const [kuruwa, setKuruwa] = useState("0");
	const [mana, setMana] = useState("0");
	const [muthi, setMuthi] = useState("0");
	const [cubicMeter, setCubicMeter] = useState("0");
	const [liter, setLiter] = useState("0");
	const [milliliter, setMilliliter] = useState("0");
	const [cubicFoot, setCubicFoot] = useState("0");
	const [cubicInch, setCubicInch] = useState("0");

	const convert = (val, unit) => {
		if (unit == "muri") {
			setMuri(+(val * 1).toFixed(5));
			setPathi(+(val * 20).toFixed(5));
			setKuruwa(+(val * 80).toFixed(5));
			setMana(+(val * 160).toFixed(5));
			setMuthi(+(val * 1600).toFixed(5));
			setCubicMeter(+(val * 0.0909192).toFixed(5));
			setLiter(+(val * 90.9192).toFixed(5));
			setMilliliter(+(val * 90919.2).toFixed(5));
			setCubicFoot(+(val * 3.21078).toFixed(5));
			setCubicInch(+(val * 5548.24).toFixed(5));
		} else if (unit == "pathi") {
			setMuri(+(val * 0.05).toFixed(5));
			setPathi(+(val * 1).toFixed(5));
			setKuruwa(+(val * 4).toFixed(5));
			setMana(+(val * 8).toFixed(5));
			setMuthi(+(val * 80).toFixed(5));
			setCubicMeter(+(val * 0.00454596).toFixed(5));
			setLiter(+(val * 4.54596).toFixed(5));
			setMilliliter(+(val * 4545.96).toFixed(5));
			setCubicFoot(+(val * 0.16054).toFixed(5));
			setCubicInch(+(val * 277.412).toFixed(5));
		} else if (unit == "kuruwa") {
			setMuri(+(val * 0.0125).toFixed(5));
			setPathi(+(val * 0.25).toFixed(5));
			setKuruwa(+(val * 1).toFixed(5));
			setMana(+(val * 2).toFixed(5));
			setMuthi(+(val * 20).toFixed(5));
			setCubicMeter(+(val * 0.00113649).toFixed(5));
			setLiter(+(val * 1.13649).toFixed(5));
			setMilliliter(+(val * 1136.49).toFixed(5));
			setCubicFoot(+(val * 0.04013).toFixed(5));
			setCubicInch(+(val * 69.3529).toFixed(5));
		} else if (unit == "mana") {
			setMuri(+(val * 0.00625).toFixed(5));
			setPathi(+(val * 0.125).toFixed(5));
			setKuruwa(+(val * 0.5).toFixed(5));
			setMana(+(val * 1).toFixed(5));
			setMuthi(+(val * 10).toFixed(5));
			setCubicMeter(+(val * 0.00056825).toFixed(5));
			setLiter(+(val * 0.56825).toFixed(5));
			setMilliliter(+(val * 568.245).toFixed(5));
			setCubicFoot(+(val * 0.02007).toFixed(5));
			setCubicInch(+(val * 34.6765).toFixed(5));
		} else if (unit == "muthi") {
			setMuri(+(val * 0.00063).toFixed(5));
			setPathi(+(val * 0.0125).toFixed(5));
			setKuruwa(+(val * 0.05).toFixed(5));
			setMana(+(val * 0.1).toFixed(5));
			setMuthi(+(val * 1).toFixed(5));
			setCubicMeter(+(val * 5.6825e-5).toFixed(5));
			setLiter(+(val * 0.05682).toFixed(5));
			setMilliliter(+(val * 56.8245).toFixed(5));
			setCubicFoot(+(val * 0.00201).toFixed(5));
			setCubicInch(+(val * 3.46765).toFixed(5));
		} else if (unit == "cubicMeter") {
			setMuri(+(val * 10.9988).toFixed(5));
			setPathi(+(val * 219.9755).toFixed(5));
			setKuruwa(+(val * 879.902).toFixed(5));
			setMana(+(val * 1759.80431).toFixed(5));
			setMuthi(+(val * 17598.0431).toFixed(5));
			setCubicMeter(+(val * 1).toFixed(5));
			setLiter(+(val * 1000).toFixed(5));
			setMilliliter(+(val * 1000000).toFixed(5));
			setCubicFoot(+(val * 35.3147).toFixed(5));
			setCubicInch(+(val * 61023.8).toFixed(5));
		} else if (unit == "liter") {
			setMuri(+(val * 0.011).toFixed(5));
			setPathi(+(val * 0.219976).toFixed(5));
			setKuruwa(+(val * 0.8799).toFixed(5));
			setMana(+(val * 1.75980431).toFixed(5));
			setMuthi(+(val * 17.5980431).toFixed(5));
			setCubicMeter(+(val * 0.001).toFixed(5));
			setLiter(+(val * 1).toFixed(5));
			setMilliliter(+(val * 1000).toFixed(5));
			setCubicFoot(+(val * 0.03531).toFixed(5));
			setCubicInch(+(val * 61.0238).toFixed(5));
		} else if (unit == "milliliter") {
			setMuri(+(val * 0.000011).toFixed(5));
			setPathi(+(val * 0.00022).toFixed(5));
			setKuruwa(+(val * 0.00088).toFixed(5));
			setMana(+(val * 0.001759804).toFixed(5));
			setMuthi(+(val * 0.017598043).toFixed(5));
			setCubicMeter(+(val * 0.000001));
			setLiter(+(val * 0.001).toFixed(5));
			setMilliliter(+(val * 1).toFixed(5));
			setCubicFoot(+(val * 0.000035).toFixed(5));
			setCubicInch(+(val * 0.06102).toFixed(5));
		} else if (unit == "cubicFoot") {
			setMuri(+(val * 0.31145).toFixed(5));
			setPathi(+(val * 6.229008).toFixed(5));
			setKuruwa(+(val * 24.916).toFixed(5));
			setMana(+(val * 49.8326171).toFixed(5));
			setMuthi(+(val * 498.3206171).toFixed(5));
			setCubicMeter(+(val * 0.02831682).toFixed(5));
			setLiter(+(val * 28.3168).toFixed(5));
			setMilliliter(+(val * 28316.8199).toFixed(5));
			setCubicFoot(+(val * 1).toFixed(5));
			setCubicInch(+(val * 1728).toFixed(5));
		} else if (unit == "cubicInch") {
			setMuri(+(val * 0.00018).toFixed(5));
			setPathi(+(val * 0.003605).toFixed(5));
			setKuruwa(+(val * 0.01442).toFixed(5));
			setMana(+(val * 0.028837999).toFixed(5));
			setMuthi(+(val * 0.288379987).toFixed(5));
			setCubicMeter(+(val * 0.000016387).toFixed(5));
			setLiter(+(val * 0.01639).toFixed(5));
			setMilliliter(+(val * 16.3870486).toFixed(5));
			setCubicFoot(+(val * 0.00058).toFixed(5));
			setCubicInch(+(val * 1).toFixed(5));
		}
	};

	const results = [
		{ key: 1, label: "Cubic Meter", value: cubicMeter },
		{ key: 2, label: "Liter", value: liter },
		{ key: 3, label: "Milliliter", value: milliliter },
		{ key: 4, label: "Cubic Foot", value: cubicFoot },
		{ key: 5, label: "Cubic Inch", value: cubicInch },
		{ key: 6, label: "Muri", value: muri },
		{ key: 7, label: "Pathi", value: pathi },
		{ key: 8, label: "Kuruwa", value: kuruwa },
		{ key: 9, label: "Mana", value: mana },
		{ key: 10, label: "Muthi", value: muthi }
	];

	return (
		<View style={globalStyles.container}>
			<InputCard units={units} convert={convert} />
			<ResultCard units={units} results={results} />
			<KeyboardSpacer />
		</View>
	);
}

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
			setPathi(+(val * 16).toFixed(5));
			setKuruwa(+(val * 64).toFixed(5));
			setMana(+(val * 256).toFixed(5));
			setMuthi(+(val / 13.31264).toFixed(5));
			setCubicMeter(+(val * 1.50233).toFixed(5));
			setLiter(+(val * 30.04664).toFixed(5));
			setMilliliter(+(val * 508.72).toFixed(5));
			setCubicFoot(+(val * 5476).toFixed(5));
			setCubicInch(+(val * 1).toFixed(5));
		} else if (unit == "pathi") {
			setMuri(+(val / 16).toFixed(5));
			setPathi(+(val * 1).toFixed(5));
			setKuruwa(+(val * 4).toFixed(5));
			setMana(+(val * 16).toFixed(5));
			setMuthi(+(val / 213.0022).toFixed(5));
			setCubicMeter(+(val / 10.6501).toFixed(5));
			setLiter(+(val * 1.87791).toFixed(5));
			setMilliliter(+(val * 31.8).toFixed(5));
			setCubicFoot(+(val * 342.25).toFixed(5));
			setCubicInch(+(val * 1).toFixed(5));
		} else if (unit == "kuruwa") {
			setMuri(+(val / 64).toFixed(5));
			setPathi(+(val / 4).toFixed(5));
			setKuruwa(+(val * 1).toFixed(5));
			setMana(+(val * 4).toFixed(5));
			setMuthi(+(val / 852.03366).toFixed(5));
			setCubicMeter(+(val / 42.60168).toFixed(5));
			setLiter(+(val / 2.13008).toFixed(5));
			setMilliliter(+(val * 85.56).toFixed(5));
			setCubicFoot(+(val * 7.95).toFixed(5));
			setCubicInch(+(val * 1).toFixed(5));
		} else if (unit == "mana") {
			setMuri(+(val / 256).toFixed(5));
			setPathi(+(val / 16).toFixed(5));
			setKuruwa(+(val / 4).toFixed(5));
			setMana(+(val * 1).toFixed(5));
			setMuthi(+(val / 3408.13464).toFixed(5));
			setCubicMeter(+(val / 170.40673).toFixed(5));
			setLiter(+(val / 8.52034).toFixed(5));
			setMilliliter(+(val * 1.99).toFixed(5));
			setCubicFoot(+(val * 21.39).toFixed(5));
			setCubicInch(+(val * 1).toFixed(5));
		} else if (unit == "muthi") {
			setMuri(+(val * 13.31264).toFixed(5));
			setPathi(+(val * 213.022).toFixed(5));
			setKuruwa(+(val * 852.03366).toFixed(5));
			setMana(+(val * 3408.13464).toFixed(5));
			setMuthi(+(val * 1).toFixed(5));
			setCubicMeter(+(val * 20).toFixed(5));
			setLiter(+(val * 400).toFixed(5));
			setMilliliter(+(val * 6772.63).toFixed(5));
			setCubicFoot(+(val * 72900).toFixed(5));
			setCubicInch(+(val * 1).toFixed(5));
		} else if (unit == "cubicMeter") {
			setMuri(+(val / 1.50233).toFixed(5));
			setPathi(+(val * 10.6501).toFixed(5));
			setKuruwa(+(val * 42.60168).toFixed(5));
			setMana(+(val * 170.40673).toFixed(5));
			setMuthi(+(val / 20).toFixed(5));
			setCubicMeter(+(val * 1).toFixed(5));
			setLiter(+(val * 20).toFixed(5));
			setMilliliter(+(val * 338.63).toFixed(5));
			setCubicFoot(+(val * 3645).toFixed(5));
			setCubicInch(+(val * 1).toFixed(5));
		} else if (unit == "liter") {
			setMuri(+(val / 30.04664).toFixed(5));
			setPathi(+(val / 1.87791).toFixed(5));
			setKuruwa(+(val * 2.13008).toFixed(5));
			setMana(+(val * 8.52034).toFixed(5));
			setMuthi(+(val / 400).toFixed(5));
			setCubicMeter(+(val / 20).toFixed(5));
			setLiter(+(val * 1).toFixed(5));
			setMilliliter(+(val * 16.93).toFixed(5));
			setCubicFoot(+(val * 182.25).toFixed(5));
			setCubicInch(+(val * 1).toFixed(5));
		} else if (unit == "milliliter") {
			setMuri(+(val / 508.72).toFixed(5));
			setPathi(+(val / 31.8).toFixed(5));
			setKuruwa(+(val / 7.95).toFixed(5));
			setMana(+(val / 1.99).toFixed(5));
			setMuthi(+(val / 6772.63).toFixed(5));
			setCubicMeter(+(val / 338.63).toFixed(5));
			setLiter(+(val / 16.93).toFixed(5));
			setMilliliter(+(val * 1).toFixed(5));
			setCubicFoot(+(val * 10.7639).toFixed(5));
			setCubicInch(+(val * 1).toFixed(5));
		} else if (unit == "cubicFoot") {
			setMuri(+(val / 5476).toFixed(5));
			setPathi(+(val / 342.25).toFixed(5));
			setKuruwa(+(val / 85.56).toFixed(5));
			setMana(+(val / 21.39).toFixed(5));
			setMuthi(+(val / 72900).toFixed(5));
			setCubicMeter(+(val / 3645).toFixed(5));
			setLiter(+(val / 182.25).toFixed(5));
			setMilliliter(+(val / 10.7639).toFixed(5));
			setCubicFoot(+(val * 1).toFixed(5));
			setCubicInch(+(val * 1).toFixed(5));
		} else if (unit == "cubicInch") {
			setMuri(+(val / 5476).toFixed(5));
			setPathi(+(val / 342.25).toFixed(5));
			setKuruwa(+(val / 85.56).toFixed(5));
			setMana(+(val / 21.39).toFixed(5));
			setMuthi(+(val / 72900).toFixed(5));
			setCubicMeter(+(val / 3645).toFixed(5));
			setLiter(+(val / 182.25).toFixed(5));
			setMilliliter(+(val / 10.7639).toFixed(5));
			setCubicFoot(+(val * 1).toFixed(5));
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

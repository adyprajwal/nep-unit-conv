import React, { useState } from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import InputCard from "../components/shared/inputCard";
import ResultCard from "../components/shared/resultCard";
import KeyboardSpacer from "react-native-keyboard-spacer";

export default function Home() {
	const units = [
		{ index: "1", label: "Khetmuri", value: "khetmuri" },
		{ index: "2", label: "Matomuri", value: "matomuri" },
		{ index: "3", label: "Ropani", value: "ropani" },
		{ index: "4", label: "Aana", value: "aana" },
		{ index: "5", label: "Paisa", value: "paisa" },
		{ index: "6", label: "Daam", value: "daam" },
		{ index: "7", label: "Bigha", value: "bigha" },
		{ index: "8", label: "Kattha", value: "kattha" },
		{ index: "9", label: "Dhur", value: "dhur" },
		{ index: "10", label: "Square Meter", value: "sqmtr" },
		{ index: "11", label: "Square Feet", value: "sqft" }
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

	const convert = (val, unit) => {
		if (unit == "khetmuri") {
			setKhetmuri(+(val * 1).toFixed(5));
			setMatomuri(+(val * 100).toFixed(5));
			setRopani(+(val * 25).toFixed(5));
			setAana(+(val * 400).toFixed(5));
			setPaisa(+(val * 1600).toFixed(5));
			setDaam(+(val * 6400).toFixed(5));
			setBigha(+(val / 0.5325).toFixed(5));
			setKattha(+(val * 37.55825).toFixed(5));
			setDhur(+(val * 751.166).toFixed(5));
			setSqmtr(+(val * 12718).toFixed(5));
			setSqft(+(val * 136900).toFixed(5));
		} else if (unit == "matomuri") {
			setKhetmuri(+(val / 100).toFixed(5));
			setMatomuri(+(val * 1).toFixed(5));
			setRopani(+(val / 4).toFixed(5));
			setAana(+(val * 4).toFixed(5));
			setPaisa(+(val * 16).toFixed(5));
			setDaam(+(val * 64).toFixed(5));
			setBigha(+(val / 53.25056).toFixed(5));
			setKattha(+(val * 0.3755825).toFixed(5));
			setDhur(+(val * 7.51166).toFixed(5));
			setSqmtr(+(val * 127.18).toFixed(5));
			setSqft(+(val * 1369).toFixed(5));
		} else if (unit == "ropani") {
			setKhetmuri(+(val / 25).toFixed(5));
			setMatomuri(+(val * 4).toFixed(5));
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
			setKhetmuri(+(val / 400).toFixed(5));
			setMatomuri(+(val / 4).toFixed(5));
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
			setKhetmuri(+(val / 1600).toFixed(5));
			setMatomuri(+(val / 16).toFixed(5));
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
			setKhetmuri(+(val / 6400).toFixed(5));
			setMatomuri(+(val / 64).toFixed(5));
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
			setKhetmuri(+(val * 0.5325).toFixed(5));
			setMatomuri(+(val * 53.25056).toFixed(5));
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
			setKhetmuri(+(val / 37.55825).toFixed(5));
			setMatomuri(+(val / 0.3755825).toFixed(5));
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
			setKhetmuri(+(val / 751.166).toFixed(5));
			setMatomuri(+(val / 7.51166).toFixed(5));
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
			setKhetmuri(+(val / 12718).toFixed(5));
			setMatomuri(+(val / 127.18).toFixed(5));
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
			setKhetmuri(+(val / 136900).toFixed(5));
			setMatomuri(+(val / 1369).toFixed(5));
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
		{ key: 1, label: "Square Meter", value: sqmtr },
		{ key: 2, label: "Square Feet", value: sqft },
		{ key: 3, label: "Khetmuri", value: khetmuri },
		{ key: 4, label: "Matomuri", value: matomuri },
		{ key: 5, label: "Ropani", value: ropani },
		{ key: 6, label: "Aana", value: aana },
		{ key: 7, label: "Paisa", value: paisa },
		{ key: 8, label: "Daam", value: daam },
		{ key: 9, label: "Bigha", value: bigha },
		{ key: 10, label: "Kattha", value: kattha },
		{ key: 11, label: "Dhur", value: dhur }
	];

	return (
		<View style={globalStyles.container}>
			<InputCard units={units} convert={convert} />
			<ResultCard units={units} results={results} />
			<KeyboardSpacer />
		</View>
	);
}

import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Card from "../components/nepaliLandConverter/card";
import LandInputSelection from "../components/nepaliLandConverter/landInputSelection";
import LandInputField from "../components/nepaliLandConverter/landInputField";
import LandResultCard from "../components/nepaliLandConverter/landResultCard";

export default function NepaliLand() {
	const [unit, setUnit] = useState("rapd");
	const [values, setValues] = useState({
		ropani: "",
		aana: "",
		paisa: "",
		daam: "",
		bigha: "",
		kattha: "",
		dhur: "",
		sqmtr: "",
		sqft: "",
	});
	const [results, setResults] = useState({
		ropani: "0",
		aana: "0",
		paisa: "0",
		daam: "0",
		bigha: "0",
		kattha: "0",
		dhur: "0",
		sqmtr: "0",
		sqft: "0",
	});

	const convert = (unit, values) => {
		let baseRopani;
		switch (unit) {
			case "rapd": {
				baseRopani =
					values.ropani / 1 +
					values.aana / 16 +
					values.paisa / 64 +
					values.daam / 256;
				break;
			}
			case "bkd": {
				baseRopani =
					values.bigha / 0.0751165981 +
					values.kattha / 1.5023319616 +
					values.dhur / 30.0466392318;
				break;
			}
			case "sqmtr": {
				baseRopani = values.sqmtr / 508.737;
				break;
			}
			case "sqft": {
				baseRopani = values.sqft / 5476;
				break;
			}
		}
		let tempRopani = baseRopani * 1;
		let ropani = parseInt(tempRopani);
		let tempAana = (tempRopani % 1) * 16;
		let aana = parseInt(tempAana);
		let tempPaisa = (tempAana % 1) * 4;
		let paisa = parseInt(tempPaisa);
		let daam = +((tempPaisa % 1) * 4).toFixed(3);

		if (daam == 4) {
			paisa += 1;
			daam = 0;
			if (paisa == 4) {
				aana += 1;
				paisa = 0;
				if (aana == 16) {
					ropani += 1;
				}
			}
		}

		let tempBigha = baseRopani * 0.0751165981;
		let bigha = parseInt(tempBigha);
		let tempKattha = (tempBigha % 1) * 20;
		let kattha = parseInt(tempKattha);
		let dhur = +((tempKattha % 1) * 20).toFixed(5);

		if (dhur == 20) {
			kattha += 1;
			dhur = 0;
			if (kattha == 20) {
				bigha += 1;
				kattha = 0;
			}
		}

		let sqmtr = +(baseRopani * 508.737).toFixed(5);
		let sqft = +(baseRopani * 5476).toFixed(5);

		setResults({
			ropani: ropani,
			aana: aana,
			paisa: paisa,
			daam: daam,
			bigha: bigha,
			kattha: kattha,
			dhur: dhur,
			sqmtr: sqmtr,
			sqft: sqft,
		});
	};

	const handleUnitChange = (value) => {
		setUnit(value);
		convert(value, values);
	};

	const handleTextChange = (text, name) => {
		const value = { ...values, [name]: text };
		setValues(value);
		convert(unit, value);
	};

	return (
		<View style={globalStyles.container}>
			<StatusBar backgroundColor="#b05643" />
			<Card>
				<LandInputSelection
					values={values}
					handleUnitChange={handleUnitChange}
				/>
				<LandInputField
					values={values}
					unit={unit}
					handleTextChange={handleTextChange}
				/>
			</Card>
			<Card>
				<LandResultCard results={results} />
			</Card>
		</View>
	);
}
const styles = StyleSheet.create({});

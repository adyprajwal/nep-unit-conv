import React, { useState } from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import InputCard from "../components/shared/inputCard";
import ResultCard from "../components/shared/resultCard";
import KeyboardSpacer from "react-native-keyboard-spacer";

export default function Length() {
	const units = [
		{ index: "1", label: "Yojan", value: "yojan" },
		{ index: "2", label: "Kosh", value: "kosh" },
		{ index: "3", label: "Danda", value: "danda" },
		{ index: "4", label: "Haath", value: "haath" },
		{ index: "5", label: "Vittaa", value: "vittaa" },
		{ index: "6", label: "Vitasta", value: "vitasta" },
		{ index: "7", label: "Dhanurmushti", value: "dhanurmushti" },
		{ index: "8", label: "Dhanurgrah", value: "dharnugrah" },
		{ index: "9", label: "Angul", value: "angul" },
		{ index: "10", label: "Kilometer", value: "kilometer" },
		{ index: "11", label: "Meter", value: "meter" },
		{ index: "12", label: "Centimeter", value: "centimeter" },
		{ index: "13", label: "Mile", value: "mile" },
		{ index: "14", label: "Yard", value: "yard" },
		{ index: "15", label: "Foot", value: "foot" },
		{ index: "16", label: "Inch", value: "inch" }
	];

	const [yojan, setYojan] = useState("0");
	const [kosh, setKosh] = useState("0");
	const [danda, setDanda] = useState("0");
	const [haath, setHaath] = useState("0");
	const [vittaa, setVittaa] = useState("0");
	const [vitasta, setVitasta] = useState("0");
	const [dhanurmushti, setDhanurmushti] = useState("0");
	const [dharnugrah, setDharnugrah] = useState("0");
	const [angul, setAngul] = useState("0");
	const [kilometer, setKilometer] = useState("0");
	const [meter, setMeter] = useState("0");
	const [centimeter, setCentimeter] = useState("0");
	const [mile, setMile] = useState("0");
	const [yard, setYard] = useState("0");
	const [foot, setFoot] = useState("0");
	const [inch, setInch] = useState("0");

	const convert = (val, unit) => {
		if (unit == "yojan") {
			setYojan(+(val * 1).toFixed(5));
			setKosh(+(val * 16).toFixed(5));
			setDanda(+(val * 64).toFixed(5));
			setHaath(+(val * 256).toFixed(5));
			setVittaa(+(val / 13.31264).toFixed(5));
			setVitasta(+(val * 1.50233).toFixed(5));
			setDhanurmushti(+(val * 30.04664).toFixed(5));
			setDharnugrah(+(val * 508.72).toFixed(5));
			setAngul(+(val * 5476).toFixed(5));
			setKilometer(+(val * 1).toFixed(5));
			setMeter(+(val / 4).toFixed(5));
			setCentimeter(+(val * 4).toFixed(5));
			setMile(+(val * 16).toFixed(5));
			setYard(+(val * 64).toFixed(5));
			setFoot(+(val / 53.25056).toFixed(5));
			setInch(+(val * 0.3755825).toFixed(5));
		} else if (unit == "kosh") {
			setYojan(+(val / 16).toFixed(5));
			setKosh(+(val * 1).toFixed(5));
			setDanda(+(val * 4).toFixed(5));
			setHaath(+(val * 16).toFixed(5));
			setVittaa(+(val / 213.0022).toFixed(5));
			setVitasta(+(val / 10.6501).toFixed(5));
			setDhanurmushti(+(val * 1.87791).toFixed(5));
			setDharnugrah(+(val * 31.8).toFixed(5));
			setAngul(+(val * 342.25).toFixed(5));
			setKilometer(+(val * 1).toFixed(5));
			setMeter(+(val / 4).toFixed(5));
			setCentimeter(+(val * 4).toFixed(5));
			setMile(+(val * 16).toFixed(5));
			setYard(+(val * 64).toFixed(5));
			setFoot(+(val / 53.25056).toFixed(5));
			setInch(+(val * 0.3755825).toFixed(5));
		} else if (unit == "danda") {
			setYojan(+(val / 64).toFixed(5));
			setKosh(+(val / 4).toFixed(5));
			setDanda(+(val * 1).toFixed(5));
			setHaath(+(val * 4).toFixed(5));
			setVittaa(+(val / 852.03366).toFixed(5));
			setVitasta(+(val / 42.60168).toFixed(5));
			setDhanurmushti(+(val / 2.13008).toFixed(5));
			setDharnugrah(+(val * 85.56).toFixed(5));
			setAngul(+(val * 7.95).toFixed(5));
			setKilometer(+(val * 1).toFixed(5));
			setMeter(+(val / 4).toFixed(5));
			setCentimeter(+(val * 4).toFixed(5));
			setMile(+(val * 16).toFixed(5));
			setYard(+(val * 64).toFixed(5));
			setFoot(+(val / 53.25056).toFixed(5));
			setInch(+(val * 0.3755825).toFixed(5));
		} else if (unit == "haath") {
			setYojan(+(val / 256).toFixed(5));
			setKosh(+(val / 16).toFixed(5));
			setDanda(+(val / 4).toFixed(5));
			setHaath(+(val * 1).toFixed(5));
			setVittaa(+(val / 3408.13464).toFixed(5));
			setVitasta(+(val / 170.40673).toFixed(5));
			setDhanurmushti(+(val / 8.52034).toFixed(5));
			setDharnugrah(+(val * 1.99).toFixed(5));
			setAngul(+(val * 21.39).toFixed(5));
			setKilometer(+(val * 1).toFixed(5));
			setMeter(+(val / 4).toFixed(5));
			setCentimeter(+(val * 4).toFixed(5));
			setMile(+(val * 16).toFixed(5));
			setYard(+(val * 64).toFixed(5));
			setFoot(+(val / 53.25056).toFixed(5));
			setInch(+(val * 0.3755825).toFixed(5));
		} else if (unit == "vittaa") {
			setYojan(+(val * 13.31264).toFixed(5));
			setKosh(+(val * 213.022).toFixed(5));
			setDanda(+(val * 852.03366).toFixed(5));
			setHaath(+(val * 3408.13464).toFixed(5));
			setVittaa(+(val * 1).toFixed(5));
			setVitasta(+(val * 20).toFixed(5));
			setDhanurmushti(+(val * 400).toFixed(5));
			setDharnugrah(+(val * 6772.63).toFixed(5));
			setAngul(+(val * 72900).toFixed(5));
			setKilometer(+(val * 1).toFixed(5));
			setMeter(+(val / 4).toFixed(5));
			setCentimeter(+(val * 4).toFixed(5));
			setMile(+(val * 16).toFixed(5));
			setYard(+(val * 64).toFixed(5));
			setFoot(+(val / 53.25056).toFixed(5));
			setInch(+(val * 0.3755825).toFixed(5));
		} else if (unit == "vitasta") {
			setYojan(+(val / 1.50233).toFixed(5));
			setKosh(+(val * 10.6501).toFixed(5));
			setDanda(+(val * 42.60168).toFixed(5));
			setHaath(+(val * 170.40673).toFixed(5));
			setVittaa(+(val / 20).toFixed(5));
			setVitasta(+(val * 1).toFixed(5));
			setDhanurmushti(+(val * 20).toFixed(5));
			setDharnugrah(+(val * 338.63).toFixed(5));
			setAngul(+(val * 3645).toFixed(5));
			setKilometer(+(val * 1).toFixed(5));
			setMeter(+(val / 4).toFixed(5));
			setCentimeter(+(val * 4).toFixed(5));
			setMile(+(val * 16).toFixed(5));
			setYard(+(val * 64).toFixed(5));
			setFoot(+(val / 53.25056).toFixed(5));
			setInch(+(val * 0.3755825).toFixed(5));
		} else if (unit == "dhanurmushti") {
			setYojan(+(val / 30.04664).toFixed(5));
			setKosh(+(val / 1.87791).toFixed(5));
			setDanda(+(val * 2.13008).toFixed(5));
			setHaath(+(val * 8.52034).toFixed(5));
			setVittaa(+(val / 400).toFixed(5));
			setVitasta(+(val / 20).toFixed(5));
			setDhanurmushti(+(val * 1).toFixed(5));
			setDharnugrah(+(val * 16.93).toFixed(5));
			setAngul(+(val * 182.25).toFixed(5));
			setKilometer(+(val * 1).toFixed(5));
			setMeter(+(val / 4).toFixed(5));
			setCentimeter(+(val * 4).toFixed(5));
			setMile(+(val * 16).toFixed(5));
			setYard(+(val * 64).toFixed(5));
			setFoot(+(val / 53.25056).toFixed(5));
			setInch(+(val * 0.3755825).toFixed(5));
		} else if (unit == "dharnugrah") {
			setYojan(+(val / 508.72).toFixed(5));
			setKosh(+(val / 31.8).toFixed(5));
			setDanda(+(val / 7.95).toFixed(5));
			setHaath(+(val / 1.99).toFixed(5));
			setVittaa(+(val / 6772.63).toFixed(5));
			setVitasta(+(val / 338.63).toFixed(5));
			setDhanurmushti(+(val / 16.93).toFixed(5));
			setDharnugrah(+(val * 1).toFixed(5));
			setAngul(+(val * 10.7639).toFixed(5));
			setKilometer(+(val * 1).toFixed(5));
			setMeter(+(val / 4).toFixed(5));
			setCentimeter(+(val * 4).toFixed(5));
			setMile(+(val * 16).toFixed(5));
			setYard(+(val * 64).toFixed(5));
			setFoot(+(val / 53.25056).toFixed(5));
			setInch(+(val * 0.3755825).toFixed(5));
		} else if (unit == "angul") {
			setYojan(+(val / 5476).toFixed(5));
			setKosh(+(val / 342.25).toFixed(5));
			setDanda(+(val / 85.56).toFixed(5));
			setHaath(+(val / 21.39).toFixed(5));
			setVittaa(+(val / 72900).toFixed(5));
			setVitasta(+(val / 3645).toFixed(5));
			setDhanurmushti(+(val / 182.25).toFixed(5));
			setDharnugrah(+(val / 10.7639).toFixed(5));
			setAngul(+(val * 1).toFixed(5));
			setKilometer(+(val * 1).toFixed(5));
			setMeter(+(val / 4).toFixed(5));
			setCentimeter(+(val * 4).toFixed(5));
			setMile(+(val * 16).toFixed(5));
			setYard(+(val * 64).toFixed(5));
			setFoot(+(val / 53.25056).toFixed(5));
			setInch(+(val * 0.3755825).toFixed(5));
		} else if (unit == "kilometer") {
			setYojan(+(val / 5476).toFixed(5));
			setKosh(+(val / 342.25).toFixed(5));
			setDanda(+(val / 85.56).toFixed(5));
			setHaath(+(val / 21.39).toFixed(5));
			setVittaa(+(val / 72900).toFixed(5));
			setVitasta(+(val / 3645).toFixed(5));
			setDhanurmushti(+(val / 182.25).toFixed(5));
			setDharnugrah(+(val / 10.7639).toFixed(5));
			setAngul(+(val * 1).toFixed(5));
			setKilometer(+(val * 1).toFixed(5));
			setMeter(+(val / 4).toFixed(5));
			setCentimeter(+(val * 4).toFixed(5));
			setMile(+(val * 16).toFixed(5));
			setYard(+(val * 64).toFixed(5));
			setFoot(+(val / 53.25056).toFixed(5));
			setInch(+(val * 0.3755825).toFixed(5));
		} else if (unit == "meter") {
			setYojan(+(val / 5476).toFixed(5));
			setKosh(+(val / 342.25).toFixed(5));
			setDanda(+(val / 85.56).toFixed(5));
			setHaath(+(val / 21.39).toFixed(5));
			setVittaa(+(val / 72900).toFixed(5));
			setVitasta(+(val / 3645).toFixed(5));
			setDhanurmushti(+(val / 182.25).toFixed(5));
			setDharnugrah(+(val / 10.7639).toFixed(5));
			setAngul(+(val * 1).toFixed(5));
			setKilometer(+(val * 1).toFixed(5));
			setMeter(+(val / 4).toFixed(5));
			setCentimeter(+(val * 4).toFixed(5));
			setMile(+(val * 16).toFixed(5));
			setYard(+(val * 64).toFixed(5));
			setFoot(+(val / 53.25056).toFixed(5));
			setInch(+(val * 0.3755825).toFixed(5));
		} else if (unit == "centimeter") {
			setYojan(+(val / 5476).toFixed(5));
			setKosh(+(val / 342.25).toFixed(5));
			setDanda(+(val / 85.56).toFixed(5));
			setHaath(+(val / 21.39).toFixed(5));
			setVittaa(+(val / 72900).toFixed(5));
			setVitasta(+(val / 3645).toFixed(5));
			setDhanurmushti(+(val / 182.25).toFixed(5));
			setDharnugrah(+(val / 10.7639).toFixed(5));
			setAngul(+(val * 1).toFixed(5));
			setKilometer(+(val * 1).toFixed(5));
			setMeter(+(val / 4).toFixed(5));
			setCentimeter(+(val * 4).toFixed(5));
			setMile(+(val * 16).toFixed(5));
			setYard(+(val * 64).toFixed(5));
			setFoot(+(val / 53.25056).toFixed(5));
			setInch(+(val * 0.3755825).toFixed(5));
		} else if (unit == "mile") {
			setYojan(+(val / 5476).toFixed(5));
			setKosh(+(val / 342.25).toFixed(5));
			setDanda(+(val / 85.56).toFixed(5));
			setHaath(+(val / 21.39).toFixed(5));
			setVittaa(+(val / 72900).toFixed(5));
			setVitasta(+(val / 3645).toFixed(5));
			setDhanurmushti(+(val / 182.25).toFixed(5));
			setDharnugrah(+(val / 10.7639).toFixed(5));
			setAngul(+(val * 1).toFixed(5));
			setKilometer(+(val * 1).toFixed(5));
			setMeter(+(val / 4).toFixed(5));
			setCentimeter(+(val * 4).toFixed(5));
			setMile(+(val * 16).toFixed(5));
			setYard(+(val * 64).toFixed(5));
			setFoot(+(val / 53.25056).toFixed(5));
			setInch(+(val * 0.3755825).toFixed(5));
		} else if (unit == "yard") {
			setYojan(+(val / 5476).toFixed(5));
			setKosh(+(val / 342.25).toFixed(5));
			setDanda(+(val / 85.56).toFixed(5));
			setHaath(+(val / 21.39).toFixed(5));
			setVittaa(+(val / 72900).toFixed(5));
			setVitasta(+(val / 3645).toFixed(5));
			setDhanurmushti(+(val / 182.25).toFixed(5));
			setDharnugrah(+(val / 10.7639).toFixed(5));
			setAngul(+(val * 1).toFixed(5));
			setKilometer(+(val * 1).toFixed(5));
			setMeter(+(val / 4).toFixed(5));
			setCentimeter(+(val * 4).toFixed(5));
			setMile(+(val * 16).toFixed(5));
			setYard(+(val * 64).toFixed(5));
			setFoot(+(val / 53.25056).toFixed(5));
			setInch(+(val * 0.3755825).toFixed(5));
		} else if (unit == "foot") {
			setYojan(+(val / 5476).toFixed(5));
			setKosh(+(val / 342.25).toFixed(5));
			setDanda(+(val / 85.56).toFixed(5));
			setHaath(+(val / 21.39).toFixed(5));
			setVittaa(+(val / 72900).toFixed(5));
			setVitasta(+(val / 3645).toFixed(5));
			setDhanurmushti(+(val / 182.25).toFixed(5));
			setDharnugrah(+(val / 10.7639).toFixed(5));
			setAngul(+(val * 1).toFixed(5));
			setKilometer(+(val * 1).toFixed(5));
			setMeter(+(val / 4).toFixed(5));
			setCentimeter(+(val * 4).toFixed(5));
			setMile(+(val * 16).toFixed(5));
			setYard(+(val * 64).toFixed(5));
			setFoot(+(val / 53.25056).toFixed(5));
			setInch(+(val * 0.3755825).toFixed(5));
		} else if (unit == "inch") {
			setYojan(+(val / 5476).toFixed(5));
			setKosh(+(val / 342.25).toFixed(5));
			setDanda(+(val / 85.56).toFixed(5));
			setHaath(+(val / 21.39).toFixed(5));
			setVittaa(+(val / 72900).toFixed(5));
			setVitasta(+(val / 3645).toFixed(5));
			setDhanurmushti(+(val / 182.25).toFixed(5));
			setDharnugrah(+(val / 10.7639).toFixed(5));
			setAngul(+(val * 1).toFixed(5));
			setKilometer(+(val * 1).toFixed(5));
			setMeter(+(val / 4).toFixed(5));
			setCentimeter(+(val * 4).toFixed(5));
			setMile(+(val * 16).toFixed(5));
			setYard(+(val * 64).toFixed(5));
			setFoot(+(val / 53.25056).toFixed(5));
			setInch(+(val * 0.3755825).toFixed(5));
		}
	};

	const results = [
		{ key: 1, label: "Kilometer", value: kilometer },
		{ key: 2, label: "Meter", value: meter },
		{ key: 3, label: "Centimeter", value: centimeter },
		{ key: 4, label: "Mile", value: mile },
		{ key: 5, label: "Yard", value: yard },
		{ key: 6, label: "Foot", value: foot },
		{ key: 7, label: "Inch", value: inch },
		{ key: 8, label: "Yojan", value: yojan },
		{ key: 9, label: "Kosh", value: kosh },
		{ key: 10, label: "Danda", value: danda },
		{ key: 11, label: "Haath", value: haath },
		{ key: 12, label: "Vittaa", value: vittaa },
		{ key: 13, label: "Vitasta", value: vitasta },
		{ key: 14, label: "Dhanurmushti", value: dhanurmushti },
		{ key: 15, label: "Dhanurgrah", value: dharnugrah },
		{ key: 16, label: "Angul", value: angul }
	];

	return (
		<View style={globalStyles.container}>
			<InputCard units={units} convert={convert} />
			<ResultCard units={units} results={results} />
			<KeyboardSpacer />
		</View>
	);
}

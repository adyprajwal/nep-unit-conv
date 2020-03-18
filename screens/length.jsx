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
		{ index: "3", label: "Danda/Dhanush", value: "danda" },
		{ index: "4", label: "Gaj", value: "gaj" },
		{ index: "5", label: "Haath", value: "haath" },
		{ index: "6", label: "Bitta", value: "bitta" },
		{ index: "7", label: "Dhanurmushti", value: "dhanurmushti" },
		{ index: "8", label: "Dhanurgrah", value: "dhanurgrah" },
		//{ index: "9", label: "Angul", value: "angul" },
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
	const [bitta, setBitta] = useState("0");
	const [gaj, setGaj] = useState("0");
	const [dhanurmushti, setDhanurmushti] = useState("0");
	const [dhanurgrah, setDhanurgrah] = useState("0");
	//const [angul, //setAngul] = useState("0");
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
			setKosh(+(val * 4).toFixed(5));
			setDanda(+(val * 8000).toFixed(5));
			setHaath(+(val * 31680).toFixed(5));
			setBitta(+(val * 63360).toFixed(5));
			setGaj(+(val * 15840.012672).toFixed(5));
			setDhanurmushti(+(val * 95040).toFixed(5));
			setDhanurgrah(+(val * 190080).toFixed(5));
			//setAngul(+(val * 5476).toFixed(5));
			setKilometer(+(val * 14.484096).toFixed(5));
			setMeter(+(val * 14484.096).toFixed(5));
			setCentimeter(+(val * 1448409.6).toFixed(5));
			setMile(+(val * 9.00009792).toFixed(5));
			setYard(+(val * 15840.012672).toFixed(5));
			setFoot(+(val * 47520).toFixed(5));
			setInch(+(val * 570240).toFixed(5));
		} else if (unit == "kosh") {
			setYojan(+(val * 0.25).toFixed(5));
			setKosh(+(val * 1).toFixed(5));
			setDanda(+(val * 2000).toFixed(5));
			setHaath(+(val * 7920).toFixed(5));
			setBitta(+(val * 15840).toFixed(5));
			setGaj(+(val * 3960.003168).toFixed(5));
			setDhanurmushti(+(val * 23760).toFixed(5));
			setDhanurgrah(+(val * 47520).toFixed(5));
			//setAngul(+(val * 342.25).toFixed(5));
			setKilometer(+(val * 3.621024).toFixed(5));
			setMeter(+(val * 3621.024).toFixed(5));
			setCentimeter(+(val * 362102.4).toFixed(5));
			setMile(+(val * 2.25002448).toFixed(5));
			setYard(+(val * 3960.003168).toFixed(5));
			setFoot(+(val * 11880).toFixed(5));
			setInch(+(val * 142560).toFixed(5));
		} else if (unit == "danda") {
			setYojan(+(val * 0.000125).toFixed(5));
			setKosh(+(val * 0.0005).toFixed(5));
			setDanda(+(val * 1).toFixed(5));
			setHaath(+(val * 3.96).toFixed(5));
			setBitta(+(val * 7.92).toFixed(5));
			setGaj(+(val * 1.98000158).toFixed(5));
			setDhanurmushti(+(val * 11.88).toFixed(5));
			setDhanurgrah(+(val * 23.76).toFixed(5));
			//setAngul(+(val * 7.95).toFixed(5));
			setKilometer(+(val * 0.00181051).toFixed(5));
			setMeter(+(val * 1.810512).toFixed(5));
			setCentimeter(+(val * 181.0512).toFixed(5));
			setMile(+(val * 0.00112501).toFixed(5));
			setYard(+(val * 1.98000158).toFixed(5));
			setFoot(+(val * 5.94).toFixed(5));
			setInch(+(val * 71.28).toFixed(5));
		} else if (unit == "haath") {
			setYojan(+(val * 0.00003157).toFixed(5));
			setKosh(+(val * 0.00012626).toFixed(5));
			setDanda(+(val * 0.25252525).toFixed(5));
			setHaath(+(val * 1).toFixed(5));
			setBitta(+(val * 2).toFixed(5));
			setGaj(+(val * 0.5000004).toFixed(5));
			setDhanurmushti(+(val * 3).toFixed(5));
			setDhanurgrah(+(val * 6).toFixed(5));
			//setAngul(+(val * 21.39).toFixed(5));
			setKilometer(+(val * 0.0004572).toFixed(5));
			setMeter(+(val * 0.4572).toFixed(5));
			setCentimeter(+(val * 45.72).toFixed(5));
			setMile(+(val * 0.00028409).toFixed(5));
			setYard(+(val * 0.5000004).toFixed(5));
			setFoot(+(val * 1.5).toFixed(5));
			setInch(+(val * 18).toFixed(5));
		} else if (unit == "bitta") {
			setYojan(+(val * 0.00001578).toFixed(5));
			setKosh(+(val * 0.00006313).toFixed(5));
			setDanda(+(val * 0.12626263).toFixed(5));
			setHaath(+(val * 0.5).toFixed(5));
			setBitta(+(val * 1).toFixed(5));
			setGaj(+(val * 0.2500002).toFixed(5));
			setDhanurmushti(+(val * 1.5).toFixed(5));
			setDhanurgrah(+(val * 3).toFixed(5));
			//setAngul(+(val * 72900).toFixed(5));
			setKilometer(+(val * 0.0002286).toFixed(5));
			setMeter(+(val * 0.2286).toFixed(5));
			setCentimeter(+(val * 22.86).toFixed(5));
			setMile(+(val * 0.00014205).toFixed(5));
			setYard(+(val * 0.2500002).toFixed(5));
			setFoot(+(val * 0.75).toFixed(5));
			setInch(+(val * 9).toFixed(5));
		} else if (unit == "gaj") {
			setYojan(+(val * 0.00006313).toFixed(5));
			setKosh(+(val * 0.00025253).toFixed(5));
			setDanda(+(val * 0.5050501).toFixed(5));
			setHaath(+(val * 2).toFixed(5));
			setBitta(+(val * 4).toFixed(5));
			setGaj(+(val * 1).toFixed(5));
			setDhanurmushti(+(val * 6).toFixed(5));
			setDhanurgrah(+(val * 12).toFixed(5));
			//setAngul(+(val * 3645).toFixed(5));
			setKilometer(+(val * 0.0009144).toFixed(5));
			setMeter(+(val * 0.914399).toFixed(5));
			setCentimeter(+(val * 91.439926).toFixed(5));
			setMile(+(val * 0.0056819).toFixed(5));
			setYard(+(val * 1).toFixed(5));
			setFoot(+(val * 3).toFixed(5));
			setInch(+(val * 36).toFixed(5));
		} else if (unit == "dhanurmushti") {
			setYojan(+(val * 0.00001052).toFixed(5));
			setKosh(+(val * 0.0004209).toFixed(5));
			setDanda(+(val * 0.08417508).toFixed(5));
			setHaath(+(val * 0.3333333).toFixed(5));
			setBitta(+(val * 0.66666667).toFixed(5));
			setGaj(+(val * 0.16666668).toFixed(5));
			setDhanurmushti(+(val * 1).toFixed(5));
			setDhanurgrah(+(val * 2).toFixed(5));
			//setAngul(+(val * 182.25).toFixed(5));
			setKilometer(+(val * 0.0001524).toFixed(5));
			setMeter(+(val * 0.1524).toFixed(5));
			setCentimeter(+(val * 15.24).toFixed(5));
			setMile(+(val * 0.0000947).toFixed(5));
			setYard(+(val * 1.666668).toFixed(5));
			setFoot(+(val * 0.5).toFixed(5));
			setInch(+(val * 6).toFixed(5));
		} else if (unit == "dhanurgrah") {
			setYojan(+(val * 0.00000526).toFixed(5));
			setKosh(+(val * 0.0000701).toFixed(5));
			setDanda(+(val * 0.04208754).toFixed(5));
			setHaath(+(val * 0.16666667).toFixed(5));
			setBitta(+(val * 0.3333333).toFixed(5));
			setGaj(+(val * 0.0833334).toFixed(5));
			setDhanurmushti(+(val * 0.5).toFixed(5));
			setDhanurgrah(+(val * 1).toFixed(5));
			//setAngul(+(val * 10.7639).toFixed(5));
			setKilometer(+(val * 0.0000762).toFixed(5));
			setMeter(+(val * 0.0762).toFixed(5));
			setCentimeter(+(val * 7.62).toFixed(5));
			setMile(+(val * 0.00004735).toFixed(5));
			setYard(+(val * 0.0833334).toFixed(5));
			setFoot(+(val * 0.25).toFixed(5));
			setInch(+(val * 3).toFixed(5));
		}
		//else if (unit == "angul") {
		// 	setYojan(+(val / 5476).toFixed(5));
		// 	setKosh(+(val / 342.25).toFixed(5));
		// 	setDanda(+(val / 85.56).toFixed(5));
		// 	setHaath(+(val / 21.39).toFixed(5));
		// 	setBitta(+(val / 72900).toFixed(5));
		// 	setGaj(+(val / 3645).toFixed(5));
		// 	setDhanurmushti(+(val / 182.25).toFixed(5));
		// 	setDhanurgrah(+(val / 10.7639).toFixed(5));
		// 	//setAngul(+(val * 1).toFixed(5));
		// 	setKilometer(+(val * 1).toFixed(5));
		// 	setMeter(+(val / 4).toFixed(5));
		// 	setCentimeter(+(val * 4).toFixed(5));
		// 	setMile(+(val * 16).toFixed(5));
		// 	setYard(+(val * 64).toFixed(5));
		// 	setFoot(+(val / 53.25056).toFixed(5));
		// 	setInch(+(val * 0.3755825).toFixed(5));
		// }
		else if (unit == "kilometer") {
			setYojan(+(val * 0.069041244).toFixed(5));
			setKosh(+(val * 0.276164974).toFixed(5));
			setDanda(+(val * 552.3299487).toFixed(5));
			setHaath(+(val * 2187.226597).toFixed(5));
			setBitta(+(val * 4374.453193).toFixed(5));
			setGaj(+(val * 1093.614173).toFixed(5));
			setDhanurmushti(+(val * 6561.67979).toFixed(5));
			setDhanurgrah(+(val * 13123.35958).toFixed(5));
			//setAngul(+(val * 1).toFixed(5));
			setKilometer(+(val * 1).toFixed(5));
			setMeter(+(val * 1000).toFixed(5));
			setCentimeter(+(val * 100000).toFixed(5));
			setMile(+(val * 0.6213779).toFixed(5));
			setYard(+(val * 1093.614173).toFixed(5));
			setFoot(+(val * 3280.839895).toFixed(5));
			setInch(+(val * 39370.07874).toFixed(5));
		} else if (unit == "meter") {
			setYojan(+(val * 0.000069041).toFixed(5));
			setKosh(+(val * 0.000276165).toFixed(5));
			setDanda(+(val * 0.552329949).toFixed(5));
			setHaath(+(val * 2.187226597).toFixed(5));
			setBitta(+(val * 4.374453193).toFixed(5));
			setGaj(+(val * 1.093614173).toFixed(5));
			setDhanurmushti(+(val * 6.56167979).toFixed(5));
			setDhanurgrah(+(val * 13.12335958).toFixed(5));
			//setAngul(+(val * 1).toFixed(5));
			setKilometer(+(val * 0.001).toFixed(5));
			setMeter(+(val * 1).toFixed(5));
			setCentimeter(+(val * 100).toFixed(5));
			setMile(+(val * 0.000621378).toFixed(5));
			setYard(+(val * 1.093614173).toFixed(5));
			setFoot(+(val * 3.280839895).toFixed(5));
			setInch(+(val * 39.37007874).toFixed(5));
		} else if (unit == "centimeter") {
			setYojan(+(val * 0.0000006904));
			setKosh(+(val * 0.000002761));
			setDanda(+(val * 0.005523299).toFixed(5));
			setHaath(+(val * 0.021872266).toFixed(5));
			setBitta(+(val * 0.43744532).toFixed(5));
			setGaj(+(val * 0.010936142).toFixed(5));
			setDhanurmushti(+(val * 0.065616798).toFixed(5));
			setDhanurgrah(+(val * 0.131233596).toFixed(5));
			//setAngul(+(val * 1).toFixed(5));
			setKilometer(+(val * 0.00001).toFixed(5));
			setMeter(+(val * 0.01).toFixed(5));
			setCentimeter(+(val * 1).toFixed(5));
			setMile(+(val * 0.00000621378).toFixed(5));
			setYard(+(val * 0.010936142).toFixed(5));
			setFoot(+(val * 0.03280839).toFixed(5));
			setInch(+(val * 0.393700787).toFixed(5));
		} else if (unit == "mile") {
			setYojan(+(val * 0.1111099).toFixed(5));
			setKosh(+(val * 0.444439609).toFixed(5));
			setDanda(+(val * 888.8792179).toFixed(5));
			setHaath(+(val * 3519.961703).toFixed(5));
			setBitta(+(val * 7039.923406).toFixed(5));
			setGaj(+(val * 1759.982259).toFixed(5));
			setDhanurmushti(+(val * 10559.88511).toFixed(5));
			setDhanurgrah(+(val * 21119.77022).toFixed(5));
			//setAngul(+(val * 1).toFixed(5));
			setKilometer(+(val * 1.6093264).toFixed(5));
			setMeter(+(val * 1609.326481).toFixed(5));
			setCentimeter(+(val * 160932.6491).toFixed(5));
			setMile(+(val * 1).toFixed(5));
			setYard(+(val * 1759.982259).toFixed(5));
			setFoot(+(val * 5279.942554).toFixed(5));
			setInch(+(val * 63359.31065).toFixed(5));
		} else if (unit == "yard") {
			setYojan(+(val * 0.00006313).toFixed(5));
			setKosh(+(val * 0.00025253).toFixed(5));
			setDanda(+(val * 0.5050501).toFixed(5));
			setHaath(+(val * 2).toFixed(5));
			setBitta(+(val * 4).toFixed(5));
			setGaj(+(val * 1).toFixed(5));
			setDhanurmushti(+(val * 6).toFixed(5));
			setDhanurgrah(+(val * 12).toFixed(5));
			//setAngul(+(val * 3645).toFixed(5));
			setKilometer(+(val * 0.0009144).toFixed(5));
			setMeter(+(val * 0.914399).toFixed(5));
			setCentimeter(+(val * 91.439926).toFixed(5));
			setMile(+(val * 0.0056819).toFixed(5));
			setYard(+(val * 1).toFixed(5));
			setFoot(+(val * 3).toFixed(5));
			setInch(+(val * 36).toFixed(5));
		} else if (unit == "foot") {
			setYojan(+(val * 0.0000210438).toFixed(5));
			setKosh(+(val * 0.0000841751).toFixed(5));
			setDanda(+(val * 0.168350168).toFixed(5));
			setHaath(+(val * 0.6666667).toFixed(5));
			setBitta(+(val * 1.333333).toFixed(5));
			setGaj(+(val * 0.3333336).toFixed(5));
			setDhanurmushti(+(val * 2).toFixed(5));
			setDhanurgrah(+(val * 4).toFixed(5));
			//setAngul(+(val * 1).toFixed(5));
			setKilometer(+(val * 0.0003048).toFixed(5));
			setMeter(+(val * 0.3048).toFixed(5));
			setCentimeter(+(val * 30.48).toFixed(5));
			setMile(+(val * 0.000189396).toFixed(5));
			setYard(+(val * 0.333336).toFixed(5));
			setFoot(+(val * 1).toFixed(5));
			setInch(+(val * 12).toFixed(5));
		} else if (unit == "inch") {
			setYojan(+(val * 0.00000175));
			setKosh(+(val * 0.00000701));
			setDanda(+(val * 0.01402918).toFixed(5));
			setHaath(+(val * 0.05555556).toFixed(5));
			setBitta(+(val * 0.111111).toFixed(5));
			setGaj(+(val * 0.0277778).toFixed(5));
			setDhanurmushti(+(val * 0.16666667).toFixed(5));
			setDhanurgrah(+(val * 0.3333333).toFixed(5));
			//setAngul(+(val * 1).toFixed(5));
			setKilometer(+(val * 0.0000254).toFixed(5));
			setMeter(+(val * 0.0254).toFixed(5));
			setCentimeter(+(val * 2.54).toFixed(5));
			setMile(+(val * 0.00001578).toFixed(5));
			setYard(+(val * 0.0277778).toFixed(5));
			setFoot(+(val * 0.08333333).toFixed(5));
			setInch(+(val * 1).toFixed(5));
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
		{ key: 10, label: "Danda/Dhanush", value: danda },
		{ key: 11, label: "Gaj", value: gaj },
		{ key: 12, label: "Haath", value: haath },
		{ key: 13, label: "Bitta", value: bitta },
		{ key: 14, label: "Dhanurmushti", value: dhanurmushti },
		{ key: 15, label: "Dhanurgrah", value: dhanurgrah }
		//{ key: 16, label: "Angul", value: angul }
	];

	return (
		<View style={globalStyles.container}>
			<InputCard units={units} convert={convert} />
			<ResultCard units={units} results={results} />
			<KeyboardSpacer />
		</View>
	);
}

import React, { useState } from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import InputCard from "../components/shared/inputCard";
import ResultCard from "../components/shared/resultCard";
import KeyboardSpacer from "react-native-keyboard-spacer";

export default function Weight() {
	const units = [
		{ index: "1", label: "Dharni", value: "dharni" },
		{ index: "2", label: "Sher", value: "sher" },
		{ index: "3", label: "Pau", value: "pau" },
		{ index: "4", label: "Pau (Ktm)", value: "pauktm" },
		{ index: "5", label: "Chatak", value: "chatak" },
		{ index: "6", label: "Tola", value: "tola" },
		{ index: "7", label: "Lal", value: "lal" },
		{ index: "8", label: "Metric Ton", value: "metricTon" },
		{ index: "9", label: "Kilogram", value: "kilogram" },
		{ index: "10", label: "Gram", value: "gram" },
		{ index: "11", label: "Milligram", value: "milligram" },
		{ index: "12", label: "Pound", value: "pound" },
		{ index: "13", label: "Ounce", value: "ounce" }
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

	const convert = (val, unit) => {
		if (unit == "dharni") {
			setDharni(+(val * 1).toFixed(5));
			setSher(+(val * 2.564998).toFixed(5));
			setPau(+(val * 9.5736).toFixed(5));
			setPauktm(+(val * 12).toFixed(5));
			setChatak(+(val * 41.0461327).toFixed(5));
			setTola(+(val * 205.2658662).toFixed(5));
			setLal(+(val * 20526.58662).toFixed(5));
			setMetricTon(+(val * 0.0023934));
			setKilogram(+(val * 2.394).toFixed(5));
			setGram(+(val * 2393.4).toFixed(5));
			setMilligram(+(val * 2393400).toFixed(5));
			setPound(+(val * 5.276537).toFixed(5));
			setOunce(+(val * 84.42470053).toFixed(5));
		} else if (unit == "sher") {
			setDharni(+(val * 0.389863).toFixed(5));
			setSher(+(val * 1).toFixed(5));
			setPau(+(val * 3.7324).toFixed(5));
			setPauktm(+(val * 4.6655).toFixed(5));
			setChatak(+(val * 16.0024).toFixed(5));
			setTola(+(val * 80.025729).toFixed(5));
			setLal(+(val * 8002.57).toFixed(5));
			setMetricTon(+(val * 0.00093).toFixed(5));
			setKilogram(+(val * 0.9331).toFixed(5));
			setGram(+(val * 933.1).toFixed(5));
			setMilligram(+(val * 933100).toFixed(5));
			setPound(+(val * 2.05713).toFixed(5));
			setOunce(+(val * 32.9141).toFixed(5));
		} else if (unit == "pau") {
			setDharni(+(val * 0.10445).toFixed(5));
			setSher(+(val * 0.26792).toFixed(5));
			setPau(+(val * 1).toFixed(5));
			setPauktm(+(val * 1.25).toFixed(5));
			setChatak(+(val * 4.28743).toFixed(5));
			setTola(+(val * 21.4408233).toFixed(5));
			setLal(+(val * 2144.08).toFixed(5));
			setMetricTon(+(val * 0.00025).toFixed(5));
			setKilogram(+(val * 0.25).toFixed(5));
			setGram(+(val * 250).toFixed(5));
			setMilligram(+(val * 250000).toFixed(5));
			setPound(+(val * 0.55116).toFixed(5));
			setOunce(+(val * 8.81849).toFixed(5));
		} else if (unit == "pauktm") {
			setDharni(+(val * 0.083563).toFixed(5));
			setSher(+(val * 0.21434).toFixed(5));
			setPau(+(val * 0.8).toFixed(5));
			setPauktm(+(val * 1).toFixed(5));
			setChatak(+(val * 3.42994).toFixed(5));
			setTola(+(val * 17.1526587).toFixed(5));
			setLal(+(val * 1715.27).toFixed(5));
			setMetricTon(+(val * 0.0002).toFixed(5));
			setKilogram(+(val * 0.2).toFixed(5));
			setGram(+(val * 200).toFixed(5));
			setMilligram(+(val * 200000).toFixed(5));
			setPound(+(val * 0.44092).toFixed(5));
			setOunce(+(val * 7.05479).toFixed(5));
		} else if (unit == "chatak") {
			setDharni(+(val * 0.024362).toFixed(5));
			setSher(+(val * 0.06249).toFixed(5));
			setPau(+(val * 0.23324).toFixed(5));
			setPauktm(+(val * 0.29155).toFixed(5));
			setChatak(+(val * 1).toFixed(5));
			setTola(+(val * 5.00085763).toFixed(5));
			setLal(+(val * 500.086).toFixed(5));
			setMetricTon(+(val * 0.000058).toFixed(5));
			setKilogram(+(val * 0.05831).toFixed(5));
			setGram(+(val * 58.31).toFixed(5));
			setMilligram(+(val * 58310).toFixed(5));
			setPound(+(val * 0.12855).toFixed(5));
			setOunce(+(val * 2.05682).toFixed(5));
		} else if (unit == "tola") {
			setDharni(+(val * 0.00487173).toFixed(5));
			setSher(+(val * 0.0125).toFixed(5));
			setPau(+(val * 0.04664).toFixed(5));
			setPauktm(+(val * 0.0583).toFixed(5));
			setChatak(+(val * 0.19997).toFixed(5));
			setTola(+(val * 1).toFixed(5));
			setLal(+(val * 100).toFixed(5));
			setMetricTon(+(val * 0.000012).toFixed(5));
			setKilogram(+(val * 0.01166).toFixed(5));
			setGram(+(val * 11.66).toFixed(5));
			setMilligram(+(val * 11660).toFixed(5));
			setPound(+(val * 0.02571).toFixed(5));
			setOunce(+(val * 0.41129).toFixed(5));
		} else if (unit == "lal") {
			setDharni(+(val * 0.00004872).toFixed(5));
			setSher(+(val * 0.00012).toFixed(5));
			setPau(+(val * 0.0004664).toFixed(5));
			setPauktm(+(val * 0.000583).toFixed(5));
			setChatak(+(val * 0.002).toFixed(5));
			setTola(+(val * 0.01).toFixed(5));
			setLal(+(val * 1).toFixed(5));
			setMetricTon(+(val * 0.00000012));
			setKilogram(+(val * 0.00012).toFixed(5));
			setGram(+(val * 0.1166).toFixed(5));
			setMilligram(+(val * 116.6).toFixed(5));
			setPound(+(val * 0.00026).toFixed(5));
			setOunce(+(val * 0.00411).toFixed(5));
		} else if (unit == "metricTon") {
			setDharni(+(val * 417.816).toFixed(5));
			setSher(+(val * 1071.7).toFixed(5));
			setPau(+(val * 4000).toFixed(5));
			setPauktm(+(val * 5000).toFixed(5));
			setChatak(+(val * 17149.7).toFixed(5));
			setTola(+(val * 85763.2933).toFixed(5));
			setLal(+(val * 85876329).toFixed(5));
			setMetricTon(+(val * 1).toFixed(5));
			setKilogram(+(val * 1000).toFixed(5));
			setGram(+(val * 1000000).toFixed(5));
			setMilligram(+(val * 1000000000).toFixed(5));
			setPound(+(val * 2204.62).toFixed(5));
			setOunce(+(val * 35274).toFixed(5));
		} else if (unit == "kilogram") {
			setDharni(+(val * 0.417816).toFixed(5));
			setSher(+(val * 1.0717).toFixed(5));
			setPau(+(val * 4).toFixed(5));
			setPauktm(+(val * 5).toFixed(5));
			setChatak(+(val * 17.1497).toFixed(5));
			setTola(+(val * 85.7632933).toFixed(5));
			setLal(+(val * 8576.33).toFixed(5));
			setMetricTon(+(val * 0.001).toFixed(5));
			setKilogram(+(val * 1).toFixed(5));
			setGram(+(val * 1000).toFixed(5));
			setMilligram(+(val * 1000000).toFixed(5));
			setPound(+(val * 2.20462).toFixed(5));
			setOunce(+(val * 35.274).toFixed(5));
		} else if (unit == "gram") {
			setDharni(+(val * 0.00041782).toFixed(5));
			setSher(+(val * 0.00107).toFixed(5));
			setPau(+(val * 0.004).toFixed(5));
			setPauktm(+(val * 0.005).toFixed(5));
			setChatak(+(val * 0.01715).toFixed(5));
			setTola(+(val * 0.08576329).toFixed(5));
			setLal(+(val * 8.57633).toFixed(5));
			setMetricTon(+(val * 0.000001));
			setKilogram(+(val * 0.001).toFixed(5));
			setGram(+(val * 1).toFixed(5));
			setMilligram(+(val * 1000).toFixed(5));
			setPound(+(val * 0.0022).toFixed(5));
			setOunce(+(val * 0.03527).toFixed(5));
		} else if (unit == "milligram") {
			setDharni(+(val * 0.00000042));
			setSher(+(val * 0.0000011));
			setPau(+(val * 0.000004));
			setPauktm(+(val * 0.000005));
			setChatak(+(val * 0.000017));
			setTola(+(val * 0.000085763));
			setLal(+(val * 0.00858).toFixed(5));
			setMetricTon(+(val * 0.000000001));
			setKilogram(+(val * 0.000001));
			setGram(+(val * 0.001).toFixed(5));
			setMilligram(+(val * 1).toFixed(5));
			setPound(+(val * 0.0000022));
			setOunce(+(val * 0.000035));
		} else if (unit == "pound") {
			setDharni(+(val * 0.189518).toFixed(5));
			setSher(+(val * 0.48611).toFixed(5));
			setPau(+(val * 1.814371638).toFixed(5));
			setPauktm(+(val * 2.267964547).toFixed(5));
			setChatak(+(val * 7.77899).toFixed(5));
			setTola(+(val * 38.9016217).toFixed(5));
			setLal(+(val * 3890.16).toFixed(5));
			setMetricTon(+(val * 0.00045).toFixed(5));
			setKilogram(+(val * 0.45359).toFixed(5));
			setGram(+(val * 453.593).toFixed(5));
			setMilligram(+(val * 453592.9).toFixed(5));
			setPound(+(val * 1).toFixed(5));
			setOunce(+(val * 16).toFixed(5));
		} else if (unit == "ounce") {
			setDharni(+(val * 0.0118449).toFixed(5));
			setSher(+(val * 0.03038).toFixed(5));
			setPau(+(val * 0.113398092).toFixed(5));
			setPauktm(+(val * 0.141747616).toFixed(5));
			setChatak(+(val * 0.48619).toFixed(5));
			setTola(+(val * 2.43134847).toFixed(5));
			setLal(+(val * 243.135).toFixed(5));
			setMetricTon(+(val * 0.000028).toFixed(5));
			setKilogram(+(val * 10.02835).toFixed(5));
			setGram(+(val * 28.3495).toFixed(5));
			setMilligram(+(val * 28349.52).toFixed(5));
			setPound(+(val * 0.0625).toFixed(5));
			setOunce(+(val * 1).toFixed(5));
		}
	};

	const results = [
		{ key: 1, label: "Metric Ton", value: metricTon },
		{ key: 2, label: "Kilogram", value: kilogram },
		{ key: 3, label: "Gram", value: gram },
		{ key: 4, label: "Milligram", value: milligram },
		{ key: 5, label: "Pound", value: pound },
		{ key: 6, label: "Ounce", value: ounce },
		{ key: 7, label: "Dharni", value: dharni },
		{ key: 8, label: "Sher", value: sher },
		{ key: 9, label: "Pau", value: pau },
		{ key: 10, label: "Pau (Ktm)", value: pauktm },
		{ key: 11, label: "Chatak", value: chatak },
		{ key: 12, label: "Tola", value: tola },
		{ key: 13, label: "Lal", value: lal }
	];

	return (
		<View style={globalStyles.container}>
			<InputCard units={units} convert={convert} />
			<ResultCard units={units} results={results} />
			<KeyboardSpacer />
		</View>
	);
}

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
			setSher(+(val * 16).toFixed(5));
			setPau(+(val * 64).toFixed(5));
			setPauktm(+(val * 256).toFixed(5));
			setChatak(+(val / 13.31264).toFixed(5));
			setTola(+(val * 1.50233).toFixed(5));
			setLal(+(val * 30.04664).toFixed(5));
			setMetricTon(+(val * 508.72).toFixed(5));
			setKilogram(+(val * 5476).toFixed(5));
			setGram(+(val * 1).toFixed(5));
			setMilligram(+(val / 4).toFixed(5));
			setPound(+(val * 4).toFixed(5));
			setOunce(+(val * 16).toFixed(5));
		} else if (unit == "sher") {
			setDharni(+(val / 16).toFixed(5));
			setSher(+(val * 1).toFixed(5));
			setPau(+(val * 4).toFixed(5));
			setPauktm(+(val * 16).toFixed(5));
			setChatak(+(val / 213.0022).toFixed(5));
			setTola(+(val / 10.6501).toFixed(5));
			setLal(+(val * 1.87791).toFixed(5));
			setMetricTon(+(val * 31.8).toFixed(5));
			setKilogram(+(val * 342.25).toFixed(5));
			setGram(+(val * 1).toFixed(5));
			setMilligram(+(val / 4).toFixed(5));
			setPound(+(val * 4).toFixed(5));
			setOunce(+(val * 16).toFixed(5));
		} else if (unit == "pau") {
			setDharni(+(val / 64).toFixed(5));
			setSher(+(val / 4).toFixed(5));
			setPau(+(val * 1).toFixed(5));
			setPauktm(+(val * 4).toFixed(5));
			setChatak(+(val / 852.03366).toFixed(5));
			setTola(+(val / 42.60168).toFixed(5));
			setLal(+(val / 2.13008).toFixed(5));
			setMetricTon(+(val * 85.56).toFixed(5));
			setKilogram(+(val * 7.95).toFixed(5));
			setGram(+(val * 1).toFixed(5));
			setMilligram(+(val / 4).toFixed(5));
			setPound(+(val * 4).toFixed(5));
			setOunce(+(val * 16).toFixed(5));
		} else if (unit == "pauktm") {
			setDharni(+(val / 256).toFixed(5));
			setSher(+(val / 16).toFixed(5));
			setPau(+(val / 4).toFixed(5));
			setPauktm(+(val * 1).toFixed(5));
			setChatak(+(val / 3408.13464).toFixed(5));
			setTola(+(val / 170.40673).toFixed(5));
			setLal(+(val / 8.52034).toFixed(5));
			setMetricTon(+(val * 1.99).toFixed(5));
			setKilogram(+(val * 21.39).toFixed(5));
			setGram(+(val * 1).toFixed(5));
			setMilligram(+(val / 4).toFixed(5));
			setPound(+(val * 4).toFixed(5));
			setOunce(+(val * 16).toFixed(5));
		} else if (unit == "chatak") {
			setDharni(+(val * 13.31264).toFixed(5));
			setSher(+(val * 213.022).toFixed(5));
			setPau(+(val * 852.03366).toFixed(5));
			setPauktm(+(val * 3408.13464).toFixed(5));
			setChatak(+(val * 1).toFixed(5));
			setTola(+(val * 20).toFixed(5));
			setLal(+(val * 400).toFixed(5));
			setMetricTon(+(val * 6772.63).toFixed(5));
			setKilogram(+(val * 72900).toFixed(5));
			setGram(+(val * 1).toFixed(5));
			setMilligram(+(val / 4).toFixed(5));
			setPound(+(val * 4).toFixed(5));
			setOunce(+(val * 16).toFixed(5));
		} else if (unit == "tola") {
			setDharni(+(val / 1.50233).toFixed(5));
			setSher(+(val * 10.6501).toFixed(5));
			setPau(+(val * 42.60168).toFixed(5));
			setPauktm(+(val * 170.40673).toFixed(5));
			setChatak(+(val / 20).toFixed(5));
			setTola(+(val * 1).toFixed(5));
			setLal(+(val * 20).toFixed(5));
			setMetricTon(+(val * 338.63).toFixed(5));
			setKilogram(+(val * 3645).toFixed(5));
			setGram(+(val * 1).toFixed(5));
			setMilligram(+(val / 4).toFixed(5));
			setPound(+(val * 4).toFixed(5));
			setOunce(+(val * 16).toFixed(5));
		} else if (unit == "lal") {
			setDharni(+(val / 30.04664).toFixed(5));
			setSher(+(val / 1.87791).toFixed(5));
			setPau(+(val * 2.13008).toFixed(5));
			setPauktm(+(val * 8.52034).toFixed(5));
			setChatak(+(val / 400).toFixed(5));
			setTola(+(val / 20).toFixed(5));
			setLal(+(val * 1).toFixed(5));
			setMetricTon(+(val * 16.93).toFixed(5));
			setKilogram(+(val * 182.25).toFixed(5));
			setGram(+(val * 1).toFixed(5));
			setMilligram(+(val / 4).toFixed(5));
			setPound(+(val * 4).toFixed(5));
			setOunce(+(val * 16).toFixed(5));
		} else if (unit == "metricTon") {
			setDharni(+(val / 508.72).toFixed(5));
			setSher(+(val / 31.8).toFixed(5));
			setPau(+(val / 7.95).toFixed(5));
			setPauktm(+(val / 1.99).toFixed(5));
			setChatak(+(val / 6772.63).toFixed(5));
			setTola(+(val / 338.63).toFixed(5));
			setLal(+(val / 16.93).toFixed(5));
			setMetricTon(+(val * 1).toFixed(5));
			setKilogram(+(val * 10.7639).toFixed(5));
			setGram(+(val * 1).toFixed(5));
			setMilligram(+(val / 4).toFixed(5));
			setPound(+(val * 4).toFixed(5));
			setOunce(+(val * 16).toFixed(5));
		} else if (unit == "kilogram") {
			setDharni(+(val / 5476).toFixed(5));
			setSher(+(val / 342.25).toFixed(5));
			setPau(+(val / 85.56).toFixed(5));
			setPauktm(+(val / 21.39).toFixed(5));
			setChatak(+(val / 72900).toFixed(5));
			setTola(+(val / 3645).toFixed(5));
			setLal(+(val / 182.25).toFixed(5));
			setMetricTon(+(val / 10.7639).toFixed(5));
			setKilogram(+(val * 1).toFixed(5));
			setGram(+(val * 1).toFixed(5));
			setMilligram(+(val / 4).toFixed(5));
			setPound(+(val * 4).toFixed(5));
			setOunce(+(val * 16).toFixed(5));
		} else if (unit == "gram") {
			setDharni(+(val / 5476).toFixed(5));
			setSher(+(val / 342.25).toFixed(5));
			setPau(+(val / 85.56).toFixed(5));
			setPauktm(+(val / 21.39).toFixed(5));
			setChatak(+(val / 72900).toFixed(5));
			setTola(+(val / 3645).toFixed(5));
			setLal(+(val / 182.25).toFixed(5));
			setMetricTon(+(val / 10.7639).toFixed(5));
			setKilogram(+(val * 1).toFixed(5));
			setGram(+(val * 1).toFixed(5));
			setMilligram(+(val / 4).toFixed(5));
			setPound(+(val * 4).toFixed(5));
			setOunce(+(val * 16).toFixed(5));
		} else if (unit == "milligram") {
			setDharni(+(val / 5476).toFixed(5));
			setSher(+(val / 342.25).toFixed(5));
			setPau(+(val / 85.56).toFixed(5));
			setPauktm(+(val / 21.39).toFixed(5));
			setChatak(+(val / 72900).toFixed(5));
			setTola(+(val / 3645).toFixed(5));
			setLal(+(val / 182.25).toFixed(5));
			setMetricTon(+(val / 10.7639).toFixed(5));
			setKilogram(+(val * 1).toFixed(5));
			setGram(+(val * 1).toFixed(5));
			setMilligram(+(val / 4).toFixed(5));
			setPound(+(val * 4).toFixed(5));
			setOunce(+(val * 16).toFixed(5));
		} else if (unit == "pound") {
			setDharni(+(val / 5476).toFixed(5));
			setSher(+(val / 342.25).toFixed(5));
			setPau(+(val / 85.56).toFixed(5));
			setPauktm(+(val / 21.39).toFixed(5));
			setChatak(+(val / 72900).toFixed(5));
			setTola(+(val / 3645).toFixed(5));
			setLal(+(val / 182.25).toFixed(5));
			setMetricTon(+(val / 10.7639).toFixed(5));
			setKilogram(+(val * 1).toFixed(5));
			setGram(+(val * 1).toFixed(5));
			setMilligram(+(val / 4).toFixed(5));
			setPound(+(val * 4).toFixed(5));
			setOunce(+(val * 16).toFixed(5));
		} else if (unit == "ounce") {
			setDharni(+(val / 5476).toFixed(5));
			setSher(+(val / 342.25).toFixed(5));
			setPau(+(val / 85.56).toFixed(5));
			setPauktm(+(val / 21.39).toFixed(5));
			setChatak(+(val / 72900).toFixed(5));
			setTola(+(val / 3645).toFixed(5));
			setLal(+(val / 182.25).toFixed(5));
			setMetricTon(+(val / 10.7639).toFixed(5));
			setKilogram(+(val * 1).toFixed(5));
			setGram(+(val * 1).toFixed(5));
			setMilligram(+(val / 4).toFixed(5));
			setPound(+(val * 4).toFixed(5));
			setOunce(+(val * 16).toFixed(5));
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

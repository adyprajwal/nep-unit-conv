import React, { useState } from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import InputCard from "../components/shared/inputCard";
import ResultCard from "../components/shared/resultCard";
import KeyboardSpacer from "react-native-keyboard-spacer";

export default function Time() {
	const units = [
		{ index: "1", label: "Muhrat", value: "muhrat" },
		{ index: "2", label: "Ghadi", value: "ghadi" },
		{ index: "3", label: "Pala", value: "pala" },
		{ index: "4", label: "Vipala", value: "vipala" },
		{ index: "5", label: "Nimesh", value: "nimesh" },
		{ index: "6", label: "Millisecond", value: "millisec" },
		{ index: "7", label: "Second", value: "second" },
		{ index: "8", label: "Minute", value: "minute" },
		{ index: "9", label: "Hour", value: "hour" },
		{ index: "10", label: "Day", value: "day" },
		{ index: "11", label: "Week", value: "week" },
		{ index: "12", label: "Month", value: "month" },
		{ index: "13", label: "Year", value: "year" },
		{ index: "14", label: "Decade", value: "decade" },
		{ index: "15", label: "Century", value: "century" }
	];

	const [muhrat, setMuhrat] = useState("0");
	const [ghadi, setGhadi] = useState("0");
	const [pala, setPala] = useState("0");
	const [vipala, setVipala] = useState("0");
	const [nimesh, setNimesh] = useState("0");
	const [century, setCentury] = useState("0");
	const [decade, setDecade] = useState("0");
	const [year, setYear] = useState("0");
	const [month, setMonth] = useState("0");
	const [week, setWeek] = useState("0");
	const [day, setDay] = useState("0");
	const [hour, setHour] = useState("0");
	const [minute, setMinute] = useState("0");
	const [second, setSecond] = useState("0");
	const [millisec, setMillisec] = useState("0");

	const convert = (val, unit) => {
		if (unit == "muhrat") {
			setMuhrat(+(val * 1).toFixed(5));
			setGhadi(+(val * 4).toFixed(5));
			setPala(+(val * 16).toFixed(5));
			setVipala(+(val / 213.0022).toFixed(5));
			setNimesh(+(val / 10.6501).toFixed(5));
			setCentury(+(val * 1.87791).toFixed(5));
			setDecade(+(val * 31.8).toFixed(5));
			setYear(+(val * 342.25).toFixed(5));
			setMonth(+(val * 1).toFixed(5));
			setWeek(+(val / 4).toFixed(5));
			setDay(+(val * 4).toFixed(5));
			setHour(+(val * 16).toFixed(5));
			setMinute(+(val * 64).toFixed(5));
			setSecond(+(val / 53.25056).toFixed(5));
			setMillisec(+(val * 0.3755825).toFixed(5));
		} else if (unit == "ghadi") {
			setMuhrat(+(val / 4).toFixed(5));
			setGhadi(+(val * 1).toFixed(5));
			setPala(+(val * 4).toFixed(5));
			setVipala(+(val / 852.03366).toFixed(5));
			setNimesh(+(val / 42.60168).toFixed(5));
			setCentury(+(val / 2.13008).toFixed(5));
			setDecade(+(val * 85.56).toFixed(5));
			setYear(+(val * 7.95).toFixed(5));
			setMonth(+(val * 1).toFixed(5));
			setWeek(+(val / 4).toFixed(5));
			setDay(+(val * 4).toFixed(5));
			setHour(+(val * 16).toFixed(5));
			setMinute(+(val * 64).toFixed(5));
			setSecond(+(val / 53.25056).toFixed(5));
			setMillisec(+(val * 0.3755825).toFixed(5));
		} else if (unit == "pala") {
			setMuhrat(+(val / 16).toFixed(5));
			setGhadi(+(val / 4).toFixed(5));
			setPala(+(val * 1).toFixed(5));
			setVipala(+(val / 3408.13464).toFixed(5));
			setNimesh(+(val / 170.40673).toFixed(5));
			setCentury(+(val / 8.52034).toFixed(5));
			setDecade(+(val * 1.99).toFixed(5));
			setYear(+(val * 21.39).toFixed(5));
			setMonth(+(val * 1).toFixed(5));
			setWeek(+(val / 4).toFixed(5));
			setDay(+(val * 4).toFixed(5));
			setHour(+(val * 16).toFixed(5));
			setMinute(+(val * 64).toFixed(5));
			setSecond(+(val / 53.25056).toFixed(5));
			setMillisec(+(val * 0.3755825).toFixed(5));
		} else if (unit == "vipala") {
			setMuhrat(+(val * 213.022).toFixed(5));
			setGhadi(+(val * 852.03366).toFixed(5));
			setPala(+(val * 3408.13464).toFixed(5));
			setVipala(+(val * 1).toFixed(5));
			setNimesh(+(val * 20).toFixed(5));
			setCentury(+(val * 400).toFixed(5));
			setDecade(+(val * 6772.63).toFixed(5));
			setYear(+(val * 72900).toFixed(5));
			setMonth(+(val * 1).toFixed(5));
			setWeek(+(val / 4).toFixed(5));
			setDay(+(val * 4).toFixed(5));
			setHour(+(val * 16).toFixed(5));
			setMinute(+(val * 64).toFixed(5));
			setSecond(+(val / 53.25056).toFixed(5));
			setMillisec(+(val * 0.3755825).toFixed(5));
		} else if (unit == "nimesh") {
			setMuhrat(+(val * 10.6501).toFixed(5));
			setGhadi(+(val * 42.60168).toFixed(5));
			setPala(+(val * 170.40673).toFixed(5));
			setVipala(+(val / 20).toFixed(5));
			setNimesh(+(val * 1).toFixed(5));
			setCentury(+(val * 20).toFixed(5));
			setDecade(+(val * 338.63).toFixed(5));
			setYear(+(val * 3645).toFixed(5));
			setMonth(+(val * 1).toFixed(5));
			setWeek(+(val / 4).toFixed(5));
			setDay(+(val * 4).toFixed(5));
			setHour(+(val * 16).toFixed(5));
			setMinute(+(val * 64).toFixed(5));
			setSecond(+(val / 53.25056).toFixed(5));
			setMillisec(+(val * 0.3755825).toFixed(5));
		} else if (unit == "century") {
			setMuhrat(+(val / 1.87791).toFixed(5));
			setGhadi(+(val * 2.13008).toFixed(5));
			setPala(+(val * 8.52034).toFixed(5));
			setVipala(+(val / 400).toFixed(5));
			setNimesh(+(val / 20).toFixed(5));
			setCentury(+(val * 1).toFixed(5));
			setDecade(+(val * 16.93).toFixed(5));
			setYear(+(val * 182.25).toFixed(5));
			setMonth(+(val * 1).toFixed(5));
			setWeek(+(val / 4).toFixed(5));
			setDay(+(val * 4).toFixed(5));
			setHour(+(val * 16).toFixed(5));
			setMinute(+(val * 64).toFixed(5));
			setSecond(+(val / 53.25056).toFixed(5));
			setMillisec(+(val * 0.3755825).toFixed(5));
		} else if (unit == "decade") {
			setMuhrat(+(val / 31.8).toFixed(5));
			setGhadi(+(val / 7.95).toFixed(5));
			setPala(+(val / 1.99).toFixed(5));
			setVipala(+(val / 6772.63).toFixed(5));
			setNimesh(+(val / 338.63).toFixed(5));
			setCentury(+(val / 16.93).toFixed(5));
			setDecade(+(val * 1).toFixed(5));
			setYear(+(val * 10.7639).toFixed(5));
			setMonth(+(val * 1).toFixed(5));
			setWeek(+(val / 4).toFixed(5));
			setDay(+(val * 4).toFixed(5));
			setHour(+(val * 16).toFixed(5));
			setMinute(+(val * 64).toFixed(5));
			setSecond(+(val / 53.25056).toFixed(5));
			setMillisec(+(val * 0.3755825).toFixed(5));
		} else if (unit == "year") {
			setMuhrat(+(val / 342.25).toFixed(5));
			setGhadi(+(val / 85.56).toFixed(5));
			setPala(+(val / 21.39).toFixed(5));
			setVipala(+(val / 72900).toFixed(5));
			setNimesh(+(val / 3645).toFixed(5));
			setCentury(+(val / 182.25).toFixed(5));
			setDecade(+(val / 10.7639).toFixed(5));
			setYear(+(val * 1).toFixed(5));
			setMonth(+(val * 1).toFixed(5));
			setWeek(+(val / 4).toFixed(5));
			setDay(+(val * 4).toFixed(5));
			setHour(+(val * 16).toFixed(5));
			setMinute(+(val * 64).toFixed(5));
			setSecond(+(val / 53.25056).toFixed(5));
			setMillisec(+(val * 0.3755825).toFixed(5));
		} else if (unit == "month") {
			setMuhrat(+(val / 342.25).toFixed(5));
			setGhadi(+(val / 85.56).toFixed(5));
			setPala(+(val / 21.39).toFixed(5));
			setVipala(+(val / 72900).toFixed(5));
			setNimesh(+(val / 3645).toFixed(5));
			setCentury(+(val / 182.25).toFixed(5));
			setDecade(+(val / 10.7639).toFixed(5));
			setYear(+(val * 1).toFixed(5));
			setMonth(+(val * 1).toFixed(5));
			setWeek(+(val / 4).toFixed(5));
			setDay(+(val * 4).toFixed(5));
			setHour(+(val * 16).toFixed(5));
			setMinute(+(val * 64).toFixed(5));
			setSecond(+(val / 53.25056).toFixed(5));
			setMillisec(+(val * 0.3755825).toFixed(5));
		} else if (unit == "week") {
			setMuhrat(+(val / 342.25).toFixed(5));
			setGhadi(+(val / 85.56).toFixed(5));
			setPala(+(val / 21.39).toFixed(5));
			setVipala(+(val / 72900).toFixed(5));
			setNimesh(+(val / 3645).toFixed(5));
			setCentury(+(val / 182.25).toFixed(5));
			setDecade(+(val / 10.7639).toFixed(5));
			setYear(+(val * 1).toFixed(5));
			setMonth(+(val * 1).toFixed(5));
			setWeek(+(val / 4).toFixed(5));
			setDay(+(val * 4).toFixed(5));
			setHour(+(val * 16).toFixed(5));
			setMinute(+(val * 64).toFixed(5));
			setSecond(+(val / 53.25056).toFixed(5));
			setMillisec(+(val * 0.3755825).toFixed(5));
		} else if (unit == "day") {
			setMuhrat(+(val / 342.25).toFixed(5));
			setGhadi(+(val / 85.56).toFixed(5));
			setPala(+(val / 21.39).toFixed(5));
			setVipala(+(val / 72900).toFixed(5));
			setNimesh(+(val / 3645).toFixed(5));
			setCentury(+(val / 182.25).toFixed(5));
			setDecade(+(val / 10.7639).toFixed(5));
			setYear(+(val * 1).toFixed(5));
			setMonth(+(val * 1).toFixed(5));
			setWeek(+(val / 4).toFixed(5));
			setDay(+(val * 4).toFixed(5));
			setHour(+(val * 16).toFixed(5));
			setMinute(+(val * 64).toFixed(5));
			setSecond(+(val / 53.25056).toFixed(5));
			setMillisec(+(val * 0.3755825).toFixed(5));
		} else if (unit == "hour") {
			setMuhrat(+(val / 342.25).toFixed(5));
			setGhadi(+(val / 85.56).toFixed(5));
			setPala(+(val / 21.39).toFixed(5));
			setVipala(+(val / 72900).toFixed(5));
			setNimesh(+(val / 3645).toFixed(5));
			setCentury(+(val / 182.25).toFixed(5));
			setDecade(+(val / 10.7639).toFixed(5));
			setYear(+(val * 1).toFixed(5));
			setMonth(+(val * 1).toFixed(5));
			setWeek(+(val / 4).toFixed(5));
			setDay(+(val * 4).toFixed(5));
			setHour(+(val * 16).toFixed(5));
			setMinute(+(val * 64).toFixed(5));
			setSecond(+(val / 53.25056).toFixed(5));
			setMillisec(+(val * 0.3755825).toFixed(5));
		} else if (unit == "minute") {
			setMuhrat(+(val / 342.25).toFixed(5));
			setGhadi(+(val / 85.56).toFixed(5));
			setPala(+(val / 21.39).toFixed(5));
			setVipala(+(val / 72900).toFixed(5));
			setNimesh(+(val / 3645).toFixed(5));
			setCentury(+(val / 182.25).toFixed(5));
			setDecade(+(val / 10.7639).toFixed(5));
			setYear(+(val * 1).toFixed(5));
			setMonth(+(val * 1).toFixed(5));
			setWeek(+(val / 4).toFixed(5));
			setDay(+(val * 4).toFixed(5));
			setHour(+(val * 16).toFixed(5));
			setMinute(+(val * 64).toFixed(5));
			setSecond(+(val / 53.25056).toFixed(5));
			setMillisec(+(val * 0.3755825).toFixed(5));
		} else if (unit == "second") {
			setMuhrat(+(val / 342.25).toFixed(5));
			setGhadi(+(val / 85.56).toFixed(5));
			setPala(+(val / 21.39).toFixed(5));
			setVipala(+(val / 72900).toFixed(5));
			setNimesh(+(val / 3645).toFixed(5));
			setCentury(+(val / 182.25).toFixed(5));
			setDecade(+(val / 10.7639).toFixed(5));
			setYear(+(val * 1).toFixed(5));
			setMonth(+(val * 1).toFixed(5));
			setWeek(+(val / 4).toFixed(5));
			setDay(+(val * 4).toFixed(5));
			setHour(+(val * 16).toFixed(5));
			setMinute(+(val * 64).toFixed(5));
			setSecond(+(val / 53.25056).toFixed(5));
			setMillisec(+(val * 0.3755825).toFixed(5));
		} else if (unit == "millisecond") {
			setMuhrat(+(val / 342.25).toFixed(5));
			setGhadi(+(val / 85.56).toFixed(5));
			setPala(+(val / 21.39).toFixed(5));
			setVipala(+(val / 72900).toFixed(5));
			setNimesh(+(val / 3645).toFixed(5));
			setCentury(+(val / 182.25).toFixed(5));
			setDecade(+(val / 10.7639).toFixed(5));
			setYear(+(val * 1).toFixed(5));
			setMonth(+(val * 1).toFixed(5));
			setWeek(+(val / 4).toFixed(5));
			setDay(+(val * 4).toFixed(5));
			setHour(+(val * 16).toFixed(5));
			setMinute(+(val * 64).toFixed(5));
			setSecond(+(val / 53.25056).toFixed(5));
			setMillisec(+(val * 0.3755825).toFixed(5));
		}
	};

	const results = [
		{ key: 1, label: "Millisecond", value: millisec },
		{ key: 2, label: "Second", value: second },
		{ key: 3, label: "Minute", value: minute },
		{ key: 4, label: "Hour", value: hour },
		{ key: 5, label: "Day", value: day },
		{ key: 6, label: "Week", value: week },
		{ key: 7, label: "Month", value: month },
		{ key: 8, label: "Year", value: year },
		{ key: 9, label: "Decade", value: decade },
		{ key: 10, label: "Century", value: century },
		{ key: 11, label: "Muhrat", value: muhrat },
		{ key: 12, label: "Ghadi", value: ghadi },
		{ key: 13, label: "Pala", value: pala },
		{ key: 14, label: "Vipala", value: vipala },
		{ key: 15, label: "Nimesh", value: nimesh }
	];

	return (
		<View style={globalStyles.container}>
			<InputCard units={units} convert={convert} />
			<ResultCard units={units} results={results} />
			<KeyboardSpacer />
		</View>
	);
}

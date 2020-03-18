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
			setGhadi(+(val * 2).toFixed(5));
			setPala(+(val * 120).toFixed(5));
			setVipala(+(val * 7200).toFixed(5));
			setNimesh(+(val * 13499.57813818).toFixed(5));
			setCentury(+(val * 0.00000093));
			setDecade(+(val * 0.00000926).toFixed(5));
			setYear(+(val * 0.00009259).toFixed(5));
			setMonth(+(val * 0.0011111).toFixed(5));
			setWeek(+(val * 0.0047619).toFixed(5));
			setDay(+(val * 0.0333333).toFixed(5));
			setHour(+(val * 0.8).toFixed(5));
			setMinute(+(val * 48).toFixed(5));
			setSecond(+(val * 2880).toFixed(5));
			setMillisec(+(val * 2880000).toFixed(5));
		} else if (unit == "ghadi") {
			setMuhrat(+(val * 0.5).toFixed(5));
			setGhadi(+(val * 1).toFixed(5));
			setPala(+(val * 60).toFixed(5));
			setVipala(+(val * 3600).toFixed(5));
			setNimesh(+(val * 6749.789069).toFixed(5));
			setCentury(+(val * 0.00000046));
			setDecade(+(val * 0.00000463));
			setYear(+(val * 0.0000463).toFixed(5));
			setMonth(+(val * 0.00055556).toFixed(5));
			setWeek(+(val * 0.00238095).toFixed(5));
			setDay(+(val * 0.01666667).toFixed(5));
			setHour(+(val * 0.4).toFixed(5));
			setMinute(+(val * 24).toFixed(5));
			setSecond(+(val * 1440).toFixed(5));
			setMillisec(+(val * 1440000).toFixed(5));
		} else if (unit == "pala") {
			setMuhrat(+(val * 0.00833333).toFixed(5));
			setGhadi(+(val * 0.01666667).toFixed(5));
			setPala(+(val * 1).toFixed(5));
			setVipala(+(val * 60).toFixed(5));
			setNimesh(+(val * 112.49648448).toFixed(5));
			setCentury(+(val * 0.000000007716));
			setDecade(+(val * 0.00000007716));
			setYear(+(val * 0.000000771605));
			setMonth(+(val * 0.00000926).toFixed(5));
			setWeek(+(val * 0.00003968).toFixed(5));
			setDay(+(val * 0.00027778).toFixed(5));
			setHour(+(val * 0.00666667).toFixed(5));
			setMinute(+(val * 0.4).toFixed(5));
			setSecond(+(val * 24).toFixed(5));
			setMillisec(+(val * 24000).toFixed(5));
		} else if (unit == "vipala") {
			setMuhrat(+(val * 0.00013889).toFixed(5));
			setGhadi(+(val * 0.00027778).toFixed(5));
			setPala(+(val * 0.01666667).toFixed(5));
			setVipala(+(val * 1).toFixed(5));
			setNimesh(+(val * 1.87494141).toFixed(5));
			setCentury(+(val * 0.000000000129));
			setDecade(+(val * 0.000000001286));
			setYear(+(val * 0.00000001286));
			setMonth(+(val * 0.00000015));
			setWeek(+(val * 0.00000066));
			setDay(+(val * 0.00000463));
			setHour(+(val * 0.00011111).toFixed(5));
			setMinute(+(val * 0.00666667).toFixed(5));
			setSecond(+(val * 0.4).toFixed(5));
			setMillisec(+(val * 400).toFixed(5));
		} else if (unit == "nimesh") {
			setMuhrat(+(val * 0.00007408).toFixed(5));
			setGhadi(+(val * 0.00014815).toFixed(5));
			setPala(+(val * 0.00888917).toFixed(5));
			setVipala(+(val * 0.53335).toFixed(5));
			setNimesh(+(val * 1).toFixed(5));
			setCentury(+(val * 0.000000000069));
			setDecade(+(val * 0.00000000069));
			setYear(+(val * 0.0000000069));
			setMonth(+(val * 0.00000008));
			setWeek(+(val * 0.00000035));
			setDay(+(val * 0.00000247));
			setHour(+(val * 0.00005926).toFixed(5));
			setMinute(+(val * 0.00355567).toFixed(5));
			setSecond(+(val * 0.21334).toFixed(5));
			setMillisec(+(val * 213.34).toFixed(5));
		} else if (unit == "century") {
			setMuhrat(+(val * 1080000).toFixed(5));
			setGhadi(+(val * 2160000).toFixed(5));
			setPala(+(val * 129600000).toFixed(5));
			setVipala(+(val * 7776000000).toFixed(5));
			setNimesh(+(val * 14579544389).toFixed(5));
			setCentury(+(val * 1).toFixed(5));
			setDecade(+(val * 10).toFixed(5));
			setYear(+(val * 100).toFixed(5));
			setMonth(+(val * 1200).toFixed(5));
			setWeek(+(val * 5200).toFixed(5));
			setDay(+(val * 36000).toFixed(5));
			setHour(+(val * 864000).toFixed(5));
			setMinute(+(val * 51840000).toFixed(5));
			setSecond(+(val * 3110400000).toFixed(5));
			setMillisec(+(val * 3110400000000).toFixed(5));
		} else if (unit == "decade") {
			setMuhrat(+(val * 108000).toFixed(5));
			setGhadi(+(val * 216000).toFixed(5));
			setPala(+(val * 12960000).toFixed(5));
			setVipala(+(val * 777600000).toFixed(5));
			setNimesh(+(val * 1457954439).toFixed(5));
			setCentury(+(val * 0.1).toFixed(5));
			setDecade(+(val * 1).toFixed(5));
			setYear(+(val * 10).toFixed(5));
			setMonth(+(val * 120).toFixed(5));
			setWeek(+(val * 520).toFixed(5));
			setDay(+(val * 3650).toFixed(5));
			setHour(+(val * 86400).toFixed(5));
			setMinute(+(val * 5184000).toFixed(5));
			setSecond(+(val * 311040000).toFixed(5));
			setMillisec(+(val * 311040000000).toFixed(5));
		} else if (unit == "year") {
			setMuhrat(+(val * 10800).toFixed(5));
			setGhadi(+(val * 21600).toFixed(5));
			setPala(+(val * 1296000).toFixed(5));
			setVipala(+(val * 77760000).toFixed(5));
			setNimesh(+(val * 145795443.9).toFixed(5));
			setCentury(+(val * 0.01).toFixed(5));
			setDecade(+(val * 0.1).toFixed(5));
			setYear(+(val * 1).toFixed(5));
			setMonth(+(val * 12).toFixed(5));
			setWeek(+(val * 52).toFixed(5));
			setDay(+(val * 365).toFixed(5));
			setHour(+(val * 8640).toFixed(5));
			setMinute(+(val * 518400).toFixed(5));
			setSecond(+(val * 31104000).toFixed(5));
			setMillisec(+(val * 31104000000).toFixed(5));
		} else if (unit == "month") {
			setMuhrat(+(val * 900).toFixed(5));
			setGhadi(+(val * 1800).toFixed(5));
			setPala(+(val * 108000).toFixed(5));
			setVipala(+(val * 6480000).toFixed(5));
			setNimesh(+(val * 12149620.32).toFixed(5));
			setCentury(+(val * 0.000833333333).toFixed(5));
			setDecade(+(val * 0.0083333333).toFixed(5));
			setYear(+(val * 0.083333333).toFixed(5));
			setMonth(+(val * 1).toFixed(5));
			setWeek(+(val * 4).toFixed(5));
			setDay(+(val * 30).toFixed(5));
			setHour(+(val * 720).toFixed(5));
			setMinute(+(val * 43200).toFixed(5));
			setSecond(+(val * 2592000).toFixed(5));
			setMillisec(+(val * 2592000000).toFixed(5));
		} else if (unit == "week") {
			setMuhrat(+(val * 210).toFixed(5));
			setGhadi(+(val * 420).toFixed(5));
			setPala(+(val * 25200).toFixed(5));
			setVipala(+(val * 1512000).toFixed(5));
			setNimesh(+(val * 2834911.409).toFixed(5));
			setCentury(+(val * 0.0001944444).toFixed(5));
			setDecade(+(val * 0.001944444).toFixed(5));
			setYear(+(val * 0.0194444444).toFixed(5));
			setMonth(+(val * 0.233333333).toFixed(5));
			setWeek(+(val * 1).toFixed(5));
			setDay(+(val * 7).toFixed(5));
			setHour(+(val * 168).toFixed(5));
			setMinute(+(val * 10080).toFixed(5));
			setSecond(+(val * 604800).toFixed(5));
			setMillisec(+(val * 604800000).toFixed(5));
		} else if (unit == "day") {
			setMuhrat(+(val * 30).toFixed(5));
			setGhadi(+(val * 60).toFixed(5));
			setPala(+(val * 3600).toFixed(5));
			setVipala(+(val * 216000).toFixed(5));
			setNimesh(+(val * 404987.3441).toFixed(5));
			setCentury(+(val * 0.00002777778).toFixed(5));
			setDecade(+(val * 0.0002777778).toFixed(5));
			setYear(+(val * 0.002777778).toFixed(5));
			setMonth(+(val * 0.0333333).toFixed(5));
			setWeek(+(val * 0.142857143).toFixed(5));
			setDay(+(val * 1).toFixed(5));
			setHour(+(val * 24).toFixed(5));
			setMinute(+(val * 1440).toFixed(5));
			setSecond(+(val * 86400).toFixed(5));
			setMillisec(+(val * 86400000).toFixed(5));
		} else if (unit == "hour") {
			setMuhrat(+(val * 1.25).toFixed(5));
			setGhadi(+(val * 2.5).toFixed(5));
			setPala(+(val * 150).toFixed(5));
			setVipala(+(val * 9000).toFixed(5));
			setNimesh(+(val * 16874.47267).toFixed(5));
			setCentury(+(val * 0.000001157407));
			setDecade(+(val * 0.00001157407).toFixed(5));
			setYear(+(val * 0.0001157407).toFixed(5));
			setMonth(+(val * 0.001388889).toFixed(5));
			setWeek(+(val * 0.005952381).toFixed(5));
			setDay(+(val * 0.04166667).toFixed(5));
			setHour(+(val * 1).toFixed(5));
			setMinute(+(val * 60).toFixed(5));
			setSecond(+(val * 3600).toFixed(5));
			setMillisec(+(val * 3600000).toFixed(5));
		} else if (unit == "minute") {
			setMuhrat(+(val * 0.0208333).toFixed(5));
			setGhadi(+(val * 0.04166667).toFixed(5));
			setPala(+(val * 2.5).toFixed(5));
			setVipala(+(val * 150).toFixed(5));
			setNimesh(+(val * 281.24121121).toFixed(5));
			setCentury(+(val * 0.00000001929));
			setDecade(+(val * 0.000000192901));
			setYear(+(val * 0.000001929012));
			setMonth(+(val * 0.00002315).toFixed(5));
			setWeek(+(val * 0.00009921).toFixed(5));
			setDay(+(val * 0.00069444).toFixed(5));
			setHour(+(val * 0.01666667).toFixed(5));
			setMinute(+(val * 1).toFixed(5));
			setSecond(+(val * 60).toFixed(5));
			setMillisec(+(val * 60000).toFixed(5));
		} else if (unit == "second") {
			setMuhrat(+(val * 0.00034722).toFixed(5));
			setGhadi(+(val * 0.00069444).toFixed(5));
			setPala(+(val * 0.04166667).toFixed(5));
			setVipala(+(val * 2.5).toFixed(5));
			setNimesh(+(val * 4.68735352).toFixed(5));
			setCentury(+(val * 0.000000000322));
			setDecade(+(val * 0.000000003215));
			setYear(+(val * 0.00000003215));
			setMonth(+(val * 0.00000039));
			setWeek(+(val * 0.00000165));
			setDay(+(val * 0.00001157).toFixed(5));
			setHour(+(val * 0.00027778).toFixed(5));
			setMinute(+(val * 0.01666667).toFixed(5));
			setSecond(+(val * 1).toFixed(5));
			setMillisec(+(val * 1000).toFixed(5));
		} else if (unit == "millisec") {
			setMuhrat(+(val * 0.00000035));
			setGhadi(+(val * 0.00000069));
			setPala(+(val * 0.00004167).toFixed(5));
			setVipala(+(val * 0.0025).toFixed(5));
			setNimesh(+(val * 0.00468735).toFixed(5));
			setCentury(+(val * 0.0000000000003215));
			setDecade(+(val * 0.000000000003215));
			setYear(+(val * 0.00000000003215));
			setMonth(+(val * 0.000000000386));
			setWeek(+(val * 0.000000001653));
			setDay(+(val * 0.000000011574));
			setHour(+(val * 0.000000277778));
			setMinute(+(val * 0.000011667).toFixed(5));
			setSecond(+(val * 0.001).toFixed(5));
			setMillisec(+(val * 1).toFixed(5));
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

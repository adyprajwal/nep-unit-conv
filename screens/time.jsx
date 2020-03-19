import React, { useState } from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import InputCard from "../components/shared/inputCard";
import ResultCard from "../components/shared/resultCard";
import KeyboardSpacer from "react-native-keyboard-spacer";

export default function Time() {
	const units = [
		{ index: "0", label: "Muhrat", value: "muhrat", num: 1 / 2880 },
		{ index: "1", label: "Ghadi", value: "ghadi", num: 1 / 1440 },
		{ index: "2", label: "Pala", value: "pala", num: 1 / 24 },
		{ index: "3", label: "Vipala", value: "vipala", num: 1 / 0.4 },
		{ index: "4", label: "Nimesh", value: "nimesh", num: 75 / 16 },
		{ index: "5", label: "Millisecond", value: "millisec", num: 1000 },
		{ index: "6", label: "Second", value: "second", num: 1 },
		{ index: "7", label: "Minute", value: "minute", num: 1 / 60 },
		{ index: "8", label: "Hour", value: "hour", num: 1 / 3600 },
		{ index: "9", label: "Day", value: "day", num: 1 / 86400 },
		{ index: "10", label: "Week", value: "week", num: 1 / 604800 },
		{ index: "11", label: "Month", value: "month", num: 1 / 2592000 },
		{ index: "12", label: "Year", value: "year", num: 1 / 31536000 },
		{ index: "13", label: "Decade", value: "decade", num: 1 / 315360000 },
		{ index: "14", label: "Century", value: "century", num: 1 / 3153600000 }
	];

	const [muhrat, setMuhrat] = useState("0");
	const [ghadi, setGhadi] = useState("0");
	const [pala, setPala] = useState("0");
	const [vipala, setVipala] = useState("0");
	const [nimesh, setNimesh] = useState("0");
	const [millisec, setMillisec] = useState("0");
	const [second, setSecond] = useState("0");
	const [minute, setMinute] = useState("0");
	const [hour, setHour] = useState("0");
	const [day, setDay] = useState("0");
	const [week, setWeek] = useState("0");
	const [month, setMonth] = useState("0");
	const [year, setYear] = useState("0");
	const [decade, setDecade] = useState("0");
	const [century, setCentury] = useState("0");

	const values = units.map(item => item.value);
	const nums = units.map(item => item.num);

	const convert = (val, unit) => {
		for (let i = 0; i < 15; i++) {
			if (unit == values[i]) {
				setMuhrat(+(val * (nums[0] / nums[i])));
				setGhadi(+(val * (nums[1] / nums[i])));
				setPala(+(val * (nums[2] / nums[i])).toFixed(5));
				setVipala(+(val * (nums[3] / nums[i])).toFixed(5));
				setNimesh(+(val * (nums[4] / nums[i])).toFixed(5));
				setMillisec(+(val * (nums[5] / nums[i])).toFixed(5));
				setSecond(+(val * (nums[6] / nums[i])).toFixed(5));
				setMinute(+(val * (nums[7] / nums[i])).toFixed(5));
				setHour(+(val * (nums[8] / nums[i])));
				setDay(+(val * (nums[9] / nums[i])));
				setWeek(+(val * (nums[10] / nums[i])));
				setMonth(+(val * (nums[11] / nums[i])));
				setYear(+(val * (nums[12] / nums[i])));
				setDecade(+(val * (nums[13] / nums[i])));
				setCentury(+(val * (nums[14] / nums[i])));
			}
		}
	};

	const results = [
		{ key: 0, label: "Millisecond", value: millisec },
		{ key: 1, label: "Second", value: second },
		{ key: 2, label: "Minute", value: minute },
		{ key: 3, label: "Hour", value: hour },
		{ key: 4, label: "Day", value: day },
		{ key: 5, label: "Week", value: week },
		{ key: 6, label: "Month", value: month },
		{ key: 7, label: "Year", value: year },
		{ key: 8, label: "Decade", value: decade },
		{ key: 9, label: "Century", value: century },
		{ key: 10, label: "Muhrat", value: muhrat },
		{ key: 11, label: "Ghadi", value: ghadi },
		{ key: 12, label: "Pala", value: pala },
		{ key: 13, label: "Vipala", value: vipala },
		{ key: 14, label: "Nimesh", value: nimesh }
	];

	return (
		<View style={globalStyles.container}>
			<InputCard units={units} convert={convert} />
			<ResultCard units={units} results={results} />
			<KeyboardSpacer />
		</View>
	);
}

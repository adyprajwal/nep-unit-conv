import React, { useState } from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import InputCard from "../components/shared/inputCard";
import ResultCard from "../components/shared/resultCard";
import KeyboardSpacer from "react-native-keyboard-spacer";

export default function Volume() {
	const units = [
		{ index: "0", label: "Muri", value: "muri", num: 1 / 20 },
		{ index: "1", label: "Pathi", value: "pathi", num: 1 },
		{ index: "2", label: "Kuruwa", value: "kuruwa", num: 4 },
		{ index: "3", label: "Mana", value: "mana", num: 8 },
		{ index: "4", label: "Muthi", value: "muthi", num: 80 },
		{
			index: "5",
			label: "Cubic Meter",
			value: "cubicMeter",
			num: 0.004544596
		},
		{ index: "6", label: "Liter", value: "liter", num: 4.54596 },
		{ index: "7", label: "Milliliter", value: "milliliter", num: 4545.96 },
		{
			index: "8",
			label: "Cubic Foot",
			value: "cubicFoot",
			num: 0.16053906
		},
		{ index: "9", label: "Cubic Inch", value: "cubicInch", num: 277.4115 }
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

	const values = units.map(item => item.value);
	const nums = units.map(item => item.num);

	const convert = (val, unit) => {
		for (i = 0; i < 10; i++) {
			if (unit == values[i]) {
				setMuri(+(val * (nums[0] / nums[i])).toFixed(5));
				setPathi(+(val * (nums[1] / nums[i])).toFixed(5));
				setKuruwa(+(val * (nums[2] / nums[i])).toFixed(5));
				setMana(+(val * (nums[3] / nums[i])).toFixed(5));
				setMuthi(+(val * (nums[4] / nums[i])).toFixed(5));
				setCubicMeter(+(val * (nums[5] / nums[i])).toFixed(7));
				setLiter(+(val * (nums[6] / nums[i])).toFixed(5));
				setMilliliter(+(val * (nums[7] / nums[i])).toFixed(5));
				setCubicFoot(+(val * (nums[8] / nums[i])).toFixed(5));
				setCubicInch(+(val * (nums[9] / nums[i])).toFixed(5));
			}
		}
	};

	const results = [
		{ key: "0", label: "Cubic Meter", value: cubicMeter },
		{ key: "1", label: "Liter", value: liter },
		{ key: "2", label: "Milliliter", value: milliliter },
		{ key: "3", label: "Cubic Foot", value: cubicFoot },
		{ key: "4", label: "Cubic Inch", value: cubicInch },
		{ key: "5", label: "Muri", value: muri },
		{ key: "6", label: "Pathi", value: pathi },
		{ key: "7", label: "Kuruwa", value: kuruwa },
		{ key: "8", label: "Mana", value: mana },
		{ key: "9", label: "Muthi", value: muthi }
	];

	return (
		<View style={globalStyles.container}>
			<InputCard units={units} convert={convert} />
			<ResultCard units={units} results={results} />
			<KeyboardSpacer />
		</View>
	);
}

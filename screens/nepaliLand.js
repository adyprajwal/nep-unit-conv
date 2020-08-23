import React, { useState } from "react";
import { View, Text, StatusBar } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import InputCard from "../components/shared/inputCard";
import ResultCard from "../components/shared/resultCard";

export default function NepaliLand() {
	return (
		<View style={globalStyles.container}>
			<StatusBar backgroundColor="#b05643" />
			<Text>Nepali Land Converter</Text>
		</View>
	);
}

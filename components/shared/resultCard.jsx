import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	TouchableOpacity
} from "react-native";

export default function ResultCard({
	ropani,
	aana,
	paisa,
	daam,
	bigha,
	kattha,
	dhur,
	sqmtr,
	sqft
}) {
	return (
		<View>
			<Text>Ropani: {ropani}</Text>
			<Text>Aana: {aana}</Text>
			<Text>Paisa: {paisa}</Text>
			<Text>Daam: {daam}</Text>
			<Text>Bigha: {bigha}</Text>
			<Text>Kattha: {kattha}</Text>
			<Text>Dhur: {dhur}</Text>
			<Text>Square Meter: {sqmtr}</Text>
			<Text>Square Feet: {sqft}</Text>
		</View>
	);
}
const styles = StyleSheet.create({});

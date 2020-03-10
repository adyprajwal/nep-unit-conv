import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export default function InputField({ unit, handleTextChange }) {
	return (
		<TextInput
			style={globalStyles.inputField}
			placeholder="Enter Values"
			onChangeText={text => handleTextChange(text, { unit })}
			keyboardType={"numeric"}
		/>
	);
}

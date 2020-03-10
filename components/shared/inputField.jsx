import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export default function InputField({ unit, handleTextChange }) {
	return (
		<View>
			<TextInput
				style={globalStyles.input}
				placeholder="Enter Values"
				onChangeText={text => handleTextChange(text, { unit })}
				keyboardType={"numeric"}
			/>
		</View>
	);
}

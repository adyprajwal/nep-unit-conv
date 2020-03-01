import React, { useState } from "react";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import Navigator from "./routes/drawer";

const getFonts = () => {
	return Fonts.loadAsync({
		"exo2-regular": require("./assets/fonts/Exo2-Regular.ttf"),
		"exo2-bold": require("./assets/fonts/Exo2-Bold.ttf")
	});
};

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);
	if (fontsLoaded) {
		return <Navigator />;
	} else {
		return (
			<AppLoading startAsync={getFonts} onFinish={setFontsLoaded(true)} />
		);
	}
}

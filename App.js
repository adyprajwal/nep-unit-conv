import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import Navigator from "./routes/navigator";

export default function App() {
	useEffect(() => {
		SplashScreen.hide();
	});
	return <Navigator />;
}

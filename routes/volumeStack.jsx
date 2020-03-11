import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Volume from "../screens/length";
import Header from "../components/shared/header";

const Stack = createStackNavigator();

export default function VolumeStack() {
	return (
		<Stack.Navigator
			initialRouteName="Volume"
			screenOptions={{
				headerStyle: {
					backgroundColor: "#9a57ff"
				}
			}}
		>
			<Stack.Screen
				name="Length"
				component={Volume}
				options={({ navigation }) => {
					return {
						headerTitle: () => (
							<Header navigation={navigation} title="Volume" />
						)
					};
				}}
			/>
		</Stack.Navigator>
	);
}

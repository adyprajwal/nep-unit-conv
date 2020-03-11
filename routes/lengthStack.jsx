import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Length from "../screens/length";
import Header from "../components/shared/header";

const Stack = createStackNavigator();

export default function LengthStack() {
	return (
		<Stack.Navigator
			initialRouteName="Length"
			screenOptions={{
				headerStyle: {
					backgroundColor: "#00aeff"
				}
			}}
		>
			<Stack.Screen
				name="Length"
				component={Length}
				options={({ navigation }) => {
					return {
						headerTitle: () => (
							<Header navigation={navigation} title="Length" />
						)
					};
				}}
			/>
		</Stack.Navigator>
	);
}

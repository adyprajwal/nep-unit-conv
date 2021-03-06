import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Time from "../screens/time";
import Header from "../components/shared/header";

const Stack = createStackNavigator();

export default function TimeStack() {
	return (
		<Stack.Navigator
			initialRouteName="Time"
			screenOptions={{
				headerStyle: {
					backgroundColor: "#4bba47"
				}
			}}
		>
			<Stack.Screen
				name="Time"
				component={Time}
				options={({ navigation }) => {
					return {
						headerTitle: () => (
							<Header navigation={navigation} title="Time" />
						)
					};
				}}
			/>
		</Stack.Navigator>
	);
}

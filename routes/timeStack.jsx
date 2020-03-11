import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Time from "../screens/length";
import Header from "../components/shared/header";

const Stack = createStackNavigator();

export default function TimeStack() {
	return (
		<Stack.Navigator
			initialRouteName="Time"
			screenOptions={{
				headerStyle: {
					backgroundColor: "#52de60"
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

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Header from "../components/shared/header";

const Stack = createStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerStyle: {
					backgroundColor: "#f4511e"
				}
			}}
		>
			<Stack.Screen
				name="Home"
				component={Home}
				options={({ navigation }) => {
					return {
						headerTitle: () => (
							<Header navigation={navigation} title="Area" />
						)
					};
				}}
			/>
		</Stack.Navigator>
	);
}

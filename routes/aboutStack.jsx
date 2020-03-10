import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import AboutHeader from "../components/aboutHeader";

const Stack = createStackNavigator();

export default function AboutStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: "#ddd"
				}
			}}
		>
			<Stack.Screen
				name="About"
				component={About}
				options={({ navigation }) => {
					return {
						headerTitle: () => (
							<AboutHeader
								title="About"
								navigation={navigation}
							/>
						)
					};
				}}
			/>
		</Stack.Navigator>
	);
}

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import SecondHeader from "../components/shared/secHeader";

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
							<SecondHeader
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

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../screens/settings";
import SecondHeader from "../components/shared/secHeader";

const Stack = createStackNavigator();

export default function SettingsStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: "#ddd"
				}
			}}
		>
			<Stack.Screen
				name="Settings"
				component={Settings}
				options={({ navigation }) => {
					return {
						headerTitle: () => (
							<SecondHeader
								title="Settings"
								navigation={navigation}
							/>
						)
					};
				}}
			/>
		</Stack.Navigator>
	);
}

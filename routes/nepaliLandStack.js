import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NepaliLand from "../screens/nepaliLand";
import Header from "../components/shared/header";

const Stack = createStackNavigator();

export default function NepaliLandStack() {
	return (
		<Stack.Navigator
			initialRouteName="NepaliLand"
			screenOptions={{
				headerStyle: {
					backgroundColor: "#b05643",
				},
			}}
		>
			<Stack.Screen
				name="Nepali Land Converter"
				component={NepaliLand}
				options={({ navigation }) => {
					return {
						headerTitle: () => (
							<Header
								navigation={navigation}
								title="Nepali Land Converter"
							/>
						),
					};
				}}
			/>
		</Stack.Navigator>
	);
}

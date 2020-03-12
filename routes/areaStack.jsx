import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Area from "../screens/area";
import Header from "../components/shared/header";

const Stack = createStackNavigator();

export default function AreaStack() {
	return (
		<Stack.Navigator
			initialRouteName="Area"
			screenOptions={{
				headerStyle: {
					backgroundColor: "#ff3526"
				}
			}}
		>
			<Stack.Screen
				name="Area"
				component={Area}
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

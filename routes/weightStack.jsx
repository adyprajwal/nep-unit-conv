import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Weight from "../screens/weight";
import Header from "../components/shared/header";

const Stack = createStackNavigator();

export default function WeightStack() {
	return (
		<Stack.Navigator
			initialRouteName="Weight"
			screenOptions={{
				headerStyle: {
					backgroundColor: "#ff6924"
				}
			}}
		>
			<Stack.Screen
				name="Weight"
				component={Weight}
				options={({ navigation }) => {
					return {
						headerTitle: () => (
							<Header navigation={navigation} title="Weight" />
						)
					};
				}}
			/>
		</Stack.Navigator>
	);
}

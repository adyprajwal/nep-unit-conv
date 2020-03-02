import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/header";
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

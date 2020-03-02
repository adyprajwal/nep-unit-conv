import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const Drawer = createDrawerNavigator();

export default function Navigator() {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen
					name="Nepali land Converter"
					component={HomeStack}
				/>
				<Drawer.Screen name="Area" component={AboutStack} />
				<Drawer.Screen name="Weight" component={AboutStack} />
				<Drawer.Screen name="Volume" component={AboutStack} />
				<Drawer.Screen name="About" component={AboutStack} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});

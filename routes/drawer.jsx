import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import LengthStack from "./lengthStack";
import VolumeStack from "./volumeStack";
import WeightStack from "./weightStack";
import TimeStack from "./timeStack";
import AboutStack from "./aboutStack";

const Drawer = createDrawerNavigator();

export default function Navigator() {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name="Area" component={HomeStack} />
				<Drawer.Screen name="Length" component={LengthStack} />
				<Drawer.Screen name="Volume" component={VolumeStack} />
				<Drawer.Screen name="Weight" component={WeightStack} />
				<Drawer.Screen name="Time" component={TimeStack} />
				<Drawer.Screen name="About" component={AboutStack} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

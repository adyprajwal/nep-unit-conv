import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AreaStack from "./areaStack";
import LengthStack from "./lengthStack";
import VolumeStack from "./volumeStack";
import WeightStack from "./weightStack";
import TimeStack from "./timeStack";
import AboutStack from "./aboutStack";
import SettingsStack from "./settingsStack";
import CustomDrawerContent from "../components/customDrawerContent";

const Drawer = createDrawerNavigator();
export default function Navigator() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName="Area"
				drawerStyle={{ backgroundColor: "#e3e1e1" }}
				drawerContent={props => (
					<CustomDrawerContent navigation={navigation} {...props} />
				)}
			>
				<Drawer.Screen name="Area" component={AreaStack} />
				<Drawer.Screen name="Length" component={LengthStack} />
				<Drawer.Screen name="Volume" component={VolumeStack} />
				<Drawer.Screen name="Weight" component={WeightStack} />
				<Drawer.Screen name="Time" component={TimeStack} />
				<Drawer.Screen name="Settings" component={SettingsStack} />
				<Drawer.Screen name="About" component={AboutStack} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

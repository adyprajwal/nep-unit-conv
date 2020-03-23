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
import {
	MaterialCommunityIcons,
	Entypo,
	MaterialIcons
} from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";

const Drawer = createDrawerNavigator();
export default function Navigator() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName="Area"
				drawerStyle={{ backgroundColor: "#e3e1e1", flex: 1 }}
				drawerContent={props => <CustomDrawerContent {...props} />}
				contentContainerStyle={{ flex: 1 }}
			>
				<Drawer.Screen
					name="Area"
					component={AreaStack}
					options={{
						title: "Area",
						drawerLabel: () => (
							<Text style={styles.drawerLabel}>Area</Text>
						),
						drawerIcon: () => (
							<Entypo size={22} color="gray" name="location" />
						)
					}}
				/>
				<Drawer.Screen
					name="Length"
					component={LengthStack}
					options={{
						title: "Length",
						drawerLabel: () => (
							<Text style={styles.drawerLabel}>Length</Text>
						),
						drawerIcon: ({}) => (
							<Entypo size={22} color="gray" name="ruler" />
						)
					}}
				/>
				<Drawer.Screen
					name="Volume"
					component={VolumeStack}
					options={{
						title: "Volume",
						drawerLabel: () => (
							<Text style={styles.drawerLabel}>Volume</Text>
						),
						drawerIcon: ({}) => (
							<Entypo size={22} color="gray" name="lab-flask" />
						)
					}}
				/>
				<Drawer.Screen
					name="Weight"
					component={WeightStack}
					options={{
						title: "Weight",
						drawerLabel: () => (
							<Text style={styles.drawerLabel}>Weight</Text>
						),
						drawerIcon: ({}) => (
							<MaterialCommunityIcons
								size={22}
								color="gray"
								name="weight"
							/>
						)
					}}
				/>
				<Drawer.Screen
					name="Time"
					component={TimeStack}
					options={{
						title: "Time",
						drawerLabel: () => (
							<Text style={styles.drawerLabel}>Time</Text>
						),
						drawerIcon: ({}) => (
							<MaterialCommunityIcons
								size={22}
								color="gray"
								name="clock"
							/>
						)
					}}
				/>
				{/* <Drawer.Screen
					name="Settings"
					component={SettingsStack}
					options={{
						title: "Settings",
						drawerLabel: () => (
							<Text style={styles.drawerLabel}>Settings</Text>
						),
						drawerIcon: ({}) => (
							<MaterialIcons
								size={25}
								color="gray"
								name="settings"
							/>
						)
					}}
				/> */}
				<Drawer.Screen
					name="About"
					component={AboutStack}
					options={{
						title: "About",
						drawerLabel: () => (
							<Text style={styles.drawerLabel}>About</Text>
						),
						drawerIcon: ({}) => (
							<MaterialIcons size={25} color="gray" name="info" />
						)
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	drawerLabel: {
		color: "#333",
		fontFamily: "exo2-regular",
		fontSize: 15
	}
});

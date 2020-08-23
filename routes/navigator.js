import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import NepaliLandStack from "./nepaliLandStack";
import AreaStack from "./areaStack";
import LengthStack from "./lengthStack";
import VolumeStack from "./volumeStack";
import WeightStack from "./weightStack";
import TimeStack from "./timeStack";
import AboutStack from "./aboutStack";
import SettingsStack from "./settingsStack";
import CustomDrawerContent from "../components/customDrawerContent";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text } from "react-native";

const Drawer = createDrawerNavigator();
export default function Navigator() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName="Area"
				drawerStyle={{ backgroundColor: "#e3e1e1", flex: 1 }}
				drawerContent={(props) => <CustomDrawerContent {...props} />}
				contentContainerStyle={{ flex: 1 }}
			>
				<Drawer.Screen
					name="NepaliLand"
					component={NepaliLandStack}
					options={{
						title: "Nepali Land Converter",
						drawerLabel: () => (
							<Text style={styles.drawerLabel}>
								Nepali Land Converter
							</Text>
						),
						drawerIcon: () => (
							<Entypo size={22} color="gray" name="foursquare" />
						),
						unmountOnBlur: true,
					}}
				/>
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
						),
						unmountOnBlur: true,
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
						),
						unmountOnBlur: true,
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
						),
						unmountOnBlur: true,
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
						),
						unmountOnBlur: true,
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
						),
						unmountOnBlur: true,
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
						),
						unmountOnBlur: true
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
						),
						unmountOnBlur: true,
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	drawerLabel: {
		color: "#333",
		fontFamily: "Exo2-Regular",
		fontSize: 15,
	},
});

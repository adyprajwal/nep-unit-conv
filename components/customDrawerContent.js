import React from "react";
import {
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem
} from "@react-navigation/drawer";
import { StyleSheet, Image, View, Text } from "react-native";

export default function CustomDrawerContent(props) {
	return (
		<DrawerContentScrollView {...props}>
			<View style={styles.drawerHeader}>
				<Image
					style={styles.drawerImage}
					source={require("../assets/icon.png")}
				/>
				<Text style={styles.drawerHeaderTitle}>Unit Converter</Text>
			</View>
			<View style={{ flex: 6 }}>
				<DrawerItemList {...props} />
			</View>
		</DrawerContentScrollView>
	);
}
const styles = StyleSheet.create({
	drawerHeader: {
		flex: 2,
		backgroundColor: "#e3e1e1",
		justifyContent: "flex-end"
	},
	drawerImage: {
		marginLeft: 10,
		height: 90,
		width: 90
	},
	drawerHeaderTitle: {
		height: 30,
		color: "#c85151",
		marginBottom: 10,
		marginLeft: 10,
		fontFamily: "Exo2-Bold",
		fontSize: 21
	}
});

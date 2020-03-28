import React from "react";
import {
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem
} from "@react-navigation/drawer";
import { StyleSheet, Image, View, Text } from "react-native";

export default function CustomDrawerContent(props) {
	return (
		<DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
			<View style={styles.drawerHeader}>
				<Image
					style={styles.drawerImage}
					source={require("../assets/icon2.png")}
				/>
				<Text style={styles.drawerHeaderTitle}>
					Nepali Unit Converter
				</Text>
			</View>
			<View style={{ flex: 6 }}>
				<DrawerItemList {...props} />
			</View>
		</DrawerContentScrollView>
	);
}
const styles = StyleSheet.create({
	drawerContainer: {
		flex: 1
	},
	drawerHeader: {
		flex: 2,
		backgroundColor: "#e3e1e1",
		justifyContent: "flex-end"
	},
	drawerHeaderTitle: {
		height: 30,
		color: "#003893",
		marginVertical: 10,
		marginLeft: 10,
		fontFamily: "exo2-bold",
		fontSize: 20
	},
	drawerImage: {
		height: 80,
		width: 80,
		marginLeft: 10,
		borderRadius: 10
	}
});

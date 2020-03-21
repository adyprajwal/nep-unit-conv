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
					source={require("../assets/icon.jpg")}
				/>
				<View>
					<Text style={styles.drawerHeaderTitle}>
						Nepali Unit Converter{" "}
					</Text>
				</View>
			</View>

			{/* <DrawerItem label="Help" /> */}
			<DrawerItemList {...props} />
		</DrawerContentScrollView>
	);
}
const styles = StyleSheet.create({
	drawerHeader: {
		height: 180,
		backgroundColor: "#e84f54"
	},
	drawerHeaderTitle: {
		height: 30,
		color: "#ddd",
		fontFamily: "exo2-regular",
		fontSize: 20
	},
	drawerImage: {
		height: 80,
		width: 80,
		borderRadius: 10
	}
});

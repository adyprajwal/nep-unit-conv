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
					source={require("../assets/icon.jpg")}
				/>
				<Text style={styles.drawerHeaderTitle}>
					Nepali Unit Converter
				</Text>
			</View>

			{/* <DrawerItem
				label="Help"
				onPress={() => props.navigation.navigate("Length")}
			/> */}
			<DrawerItemList {...props} />
		</DrawerContentScrollView>
	);
}
const styles = StyleSheet.create({
	drawerContainer: {
		flex: 1
	},
	drawerHeader: {
		height: 200,
		// backgroundColor: "#e84f54",
		backgroundColor: "#e3e1e1",
		justifyContent: "flex-end",
		marginTop: -50
	},
	drawerHeaderTitle: {
		height: 30,
		color: "#000",
		marginVertical: 10,
		marginLeft: 10,
		fontFamily: "exo2-bold",
		fontSize: 20
	},
	drawerImage: {
		height: 80,
		width: 80,
		marginLeft: 10,
		borderRadius: 50
	}
});

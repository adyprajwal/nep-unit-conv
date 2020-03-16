import React from "react";
import {
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem
} from "@react-navigation/drawer";

export default function CustomDrawerContent(props) {
	return (
		<DrawerContentScrollView {...props}>
			<DrawerItem label="Help" />
			<DrawerItemList {...props} />
		</DrawerContentScrollView>
	);
}

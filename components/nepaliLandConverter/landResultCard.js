import React from "react";
import Clipboard from "@react-native-community/clipboard";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from "react-native";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { RFValue } from "react-native-responsive-fontsize";

export default function LandResultCard({ results }) {
	return (
		<View style={styles.resultBox}>
			<Text
				style={{
					fontFamily: "Exo2-Bold",
					fontSize: 20,
					color: "gray",
					alignSelf: "center",
				}}
			>
				Result
			</Text>
			<View style={styles.resultItem}>
				<Text style={styles.unitValue}>{results.sqft}</Text>
				<Text style={styles.unitLabel}>Square Feet</Text>
				<TouchableOpacity
					onPress={() => Clipboard.setString(results.sqft.toString())}
				>
					<Icons size={18} name="content-copy" color="gray" />
				</TouchableOpacity>
			</View>
			<View style={styles.resultItem}>
				<Text style={styles.unitValue}>{results.sqmtr}</Text>
				<Text style={styles.unitLabel}>Square Meter</Text>
				<TouchableOpacity
					onPress={() =>
						Clipboard.setString(results.sqmtr.toString())
					}
				>
					<Icons size={18} name="content-copy" color="gray" />
				</TouchableOpacity>
			</View>
			<View style={styles.resultItem}>
				<Text style={styles.unitValue}>{results.bigha}</Text>
				<Text style={styles.unitLabel}>Bigha</Text>
				<Text style={styles.unitValue}>{results.kattha}</Text>
				<Text style={styles.unitLabel}>Kattha</Text>
				<Text style={styles.unitValue}>{results.dhur}</Text>
				<Text style={styles.unitLabel}>Dhur</Text>
			</View>
			<View style={styles.resultItem}>
				<Text style={styles.unitValue}>{results.ropani}</Text>
				<Text style={styles.unitLabel}>Ropani</Text>
				<Text style={styles.unitValue}>{results.aana}</Text>
				<Text style={styles.unitLabel}>Aana</Text>
				<Text style={styles.unitValue}>{results.paisa}</Text>
				<Text style={styles.unitLabel}>Paisa</Text>
				<Text style={styles.unitValue}>{results.daam}</Text>
				<Text style={styles.unitLabel}>Daam</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	title: {},
	resultBox: {},
	resultItem: {
		flexDirection: "row",
		paddingVertical: RFValue(14),
		paddingHorizontal: RFValue(9),
		borderBottomWidth: 1,
		borderBottomColor: "#eee",
	},
	unitValue: {
		fontSize: RFValue(17),
		fontFamily: "sans-serif-medium",
		marginRight: RFValue(10),
	},
	unitLabel: {
		marginRight: RFValue(14),
		alignSelf: "center",
		fontSize: RFValue(12),
		color: "#757373",
		fontFamily: "sans-serif",
	},
});

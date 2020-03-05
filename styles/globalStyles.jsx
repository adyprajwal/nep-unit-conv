import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	titleText: {
		fontFamily: "exo2-bold"
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},
	headerTitle: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 25
	},
	headerText: {
		fontFamily: "exo2-bold",
		fontSize: 20,
		color: "#fff"
	},
	headerIcon: {
		color: "#fff"
	},
	inputCard: {
		flexDirection: "column"
	},
	input: {
		borderWidth: 1,
		borderColor: "gray",
		height: 50,
		marginTop: 10
	}
});

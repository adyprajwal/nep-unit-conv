import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	titleText: {
		fontFamily: "exo2-bold"
	},

	//HEADER STYLES
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

	//INPUT FIELD STYLES
	inputCard: {
		flexDirection: "row",
		marginBottom: 20
	},
	inputField: {
		flex: 4,
		fontFamily: "exo2-regular",
		fontWeight: "bold",
		fontSize: 18,
		borderBottomWidth: 1,
		borderBottomColor: "gray",
		height: 50,
		marginTop: 10
	},
	selector: {
		flex: 3,
		fontFamily: "exo2-regular"
	},

	//RESULT BOX STYLES
	resultBox: {},
	resultItem: {
		flex: 1,
		flexDirection: "row",
		paddingTop: 5,
		paddingBottom: 5
	},
	resultValue: {
		fontSize: 17,
		fontFamily: "exo2-regular",
		alignContent: "center",
		alignItems: "flex-start"
	},
	resultLabel: {
		fontSize: 17,
		fontFamily: "exo2-bold",
		flex: 3
	}
});

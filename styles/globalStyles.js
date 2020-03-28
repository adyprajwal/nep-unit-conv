import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: "#f0f0f0"
	},
	titleText: {
		fontFamily: "Exo2-Bold"
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
		fontFamily: "Exo2-Bold",
		fontSize: 20,
		color: "#fff"
	},
	headerIcon: {
		color: "#fff"
	},

	//INPUT FIELD STYLES
	inputCard: {
		flexDirection: "row",
		marginBottom: 10
	},
	inputField: {
		flex: 2,
		padding: 7,
		fontFamily: "sans-serif-medium",
		fontSize: 18,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "#fff",
		height: 50
	},
	selector: {
		flex: 1.7,
		marginLeft: 5,
		fontFamily: "Exo2-Regular",
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "#fff"
	},

	//RESULT BOX STYLES
	resultBox: {
		flex: 1,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "#fff"
	},
	resultItem: {
		flex: 1,
		flexDirection: "row",
		paddingVertical: 15,
		paddingHorizontal: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#eee"
	},
	resultValue: {
		flex: 4,
		fontSize: 15,
		fontFamily: "sans-serif"
	},
	resultLabel: {
		flex: 3,
		fontSize: 17,
		color: "#757373",
		fontFamily: "sans-serif-medium",
		justifyContent: "flex-end"
	}
});

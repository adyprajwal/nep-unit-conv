import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#e4e6eb"
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
		flex: 2,
		padding: 5,
		fontFamily: "exo2-regular",
		fontWeight: "bold",
		fontSize: 18,
		borderRadius: 6,
		elevation: 6,
		borderRadius: 6,
		backgroundColor: "#fff",
		height: 50
	},
	selector: {
		flex: 1.7,
		marginLeft: 5,
		fontFamily: "exo2-regular",
		borderRadius: 6,
		elevation: 6,
		backgroundColor: "#fff"
	},

	//RESULT BOX STYLES
	resultBox: {
		flex: 1,
		borderRadius: 10,
		elevation: 8,
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
		fontFamily: "exo2-regular"
	},
	resultLabel: {
		flex: 3,
		fontSize: 17,
		fontFamily: "exo2-bold",
		justifyContent: "flex-end"
	}
});

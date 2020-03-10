import React from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	FlatList
} from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export default function ResultCard({ results }) {
	return (
		<View style={globalStyles.resultBox}>
			<FlatList
				data={results}
				renderItem={({ item }) => (
					<Text style={globalStyles.resultItem}>
						<Text>{item.label}</Text>
						<Text>{item.value}</Text>
					</Text>
				)}
				keyExtractor={item => item.key}
			/>
		</View>
	);
}
const styles = StyleSheet.create({});

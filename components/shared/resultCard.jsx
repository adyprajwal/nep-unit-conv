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
					<View style={globalStyles.resultItem}>
						<Text style={globalStyles.resultValue}>
							{item.value}
						</Text>
						<Text style={globalStyles.resultLabel}>
							{item.label}
						</Text>
					</View>
				)}
				keyExtractor={item => item.key}
			/>
		</View>
	);
}
const styles = StyleSheet.create({});

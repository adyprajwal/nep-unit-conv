import React from "react";
import { View, Text, TouchableNativeFeedback, FlatList } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export default function ResultCard({ results }) {
	return (
		<View style={globalStyles.resultBox}>
			<FlatList
				data={results}
				renderItem={({ item }) => (
					<TouchableNativeFeedback>
						<View style={globalStyles.resultItem}>
							<Text style={globalStyles.resultValue}>
								{item.value}
							</Text>
							<Text style={globalStyles.resultLabel}>
								{item.label}
							</Text>
						</View>
					</TouchableNativeFeedback>
				)}
				keyExtractor={item => item.key}
			/>
		</View>
	);
}

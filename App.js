import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './home';
import CheckupStart from './checkupStart';
import CheckupPage from './checkupPage';
import Qnacovid from './Qnacovid';
import CovidData from './CovidData';
import FinalResult from './FinalResult';
import Credit from './Credit';

const Stack = createStackNavigator();

export default function App() {
	return (
		<React.Fragment>
			<StatusBar hidden />
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="CheckupStart" component={CheckupStart} />
					<Stack.Screen name="CheckupPage" component={CheckupPage} />
					<Stack.Screen name="Qnacovid" component={Qnacovid} />
					<Stack.Screen name="CovidData" component={CovidData} />
					<Stack.Screen name="FinalResult" component={FinalResult} />
					<Stack.Screen name="Credit" component={Credit} />
				</Stack.Navigator>
			</NavigationContainer>
		</React.Fragment>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

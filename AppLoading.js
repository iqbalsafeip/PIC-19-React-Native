import React from 'react';
import { View, Image, ActivityIndicator, Text } from 'react-native';

/**
 * 
 */
const AppLoading = () => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
			<Image source={require('./assets/splash.png')} style={{ width: 290, height: 130, marginBottom: 20 }} />
			<ActivityIndicator size="small" color="#879F15" />
			<View style={{ position: 'relative', bottom: '-30%' }}>
				<Image source={require('./assets/img/smrt.png')} style={{ width: 100, height: 17 }} />
				<Text style={{ textAlign: 'center', opacity: 0.6, fontWeight: 'bold' }}>2020</Text>
			</View>
		</View>
	);
};

// #endregion

export default AppLoading;

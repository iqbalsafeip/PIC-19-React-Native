import React from 'react';

import { View, Text, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from './AppLoading';

const CheckupStart = ({ navigation }) => {
	let [ fontsLoaded ] = useFonts({
		Sembold: require('./assets/fonts/Poppins-SemiBold.ttf')
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<ScrollView>
			<LinearGradient
				colors={[ '#25544F', '#0C3A35' ]}
				style={{
					display: 'flex',
					backgroundColor: '#212B46',
					flex: 1,
					padding: 10,
					paddingBottom: 20,
					height: 1980
				}}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
			>
				<TouchableOpacity
					style={{
						marginTop: 30,
						marginBottom: 30,
						marginLeft: 30
					}}
					onPress={() => navigation.navigate('Home')}
				>
					<AntDesign name="left" size={24} color="white" style={{ position: 'relative', left: 0 }} />
				</TouchableOpacity>
				<View style={{ width: '100%' }}>
					<View style={{ height: 450, backgroundColor: 'white', borderRadius: 30, padding: 30 }}>
						<Text style={{ fontSize: 18, textAlign: 'center', fontFamily: 'Sembold', color: '#184D47' }}>
							Aplikasi ini berisikan beberapa daftar pertanyaan untuk mengecek kondisi fisik Anda.
						</Text>
						<Text
							style={{
								fontSize: 18,
								marginTop: 15,
								textAlign: 'center',
								fontFamily: 'Sembold',
								color: '#184D47'
							}}
						>
							Aplikasi ini tidak sepenuhnya benar, mohon periksa ke dokter untuk informasi lebih lanjut.
						</Text>
						<Image
							source={require('./assets/img/splash.png')}
							style={{ width: 267, height: 160, position: 'absolute', bottom: 0, alignSelf: 'center' }}
						/>
					</View>
					<TouchableOpacity
						style={{
							backgroundColor: '#A5BB3D',
							width: 244,
							height: 60,
							borderRadius: 16,
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: 25,
							alignSelf: 'flex-end',
							flexDirection: 'row'
						}}
					>
						<Text
							style={{ fontFamily: 'Sembold', fontSize: 24, color: 'white', marginRight: 15 }}
							onPress={() => navigation.navigate('CheckupPage')}
						>
							Cek Sekarang
						</Text>
						<AntDesign name="doubleright" size={24} color="white" />
					</TouchableOpacity>
				</View>
			</LinearGradient>
		</ScrollView>
	);
};

export default CheckupStart;

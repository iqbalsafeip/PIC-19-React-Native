import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

import moment from 'moment';
import AppLoading from './AppLoading';
import numeral from 'numeral';

const himain = '#A5BB3D';

function numeralize(num) {
	return numeral(num).format('0,0');
}

const CovidData = ({ navigation }) => {
	let [ fontsLoaded ] = useFonts({
		Poppins_700Bold: require('./assets/fonts/Poppins-Bold.ttf'),
		PopMed: require('./assets/fonts/Poppins-Medium.ttf'),
		Sembold: require('./assets/fonts/Poppins-SemiBold.ttf'),
		PopReg: require('./assets/fonts/Poppins-Regular.ttf')
	});

	const [ data, setData ] = useState([]);
	const [ ind, setInd ] = useState(null);
	useEffect(() => {
		fetch('https://corona.coollabs.work/indonesia/provinsi').then((res) => res.json()).then((result) => {
			setData(result);
		});

		fetch('http://corona.coollabs.work/country/81').then((res) => res.json()).then((result) => {
			setInd(result);
		});
	}, []);
	if (!fontsLoaded || data.length < 1 || ind === null) {
		return <AppLoading />;
	}

	return (
		<ScrollView style={{ flex: 1, display: 'flex', backgroundColor: 'white' }}>
			<View style={{ alignItems: 'center', flex: 1, width: '100%' }}>
				<LinearGradient
					colors={[ '#25544F', '#0C3A35' ]}
					style={{ width: '100%', backgroundColor: '#212B46', height: 220, overflow: 'hidden' }}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
				>
					<Image
						source={require('./assets/img/virus.png')}
						style={{
							position: 'absolute',
							width: 105,
							height: 105,
							bottom: '-8%',
							left: '-8%',
							transform: [ { rotate: '144deg' } ]
						}}
					/>
					<Image
						source={require('./assets/img/virus.png')}
						style={{
							position: 'absolute',
							width: 97,
							height: 97,
							top: 15,
							right: 15,
							transform: [ { rotate: '63.52deg' } ]
						}}
					/>
					<TouchableOpacity
						style={{
							marginTop: 20,
							marginBottom: 9,
							marginLeft: 20
						}}
						onPress={() => navigation.navigate('Home')}
					>
						<AntDesign name="left" size={24} color="white" style={{ position: 'relative', left: 0 }} />
					</TouchableOpacity>
					<View style={{ width: '75%', alignSelf: 'center' }}>
						<Text style={{ color: 'white', fontFamily: 'PopMed', fontSize: 14 }}>Statistik COVID-19</Text>
						<View style={{ flexDirection: 'row' }}>
							<Text style={{ color: 'white', fontSize: 24, fontFamily: 'Poppins_700Bold' }}>
								Indonesia
							</Text>
							<View
								style={{
									width: 18,
									height: 18,
									backgroundColor: 'white',
									borderRadius: 50,
									overflow: 'hidden',
									shadowColor: '#000',
									shadowOffset: { width: 0, height: 3 },
									shadowOpacity: 0.5,
									shadowRadius: 5,
									elevation: 3,
									alignSelf: 'center',
									marginLeft: 10
								}}
							>
								<View
									style={{
										width: 18,
										height: 9,
										backgroundColor: 'red'
									}}
								/>
							</View>
						</View>
						<Text style={{ color: 'white', fontSize: 8, fontFamily: 'PopMed' }}>
							Update Terakhir: {moment(ind.Last_Update).format('LLLL')}
						</Text>
					</View>
				</LinearGradient>
				<View style={{ position: 'relative', top: '-13%', width: '75%' }}>
					<View style={styles.boxContainer}>
						<View style={styles.box}>
							<AntDesign name="pluscircle" size={15} color="#EB5569" />
							<View>
								<Text
									style={{
										fontFamily: 'Poppins_700Bold',
										fontSize: 18,
										color: '#EB5569',
										textAlign: 'center'
									}}
								>
									{numeralize(ind.Confirmed)}
								</Text>
								<Text style={{ fontFamily: 'PopMed', fontSize: 8, color: himain, textAlign: 'center' }}>
									Terkonfirmasi (T)
								</Text>
							</View>
						</View>
						<View style={styles.box}>
							<AntDesign name="closecircle" size={15} color="#C20909" />
							<View>
								<Text
									style={{
										fontFamily: 'Poppins_700Bold',
										fontSize: 18,
										color: '#C20909',
										textAlign: 'center'
									}}
								>
									{numeralize(ind.Deaths)}
								</Text>
								<Text style={{ fontFamily: 'PopMed', fontSize: 8, color: himain, textAlign: 'center' }}>
									Meninggal (M)
								</Text>
							</View>
						</View>
					</View>
					<View style={styles.boxContainer}>
						<View style={styles.box}>
							<Image
								source={require('./assets/img/lop.png')}
								style={{ width: 28, height: 28, position: 'relative', top: '-5%' }}
							/>
							<View>
								<Text
									style={{
										fontFamily: 'Poppins_700Bold',
										fontSize: 18,
										color: himain,
										textAlign: 'center'
									}}
								>
									{numeralize(ind.Recovered)}
								</Text>
								<Text style={{ fontFamily: 'PopMed', fontSize: 8, color: himain, textAlign: 'center' }}>
									Sembuh (S)
								</Text>
							</View>
						</View>
						<View style={styles.box}>
							<AntDesign name="plussquare" size={15} color="#67B6C7" />
							<View>
								<Text
									style={{
										fontFamily: 'Poppins_700Bold',
										fontSize: 18,
										color: '#67B6C7',
										textAlign: 'center'
									}}
								>
									{numeralize(ind.Active)}
								</Text>
								<Text style={{ fontFamily: 'PopMed', fontSize: 8, color: himain, textAlign: 'center' }}>
									Dalam Perawatan (P)
								</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style={{ width: '90%', alignSelf: 'center', top: '-3%' }}>
				<View style={{ flexDirection: 'row', width: '100%' }}>
					<Text style={{ width: '40%', fontFamily: 'Sembold', fontSize: 12 }}>Provinsi</Text>
					<View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '60%' }}>
						<Text style={{ fontFamily: 'Sembold', fontSize: 12, color: '#EB5569' }}>T</Text>
						<Text style={{ fontFamily: 'Sembold', fontSize: 12, color: '#C20909' }}>M</Text>
						<Text style={{ fontFamily: 'Sembold', fontSize: 12, color: '#A5BB3D' }}>S</Text>
					</View>
				</View>
				{data.map((d, i) => (
					<View
						style={{
							flexDirection: 'row',
							width: '100%',
							backgroundColor: i % 2 === 0 ? '#E4EBC5' : ''
						}}
						key={i}
					>
						<Text style={{ width: '40%', fontFamily: 'PopMed', fontSize: 12 }}>{d.Provinsi}</Text>
						<View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '60%' }}>
							<Text style={{ fontFamily: 'PopMed', fontSize: 12, textAlign: 'center' }}>
								{numeralize(d.Kasus_Posi)}
							</Text>
							<Text style={{ fontFamily: 'PopMed', fontSize: 12, textAlign: 'center' }}>
								{numeralize(d.Kasus_Semb)}
							</Text>
							<Text style={{ fontFamily: 'PopMed', fontSize: 12, textAlign: 'center' }}>
								{numeralize(d.Kasus_Meni)}
							</Text>
						</View>
					</View>
				))}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	boxContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 10
	},
	box: {
		width: '47%',
		height: 100,
		backgroundColor: 'white',
		borderRadius: 4,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.2,
		shadowRadius: 4.65,

		elevation: 8,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'column',
		padding: 13
	}
});

// #endregion

export default CovidData;

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper';

import moment from 'moment';

import LOGO from './assets/img/logo.png';
import VIRUS from './assets/img/virus.png';
import KUTIP from './assets/img/kutip.png';
import AppLoading from './AppLoading';

const birumain = '#184D47';
const himain = '#A5BB3D';

import numeral from 'numeral';

function numeralize(num) {
	return numeral(num).format('0,0');
}

const Home = ({ navigation }) => {
	let [ fontsLoaded ] = useFonts({
		Poppins_700Bold: require('./assets/fonts/Poppins-Bold.ttf'),
		PopMed: require('./assets/fonts/Poppins-Medium.ttf'),
		Sembold: require('./assets/fonts/Poppins-SemiBold.ttf'),
		PopReg: require('./assets/fonts/Poppins-Regular.ttf')
	});

	const [ ind, setInd ] = useState(null);

	const [ isLoading, setIsLoading ] = useState(false);

	useEffect(() => {
		fetch('https://api.kawalcorona.com/indonesia/').then((res) => res.json()).then((result) => {
			console.log(result[0]);
			setInd(result[0]);
			setIsLoading(true);
		});

	}, []);

	if (!isLoading) {
		return <AppLoading />;
	} else {
		return (
			<ScrollView style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
				<View
					style={{
						alignSelf: 'center',
						display: 'flex',
						flexDirection: 'column',
						width: '90%'
					}}
				>
					<View
						style={{
							marginTop: 33,
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between'
						}}
					>
						<View>
							<Text style={{ fontFamily: 'PopMed', fontSize: 12, color: birumain }}>Wilayah</Text>
							<View style={{ flexDirection: 'row' }}>
								<Text
									style={{
										fontSize: 24,
										fontFamily: 'Poppins_700Bold',
										color: birumain,
										lineHeight: 24
									}}
								>
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
							<Text style={{ color: '#749491', fontSize: 8, fontFamily: 'PopMed' }}>
								{moment().format('LLLL')}
							</Text>
						</View>
						<TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigation.navigate('Credit')}>
							<Image source={LOGO} style={{ width: 81, height: 42 }} />
						</TouchableOpacity>
					</View>
					<TouchableOpacity onPress={() => navigation.navigate('CheckupStart')}>
						<LinearGradient
							colors={[ '#25544F', '#0C3A35' ]}
							style={{
								marginTop: 29,
								padding: 20,
								right: 0,
								position: 'relative',
								width: '110%',
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 3 },
								shadowOpacity: 0.5,
								shadowRadius: 5,
								elevation: 5,
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								borderRadius: 10,
								backgroundColor: '#212B46',
								overflow: 'hidden'
							}}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
						>
							<Image
								source={VIRUS}
								style={{
									width: 96,
									height: 96,
									position: 'absolute',
									top: '47%',
									left: '-10%',
									transform: [ { rotate: '144deg' } ]
								}}
							/>
							<View style={{ width: '70%', marginLeft: 50 }}>
								<Text style={{ color: 'white', marginBottom: 10, fontFamily: 'Sembold' }}>
									Cek Mandiri COVID-19
								</Text>
								<Text style={{ color: 'white', fontSize: 8, fontFamily: 'PopMed' }}>
									Jawab semua pertanyaan untuk mengetahui potensi tertular COVID-19
								</Text>
							</View>
							<AntDesign
								name="right"
								size={15}
								color="white"
								style={{ alignSelf: 'center', marginRight: 12 }}
							/>
						</LinearGradient>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate('CovidData')}
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginTop: 30,
							marginBottom: 14
						}}
					>
						<View>
							<Text
								style={{
									fontFamily: 'Sembold',
									fontSize: 14,
									color: birumain,
									borderColor: himain,
									borderBottomWidth: 2
								}}
							>
								Statistik COVID-19
							</Text>
							{/* <Text style={{ fontFamily: 'PopMed', fontSize: 8, color: '#749491' }}>
								Update Terakhir: {moment(ind.Last_Update).format('LLLL')}
							</Text> */}
						</View>
						<View style={{ flexDirection: 'row' }}>
							<Text style={{ color: himain, fontFamily: 'PopMed', fontSize: 9, alignSelf: 'center' }}>
								Selengkapnya
							</Text>
							<AntDesign name="right" size={9} color={himain} style={{ alignSelf: 'center' }} />
						</View>
					</TouchableOpacity>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							height: 120
						}}
					>
						<View style={style.box_inf}>
							<AntDesign name="pluscircle" size={15} color="#EB5569" />
							<View>
								<Text
									style={{
										fontFamily: 'Poppins_700Bold',
										fontSize: 12,
										color: '#EB5569',
										textAlign: 'center'
									}}
								>
									{ind.positif}
								</Text>
								<Text
									style={{ fontFamily: 'PopMed', fontSize: 8, color: '#749491', textAlign: 'center' }}
								>
									Terkonfirmasi
								</Text>
							</View>
						</View>
						<View style={style.box_inf}>
							<Image
								source={require('./assets/img/lop.png')}
								style={{ width: 28, height: 28, position: 'relative', top: '-5%' }}
							/>
							<View>
								<Text
									style={{
										fontFamily: 'Poppins_700Bold',
										fontSize: 12,
										color: himain,
										textAlign: 'center'
									}}
								>
									{ind.sembuh}
								</Text>
								<Text
									style={{ fontFamily: 'PopMed', fontSize: 8, color: '#749491', textAlign: 'center' }}
								>
									Sembuh
								</Text>
							</View>
						</View>
						<View style={style.box_inf}>
							<AntDesign name="closecircle" size={15} color="#C20909" />
							<View>
								<Text
									style={{
										fontFamily: 'Poppins_700Bold',
										fontSize: 12,
										color: '#C20909',
										textAlign: 'center'
									}}
								>
									{ind.meninggal}
								</Text>
								<Text
									style={{ fontFamily: 'PopMed', fontSize: 8, color: '#749491', textAlign: 'center' }}
								>
									Meninggal
								</Text>
							</View>
						</View>
					</View>
					<TouchableOpacity
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginTop: 20,
							marginBottom: 14
						}}
						onPress={() => navigation.navigate('Qnacovid')}
					>
						<Text
							style={{
								fontFamily: 'Sembold',
								fontSize: 14,
								color: birumain,
								borderColor: himain,
								borderBottomWidth: 2
							}}
						>
							Tanya Jawab COVID-19
						</Text>
						<View style={{ flexDirection: 'row' }}>
							<Text style={{ color: himain, fontFamily: 'PopMed', fontSize: 9, alignSelf: 'center' }}>
								Selengkapnya
							</Text>
							<AntDesign name="right" size={9} color={himain} style={{ alignSelf: 'center' }} />
						</View>
					</TouchableOpacity>
					<Swiper
						showsButtons={false}
						style={{ height: 165 }}
						dotColor="#C4C4C4"
						activeDotColor={himain}
						autoplay={true}
					>
						<View style={style.slide}>
							<Image source={KUTIP} style={{ width: 50, height: 50, position: 'absolute', right: 0 }} />
							<Text style={style.text}>Apa Itu Virus Corona?</Text>
							<Text style={{ fontFamily: 'PopMed', fontSize: 9, color: '#749491', lineHeight: 12 }}>
								Coronavirus adalah suatu kelompok virus yang dapat menyebabkan penyakit pada hewan atau
								manusia. Beberapa jenis coronavirus diketahui menyebabkan infeksi saluran nafas pada
								manusia mulai dari batuk pilek hingga yang lebih serius seperti Middle East Respiratory
								Syndrome (MERS) dan Severe Acute Respiratory Syndrome (SARS). Coronavirus jenis baru
								yang ditemukan menyebabkan penyakit COVID-19.
							</Text>
						</View>
						<View style={style.slide}>
							<Image source={KUTIP} style={{ width: 50, height: 50, position: 'absolute', right: 0 }} />
							<Text style={style.text}>Apa itu COVID-19?</Text>
							<Text style={{ fontFamily: 'PopMed', fontSize: 9, color: '#749491', lineHeight: 12 }}>
								COVID-19 adalah penyakit menular yang disebabkan oleh jenis coronavirus yang baru
								ditemukan. Virus baru dan penyakit yang disebabkannya ini tidak dikenal sebelum mulainya
								wabah di Wuhan, Tiongkok, bulan Desember 2019. COVID-19 ini sekarang menjadi sebuah
								pandemi yang terjadi di banyak negara di seluruh dunia.
							</Text>
						</View>
						<View style={style.slide}>
							<Image source={KUTIP} style={{ width: 50, height: 50, position: 'absolute', right: 0 }} />
							<Text style={style.text}>Bagaimana cara COVID-19 menyebar?</Text>
							<Text style={{ fontFamily: 'PopMed', fontSize: 9, color: '#749491', lineHeight: 12 }}>
								Orang dapat tertular COVID-19 dari orang lain yang terinfeksi virus ini. COVID-19 dapat
								menyebar terutama dari orang ke orang melalui percikan-percikan dari hidung atau mulut
								yang keluar saat orang yang terinfeksi COVID-19 batuk, bersin atau berbicara.
								Percikan-percikan ini relatif berat, perjalanannya tidak jauh dan jatuh ke tanah dengan
								cepat. Orang dapat terinfeksi COVID-19 jika meng....
							</Text>
						</View>
					</Swiper>

					<Text
						style={{
							fontFamily: 'Sembold',
							fontSize: 14,
							color: birumain,
							borderColor: himain,
							borderBottomWidth: 2,
							alignSelf: 'flex-start',
							marginTop: 14,
							marginBottom: 9
						}}
					>
						Poster COVID-19
					</Text>
					<Swiper
						showsButtons={false}
						style={{ height: 340 }}
						dotColor="white"
						activeDotColor={birumain}
						autoplay={true}
					>
						<Image
							source={require('./assets/img/JagaJarak.png')}
							style={{ width: '100%', height: 320, borderRadius: 10 }}
						/>
						<Image
							source={require('./assets/img/PakaiMasker.png')}
							style={{ width: '100%', height: 320, borderRadius: 10 }}
						/>
						<Image
							source={require('./assets/img/TetapBersih.png')}
							style={{ width: '100%', height: 320, borderRadius: 10 }}
						/>
					</Swiper>
					<Text
						style={{
							fontFamily: 'Sembold',
							fontSize: 14,
							color: birumain,
							borderColor: himain,
							borderBottomWidth: 2,
							alignSelf: 'flex-start',
							marginTop: 14,
							marginBottom: 9
						}}
					>
						Ikuti Kegiatan Kami
					</Text>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
						<View
							style={{
								width: '48%',
								backgroundColor: birumain,
								height: 46,
								borderRadius: 10,
								flexDirection: 'row',
								justifyContent: 'space-evenly',
								alignItems: 'center',
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 3 },
								shadowOpacity: 0.5,
								shadowRadius: 5,
								elevation: 5
							}}
						>
							<AntDesign name="youtube" size={16} color="white" />
							<Text style={{ fontFamily: 'PopMed', fontSize: 10, color: 'white' }}>
								KKN Padasuka STTG 2020
							</Text>
						</View>
						<View
							style={{
								width: '48%',
								backgroundColor: birumain,
								height: 46,
								borderRadius: 10,
								flexDirection: 'row',
								justifyContent: 'space-evenly',
								alignItems: 'center',
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 3 },
								shadowOpacity: 0.5,
								shadowRadius: 5,
								elevation: 5
							}}
						>
							<AntDesign name="instagram" size={16} color="white" />
							<Text style={{ fontFamily: 'PopMed', fontSize: 10, color: 'white' }}>@kknpadasuka20</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		);
	}
};

const style = StyleSheet.create({
	box_inf: {
		width: '30%',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 5,
		height: 110,
		backgroundColor: 'white',
		borderRadius: 5,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'column',
		padding: 13
	},
	wrapper: {},
	slide: {
		height: 145,
		backgroundColor: 'white',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 5,
		width: '95%',
		alignSelf: 'center',
		paddingHorizontal: 10,
		paddingVertical: 15,
		overflow: 'hidden'
	},

	text: {
		color: birumain,
		fontSize: 12,
		fontFamily: 'PopMed'
	}
});

export default Home;

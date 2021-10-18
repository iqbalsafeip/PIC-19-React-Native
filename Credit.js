import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const Credit = ({ navigation }) => {
	return (
		<LinearGradient
			colors={[ '#25544F', '#0C3A35' ]}
			style={{
				display: 'flex',
				backgroundColor: '#212B46',
				flex: 1,
				paddingBottom: 20
			}}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 0 }}
		>
			<Image source={require('./assets/img/waw.jpg')} style={{ height: 196, width: '100%' }} />
			<View
				style={{
					width: '90%',
					alignSelf: 'center',
					paddingHorizontal: 24,
					paddingVertical: 16,
					backgroundColor: 'white',
					borderRadius: 30,
					height: 425,
					position: 'relative',
					top: '-13%'
				}}
			>
				<Image source={require('./assets/img/pjg.png')} style={{ width: '100%', height: 49 }} />
				<ScrollView style={{ marginTop: 10 }}>
					<Text style={{ textAlign: 'center', fontFamily: 'PopMed', fontSize: 12 }}>{`
Dosen Pembimbing Lapangan :
                    Dede Kurniadi, S.Kom., M.Kom                    

Ketua Kelompok : 
Renaldy Alamsyah (1806053)

Anggota : 
M. Iqbal Ismail Safei P. (1806041)
Ilham Syahidatul Rajab	(1806043)
Tania Agusviani Wahidah	(1806052)
Nabilla Febriani H. P.	(1806069)

Programmer :
M. Iqbal Ismail Safei P.

UI/UX Designer : 
Ilham Syahidatul Rajab

Graphic & Icon by : 
Freepik & AntDesign

Pertanyaan Dan Jawaban : 
who.int

Cek up mandiri : 
https://checkupcovid19.jatimprov.go.id/covid19/
`}</Text>
					<View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
						<Text style={{ fontFamily: 'Sembold', fontSize: 10 }}>Sponsored By : </Text>
						<Image source={require('./assets/img/smrt.png')} style={{ width: 100, height: 16.8 }} />
					</View>
				</ScrollView>
			</View>
			<TouchableOpacity
				style={{
					backgroundColor: '#A5BB3D',
					width: 184,
					height: 60,
					borderRadius: 16,
					justifyContent: 'center',
					alignItems: 'center',
					alignSelf: 'flex-end',
					flexDirection: 'row',
					position: 'relative',
					top: '-16%',
					marginRight: 20
				}}
			>
				<AntDesign name="home" size={22} color="white" />
				<Text
					style={{ fontFamily: 'Sembold', fontSize: 10, color: 'white', marginLeft: 15 }}
					onPress={() => navigation.navigate('Home')}
				>
					Halaman Awal
				</Text>
			</TouchableOpacity>
		</LinearGradient>
	);
};

export default Credit;

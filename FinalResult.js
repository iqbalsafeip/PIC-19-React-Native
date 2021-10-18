import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonCovid from './ButtonCovid';

import { AntDesign } from '@expo/vector-icons';

const himain = '#A5BB3D';

const TEXT = [
	`   Anda kemungkinan besar tidak terinfeksi oleh COVID-19, Namun anda disarankan untuk tetap tinggal dirumah. Infeksi anda mungkin disebabkan virus selain COVID-19, Oleh karena itu anda tidak perlu dites oleh COVID-19. Meskipun demikian, hindarilah keluar rumah jika memungkinkan. Penyakit anda akan sembuh sendiri dengan cukup makan dan istirahat. 
    Apabila anda mengalami gejala atau mendapatkan informasi baru tentang perjalanan penyakit anda, anda bisa membuka aplikasi ini lagi.`,
	'Gejala-gejala ini membutuhkan perhatian segera. Anda harus segera menghubungi Rumah Sakit Terdekat, atau langsung pergi ke Instalasi Gawat Darurat terdekat'
];

const FinalResult = ({ navigation, route }) => {
	return (
		<LinearGradient
			colors={[ '#25544F', '#0C3A35' ]}
			style={{
				display: 'flex',
				backgroundColor: '#212B46',
				flex: 1,
				padding: 10,
				paddingBottom: 20
			}}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 0 }}
		>
			<View
				style={{
					height: '100%',
					width: '100%',
					backgroundColor: 'white',
					borderRadius: 30,
					padding: 30,
					justifyContent: 'space-between'
				}}
			>
				<View>
					<Text
						style={{
							fontFamily: 'Sembold',
							fontSize: 24,
							color: '#184D47',
							textAlign: 'center',
							textDecorationLine: 'underline',
							textDecorationColor: himain
						}}
					>
						Kesimpulan
					</Text>
					<Text style={{ fontFamily: 'Sembold', fontSize: 12, marginTop: 12, lineHeight: 14 }}>
						{parseInt(route.params.num) < 2 ? TEXT[0] : TEXT[1]}
					</Text>
				</View>
				<View style={{ flexDirection: 'row', alignSelf: 'center' }}>
					<ButtonCovid
						text="Halaman Awal"
						icon={<AntDesign name="home" size={40} color="#184D47" />}
						onPress={() => navigation.replace('Home')}
					/>
					<ButtonCovid
						text="Cek Lagi"
						icon={<AntDesign name="reload1" size={40} color="#184D47" />}
						onPress={() => navigation.replace('CheckupStart')}
					/>
				</View>
			</View>
		</LinearGradient>
	);
};

export default FinalResult;

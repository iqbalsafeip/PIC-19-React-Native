import React, { useState, useEffect } from 'react';
import { View, Text, ProgressBarAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import ButtonCovid from './ButtonCovid';

const birumain = '#184D47';
const himain = '#A5BB3D';

const CheckupPage = ({ navigation }) => {
	const [ QUESTIONS, setQuestions ] = useState([
		{
			question: `Apakah Anda mengalami salah satu dari yang berikut:`,
			points: [
				'Kesulitan bernafas yang parah (Bernafas dengan sangat cepat atau berbicara dalam satu kata)',
				'Nyeri dada yang parah',
				'Sulit untuk bangun',
				'Merasa kebingungan',
				'Penurunan kesadaran'
			],
			answer: -1
		},
		{
			question: `Apakah Anda mengalami salah satu dari yang berikut:`,
			points: [
				'Nafas yang pendek saat istirahat',
				'Ketidakmampuan untuk berbaring karena kesulitan bernafas',
				'Kondisi kesehatan kronis yang anda alami dirasakan lebih berat karena kesulitan bernapas'
			],
			answer: -1
		},
		{
			question: `Apakah Anda mengalami salah satu dari yang berikut:`,
			points: [ 'Demam', 'Batuk', 'Bersin', 'Sakit Tenggorokan', 'Sulit Bernafas' ],
			answer: -1
		},
		{
			question:
				'Apakah anda pernah muncul gejala sekitar 14 hari setelah travelling ke luar negeri? (China, Italy, Iran, Korea Selatan, Prancis, Spanyol, Jerman, USA) atau ke kota terjangkit (Jakarta, Bali, Solo, Yogyakarta, Pontianak, Manado, Bandung dll)?',
			answer: -1
		},
		{
			question:
				'Apakah Anda memberikan perawatan atau melakukan kontak dekat dengan seseorang dengan COVID-19 (kemungkinan atau dikonfirmasi) saat mereka sakit (batuk, demam, bersin, atau sakit tenggorokan)?',
			answer: -1
		},
		{
			question:
				'Apakah Anda memiliki kontak dekat dengan seseorang yang bepergian ke luar Negeri dalam 14 hari terakhir yang menjadi sakit (batuk, demam, bersin, atau sakit tenggorokan)?',
			answer: -1
		}
	]);

	const [ num, setNum ] = useState(0);

	function nextQuestion() {
		if (num + 1 !== QUESTIONS.length) {
			setNum(num + 1);
		} else if (num + 1 === QUESTIONS.length) {
			if (QUESTIONS.every((e) => e.answer > -1)) {
				let num = 0;
				QUESTIONS.forEach((e) => {
					num += parseInt(e.answer);
				});
				navigation.replace('FinalResult', { num });
			}
		}
	}

	function prevQuestion() {
		if (num !== 0) {
			setNum(num - 1);
		}
	}

	function setAnswer(ans) {
		setQuestions(QUESTIONS.map((e, i) => (i === num ? { ...e, answer: ans } : e)));
	}

	let [ fontsLoaded ] = useFonts({
		Sembold: require('./assets/fonts/Poppins-SemiBold.ttf')
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<LinearGradient
			colors={[ '#25544F', '#0C3A35' ]}
			style={{ display: 'flex', flex: 1, alignItems: 'center', backgroundColor: '#212B46', padding: 10 }}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 0 }}
		>
			<View style={{ width: '100%' }}>
				<View
					style={{
						height: '83%',
						padding: 30,
						width: '100%',
						backgroundColor: 'white',
						borderRadius: 30
					}}
				>
					<TouchableOpacity
						style={{
							marginBottom: 19
						}}
						onPress={() => navigation.navigate('CheckupStart')}
					>
						<AntDesign name="left" size={24} color={birumain} style={{ position: 'relative', left: 0 }} />
					</TouchableOpacity>

					<View>
						<Text style={{ fontSize: 19, fontFamily: 'Sembold' }}>{QUESTIONS[num].question}</Text>
						{QUESTIONS[num].points ? (
							QUESTIONS[num].points.map((e, i) => (
								<Text key={i} style={{ fontFamily: 'Sembold', fontSize: 14 }}>
									{i + 1}. {e}
								</Text>
							))
						) : null}
					</View>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							marginTop: 20
						}}
					>
						<ButtonCovid
							text="Iya"
							isActive={QUESTIONS[num].answer === 1}
							isActiveColor="#EB5569"
							imgProps={require('./assets/img/ya.png')}
							onPress={() => setAnswer(1)}
						/>
						<ButtonCovid
							text="tidak"
							isActive={QUESTIONS[num].answer === 0}
							isActiveColor="#A5BB3D"
							imgProps={require('./assets/img/tidak.png')}
							onPress={() => setAnswer(0)}
						/>
					</View>
				</View>
				<View style={{ margin: 10 }} />
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 30
					}}
				>
					<View style={{ width: '50%' }}>
						<Text style={{ color: 'white', fontSize: 10, fontFamily: 'Sembold' }}>
							Pertanyaan {num + 1}/{QUESTIONS.length}
						</Text>
						<ProgressBarAndroid
							styleAttr="Horizontal"
							indeterminate={false}
							progress={num / QUESTIONS.length}
							color="#FFD15F"
						/>
					</View>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-evenly',
							width: '50%'
						}}
					>
						<TouchableOpacity
							onPress={prevQuestion}
							style={{
								width: 50,
								backgroundColor: '#A5BB3D',
								borderRadius: 10,
								height: 50,
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<Text style={{ fontWeight: 'bold' }}>
								<AntDesign name="doubleleft" size={24} color="white" />
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={nextQuestion}
							style={{
								width: 50,
								backgroundColor: '#A5BB3D',
								borderRadius: 10,
								height: 50,
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<Text style={{ fontWeight: 'bold' }}>
								<AntDesign name="doubleright" size={24} color="white" />
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</LinearGradient>
	);
};

export default CheckupPage;

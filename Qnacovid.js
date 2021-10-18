import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper';
import AppLoading from './AppLoading';

const birumain = '#184D47';
const himain = '#A5BB3D';

const Qnacovid = ({ navigation }) => {
	const contents = [
		{
			title: 'Apa itu coronavirus?',
			body: `Coronavirus adalah suatu kelompok virus yang dapat menyebabkan penyakit pada hewan atau manusia. Beberapa jenis coronavirus diketahui menyebabkan infeksi saluran nafas pada manusia mulai dari batuk pilek hingga yang lebih serius seperti Middle East Respiratory Syndrome (MERS) dan Severe Acute Respiratory Syndrome (SARS). Coronavirus jenis baru yang ditemukan menyebabkan penyakit COVID-19.`
		},
		{
			title: 'Apa itu COVID-19?',
			body:
				'COVID-19 adalah penyakit menular yang disebabkan oleh jenis coronavirus yang baru ditemukan.  Virus baru dan penyakit yang disebabkannya ini tidak dikenal sebelum mulainya wabah di Wuhan, Tiongkok, bulan Desember 2019. COVID-19 ini sekarang menjadi sebuah pandemi yang terjadi di banyak negara di seluruh dunia.'
		},
		{
			title: 'Apa saja gejala COVID-19?',
			body: `Gejala-gejala COVID-19 yang paling umum adalah demam, batuk kering, dan rasa lelah. Gejala lainnya yang lebih jarang dan mungkin dialami beberapa pasien meliputi rasa nyeri dan sakit, hidung tersumbat, sakit kepala, konjungtivitis, sakit tenggorokan, diare, kehilangan indera rasa atau penciuman, ruam pada kulit, atau perubahan warna jari tangan atau kaki. Gejala-gejala yang dialami biasanya bersifat ringan dan muncul secara bertahap. Beberapa orang menjadi terinfeksi tetapi hanya memiliki gejala ringan.

            Sebagian besar (sekitar 80%) orang yang terinfeksi berhasil pulih tanpa perlu perawatan khusus. Sekitar 1 dari 5 orang yang terinfeksi COVID-19 menderita sakit parah dan kesulitan bernapas. Orang-orang lanjut usia (lansia) dan orang-orang dengan kondisi medis penyerta seperti tekanan darah tinggi, gangguan jantung dan paru-paru, diabetes, atau kanker memiliki kemungkinan lebih besar mengalami sakit lebih serius. Namun, siapa pun dapat terinfeksi COVID-19 dan mengalami sakit yang serius. Orang dari segala usia yang mengalami demam dan/atau batuk disertai dengan kesulitan bernapas/sesak napas, nyeri/tekanan dada, atau kehilangan kemampuan berbicara atau bergerak harus segera mencari pertolongan medis. Jika memungkinkan, disarankan untuk menghubungi penyedia layanan kesehatan atau fasilitas kesehatan terlebih dahulu, sehingga pasien dapat diarahkan ke fasilitas kesehatan yang tepat.`
		},
		{
			title:
				'Apa yang harus saya lakukan jika saya memiliki gejala COVID-19 dan kapan saya harus mencari pertolongan medis?',
			body: `Jika Anda mengalami gejala ringan, seperti batuk ringan atau demam ringan, secara umum tidak perlu mencari pertolongan medis. Tetap di rumah, isolasi diri, dan pantau gejala Anda. Ikuti panduan nasional tentang isolasi mandiri.

            Namun, jika Anda tinggal di daerah dengan malaria atau demam berdarah, Anda tidak boleh mengabaikan gejala demam. Segera cari pertolongan medis. Saat Anda pergi ke fasilitas kesehatan, kenakan masker jika memungkinkan, jaga jarak setidaknya 1 meter dari orang lain, dan jangan menyentuh permukaan benda dengan tangan Anda. Jika yang sakit adalah anak, bantu anak untuk mematuhi nasihat ini.
            
            Segera cari perawatan medis jika Anda mengalami kesulitan bernapas atau nyeri/tekanan di dada. Jika memungkinkan, hubungi penyedia layanan kesehatan Anda terlebih dahulu, sehingga Anda dapat diarahkan ke fasilitas kesehatan yang tepat.
            
            `
		},
		{
			title: 'Bagaimana cara COVID-19 menyebar?',
			body: `Orang dapat tertular COVID-19 dari orang lain yang terinfeksi virus ini. COVID-19 dapat menyebar terutama dari orang ke orang melalui percikan-percikan dari hidung atau mulut yang keluar saat orang yang terinfeksi COVID-19 batuk, bersin atau berbicara. Percikan-percikan ini relatif berat, perjalanannya tidak jauh dan jatuh ke tanah dengan cepat. Orang dapat terinfeksi COVID-19 jika menghirup percikan orang yang terinfeksi virus ini. Oleh karena itu, penting bagi kita untuk menjaga jarak minimal 1 meter dari orang lain. Percikan-percikan ini dapat menempel di benda dan permukaan lainnya di sekitar orang seperti meja, gagang pintu, dan pegangan tangan. Orang dapat terinfeksi dengan menyentuh benda atau permukaan tersebut, kemudian menyentuh mata, hidung, atau mulut mereka. Inilah sebabnya penting untuk mencuci tangan secara teratur dengan sabun dan air bersih mengalir, atau membersihkannya dengan cairan antiseptik berbahan dasar alkohol. WHO terus mengkaji perkembangan penelitian tentang cara penyebaran COVID-19 dan akan menyampaikan temuan-temuan terbaru.`
		},
		{
			title: 'Apakah COVID-19 dapat menular dari orang yang tidak menunjukkan gejala?',
			body: `COVID-19 terutama menyebar melalui percikan saluran pernapasan yang dikeluarkan oleh seseorang yang batuk atau memiliki gejala lain seperti demam atau rasa lelah. Banyak orang yang terinfeksi COVID-19 hanya mengalami gejala ringan terutama pada tahap-tahap awal. Karena itu, COVID-19 dapat menular dari orang yang hanya bergejala ringan, seperti batuk ringan, tetapi merasa sehat.

            Beberapa laporan menunjukkan bahwa orang tanpa gejala dapat menularkan virus ini namun belum diketahui seberapa sering penularan dengan cara tersebut terjadi. WHO terus mengkaji perkembangan penelitian tentang cara penyebaran COVID-19 dan akan menyampaikan temuan-temuan terbaru.`
		},
		{
			title:
				'Apa yang dapat saya lakukan untuk melindungi diri saya dan orang lain jika tidak mengetahui siapa yang terinfeksi COVID-19?',
			body: `Mempraktikkan kebersihan tangan dan pernapasan setiap saat sangatlah penting, dan merupakan cara terbaik untuk melindungi orang lain dan diri Anda sendiri.

            Apabila memungkinkan, jaga jarak Anda dengan orang lain minimal 1 meter terutama jika berada di dekat orang yang batuk atau bersin. Karena beberapa orang yang terinfeksi mungkin belum menunjukkan gejala atau gejalanya masih ringan, menjaga jarak fisik dengan semua orang adalah upaya terbaik jika Anda berada di daerah di mana COVID-19 menyebar.`
		},
		{
			title:
				'Apa yang sebaiknya saya lakukan jika saya berkontak erat dengan seseorang yang terinfeksi COVID-19?',
			body: `Jika Anda telah berkontak erat dengan seseorang yang terinfeksi COVID-19 maka Anda kemungkinan akan terinfeksi.

			Kontak erat berarti tinggal atau berada dalam jarak kurang dari 1 meter dari orang yang terinfeksi COVID-19. Jika demikian, sangat disarankan untuk tidak meninggalkan rumah.
			
			Namun, jika Anda tinggal di daerah di mana terdapat kasus malaria atau demam berdarah, maka penting untuk tidak mengabaikan gejala demam. Segera cari pertolongan medis. Saat Anda pergi ke fasilitas kesehatan, kenakan masker jika memungkinkan, jaga jarak setidaknya 1 meter dari orang lain, dan jangan menyentuh permukaan dengan tangan Anda. Jika yang sakit adalah anak, bantu anak untuk mematuhi nasihat ini.
			
			Jika Anda tidak tinggal di daerah di mana terdapat kasus malaria atau demam berdarah, lakukanlah hal-hal berikut:
			
			• Jika Anda sakit, meskipun gejalanya sangat ringan, Anda harus melakukan isolasi mandiri.
			• Meskipun Anda tidak menyadari telah terpajan COVID-19 dan mengalami gejala, lakukan isolasi mandiri dan pantau diri Anda.
			• Anda lebih mungkin menginfeksi orang lain pada tahap awal penyakit meskipun gejala Anda ringan; oleh karena itu isolasi mandiri sangatlah penting.
			• Jika Anda tidak memiliki gejala, tetapi telah terpajan orang yang terinfeksi, lakukan karantina mandiri selama 14 hari.
			
			Jika Anda terinfeksi COVID-19 (telah dikonfirmasi dengan tes), lakukan isolasi mandiri selama 14 hari bahkan setelah gejala menghilang sebagai tindakan pencegahan, meskipun belum diketahui secara pasti berapa lama pasien masih dapat menularkan setelah dinyatakan sembuh. Ikuti pedoman nasional tentang isolasi mandiri.`
		},
		{
			title: 'Apa itu isolasi mandiri?',
			body: `Isolasi mandiri adalah tindakan penting yang dilakukan oleh orang yang memiliki gejala COVID-19 untuk mencegah penularan ke orang lain di masyarakat, termasuk anggota keluarga.

			Isolasi mandiri adalah ketika seseorang yang mengalami demam, batuk, atau gejala COVID-19 lainnya tinggal di rumah dan tidak pergi bekerja, sekolah, atau ke tempat-tempat umum. Hal ini dilakukan secara sukarela atau berdasarkan rekomendasi dari penyedia layanan kesehatan. Namun, jika Anda tinggal di daerah dengan kasus malaria atau demam berdarah, Anda tidak boleh mengabaikan gejala demam. Segera cari pertolongan medis. Saat Anda pergi ke fasilitas kesehatan, kenakan masker jika memungkinkan, jaga jarak setidaknya 1 meter dari orang lain dan jangan menyentuh permukaan benda dengan tangan Anda. Jika yang sakit adalah anak, bantu anak mematuhi nasihat ini.
			
			Jika Anda tidak tinggal di daerah dengan kasus malaria atau demam berdarah, lakukanlah hal-hal berikut:
			
			• Jika seseorang melakukan isolasi mandiri, artinya orang tersebut sedang sakit namun tidak parah (tidak memerlukan pertolongan medis) • Sediakan kamar sendiri yang besar dengan sirkulasi udara yang baik dan dilengkapi sarana mencuci tangan dan toilet.
			• Jika tidak memungkinkan, pisahkan tempat tidur dengan orang lain dengan jarak minimal 1 meter.
			• Tetap jaga jarak minimal 1 meter dengan orang lain, termasuk anggota keluarga.
			• Pantau gejala yang dialami setiap hari.
			• Lakukan isolasi mandiri selama 14 hari meskipun Anda merasa sehat.
			• Jika Anda mengalami kesulitan bernapas, segera hubungi penyedia layanan kesehatan Anda – hubungi terlebih dahulu jika memungkinkan.
			• Tetap positif dan semangat dengan cara tetap menjaga silahturahmi dengan orang-orang tercinta melalui telepon atau media online dan dengan berolahraga di rumah.`
		},
		{
			title:
				'Apa yang sebaiknya saya lakukan jika saya tidak memiliki gejala namun saya merasa terpajan COVID-19? Apakah perlu melakukan karantina mandiri?',
			body: `Karantina mandiri berarti memisahkan diri dari orang lain karena Anda telah terpajan dengan seseorang yang terinfeksi COVID-19 meskipun Anda tidak memiliki gejala. Selama karantina mandiri, pantau gejala-gejala yang dialami. Tujuan dari karantina mandiri adalah untuk mencegah penularan. Karena orang yang terinfeksi COVID-19 dapat menularkan secara cepat ke orang lain, segera mengarantina diri dapat mencegah orang lain tertular infeksi.

			Dalam hal ini:
			
			• Sediakan kamar sendiri yang besar dengan sirkulasi udara yang baik dan dilengkapi sarana mencuci tangan dan toilet.
			• Jika tidak memungkinkan, pisahkan tempat tidur dengan orang lain dengan jarak minimal 1 meter.
			• Tetap jaga jarak minimal 1 meter dengan orang lain, termasuk anggota keluarga. • Pantau gejala yang dialami setiap hari.
			• Lakukan karantina mandiri selama 14 hari meskipun Anda merasa sehat.
			• Jika Anda mengalami kesulitan bernapas, segera hubungi penyedia layanan kesehatan Anda – hubungi terlebih dahulu jika memungkinkan.
			• Tetap positif dan semangat
			
			Namun, jika Anda tinggal di daerah dengan kasus malaria atau demam berdarah, Anda tidak boleh mengabaikan gejala demam. Segera cari pertolongan medis. Saat Anda pergi ke fasilitas kesehatan, kenakan masker jika memungkinkan, jaga jarak setidaknya 1 meter dari orang lain dan jangan menyentuh permukaan benda dengan tangan Anda. Jika yang sakit adalah anak, bantu anak mematuhi nasihat ini.`
		},
		{
			title: 'Apa perbedaan antara isolasi mandiri, karantina mandiri, dan menjaga jarak fisik?',
			body: `Karantina berarti membatasi kegiatan atau memisahkan orang yang tidak sakit tetapi mungkin terpajan COVID-19. Tujuannya adalah untuk mencegah penyebaran penyakit pada saat orang tersebut baru mulai mengalami gejala.

			Isolasi berarti memisahkan orang yang sakit dengan gejala COVID-19 dan mungkin menular guna mencegah penularan.
			
			Menjaga jarak fisik berarti terpisah secara fisik. WHO merekomendasikan untuk menjaga jarak setidaknya 1 meter dari orang lain. Jarak ini merupakan ukuran umum tentang seberapa jauh semua orang harus saling menjaga jarak walaupun mereka baik-baik saja tanpa diketahui terpajan COVID-19 atau tidak.`
		},
		{
			title: 'Apakah anak-anak atau remaja dapat terinfeksi COVID-19?',
			body: `Penelitian menunjukkan bahwa anak-anak dan remaja memiliki risiko terinfeksi dan menularkan ke orang lain yang sama seperti kelompok usia lainnya.

			Sampai saat ini, bukti menunjukkan bahwa anak-anak dan remaja lebih kecil kemungkinannya terkena penyakit yang serius, meskipun penyakit yang serius masih dapat terjadi pada kelompok usia ini.
			
			Anak-anak dan orang dewasa harus mengikuti panduan yang sama tentang karantina dan isolasi mandiri jika ada kemungkinan bahwa mereka telah terpajan atau mulai menunjukkan gejala. Sangat penting bagi anak-anak untuk menghindari kontak dengan orang tua dan orang lain yang berisiko memiliki penyakit serius.`
		},
		{
			title: 'Apa yang dapat saya lakukan untuk melindungi diri saya dan mencegah penyebaran penyakit ini?',
			body: `Tetap ikuti informasi terbaru tentang wabah COVID-19 yang tersedia di situs web WHO dan melalui kementerian kesehatan dan dinas kesehatan di daerah Anda. Di banyak negara di seluruh dunia, kasus dan bahkan wabah COVID-19 telah terjadi. Pemerintah Tiongkok dan pemerintah beberapa negara lain telah berhasil memperlambat wabah yang terjadi di wilayahnya. Namun, situasi yang ada masih sulit diprediksi. Karena itu, tetaplah ikuti berita terbaru.

			Anda dapat mengurangi risiko terinfeksi atau menyebarkan COVID-19 dengan cara melakukan beberapa langkah kewaspadaan:
			
			• Seringlah mencuci tangan Anda dengan air bersih mengalir dan sabun, atau cairan antiseptik berbahan dasar alkohol. Mengapa? Mencuci tangan dengan air bersih yang mengalir dan sabun, atau cairan antiseptik berbahan dasar alkohol dapat membunuh virus di tangan Anda.
			• Jaga jarak setidaknya 1 meter dengan orang lain. Mengapa? Ketika seseorang batuk, bersin, atau bicara, orang tersebut mengeluarkan percikan dari hidung atau mulutnya dan percikan ini dapat membawa virus. Jika Anda terlalu dekat, Anda dapat menghirup percikan ini dan juga virus COVID-19 jika orang tersebut terinfeksi penyakit ini.
			• Hindari pergi ke tempat-tempat ramai. Mengapa? Ketika orang-orang berkumpul bersama dalam kerumunan, Anda memiliki kemungkinan untuk melakukan kontak erat dengan orang yang terinfeksi COVID-19 dan lebih sulit untuk menjaga jarak fisik minimal 1 meter.
			• Hindari menyentuh mata, hidung, dan mulut. Mengapa? Tangan menyentuh berbagai permukaan benda dan virus penyakit ini dapat tertempel di tangan. Tangan yang terkontaminasi dapat membawa virus ini ke mata, hidung, atau mulut, yang dapat menjadi titik masuk virus ini ke tubuh Anda sehingga Anda menjadi sakit.
			• Pastikan Anda dan orang-orang di sekitar Anda menjalankan etika batuk dan bersin dengan cara menutup mulut dan hidung dengan siku terlipat atau tisu saat batuk atau bersin, segera buang tisu bekas tersebut. Mengapa? Percikan dapat menyebarkan virus. Dengan mengikuti etika batuk dan bersin, Anda melindungi orang-orang di sekitar dari virus-virus seperti batuk pilek, flu, dan COVID-19.
			• Tetaplah tinggal di rumah dan lakukan isolasi mandiri meskipun hanya memiliki gejala ringan seperti batuk, sakit kepala, dan demam ringan sampai Anda sembuh. Minta seseorang untuk membawakan persediaan kebutuhan Anda. Jika Anda harus meninggalkan rumah, kenakan masker untuk menghindari penularan ke orang lain. Mengapa? Menghindari kontak dengan orang lain akan melindungi mereka dari kemungkinan penularan COVID-19 dan virus lainnya.
			• Jika Anda demam, batuk, dan kesulitan bernapas, segeralah cari pertolongan medis dan tetap memberitahukan kondisi Anda terlebih dahulu. Ikuti arahan dinas kesehatan setempat Anda.
			Mengapa? Kementerian kesehatan dan dinas kesehatan daerah memiliki informasi terbaru tentang situasi di wilayah Anda. Dengan memberitahukan kondisi Anda terlebih dahulu, petugas kesehatan yang akan merawat Anda dapat segera mengarahkan Anda ke fasilitas pelayanan kesehatan yang tepat. Langkah ini juga melindungi Anda dan membantu mencegah penyebaran virus dan infeksi lainnya.
			• Tetap ikuti informasi terbaru dari sumber terpercaya, seperti WHO, dinas kesehatan daerah, dan kementerian kesehatan. Mengapa? Dinas kesehatan daerah dan kementerian kesehatan adalah sumber terpercaya dalam memberikan arahan kepada masyarakat di wilayahnya tentang apa saja yang harus dilakukan untuk melindungi diri.`
		}
	];

	let [ fontsLoaded ] = useFonts({
		Poppins_700Bold: require('./assets/fonts/Poppins-Bold.ttf'),
		PopMed: require('./assets/fonts/Poppins-Medium.ttf')
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={{ display: 'flex', backgroundColor: 'white', flexDirection: 'column' }}
		>
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
					<Text style={{ color: 'white', fontFamily: 'Poppins_700Bold', fontSize: 24 }}>Tanya Jawab</Text>
				</View>
			</LinearGradient>
			<View style={{ position: 'relative', top: '-14%' }}>
				<Swiper style={{ overflow: 'visible', height: 480 }} dotColor="#C4C4C4" activeDotColor={himain}>
					{contents.map((e, i) => (
						<View style={style.slide} key={i}>
							<Text style={style.text}>{e.title}</Text>
							<ScrollView showsVerticalScrollIndicator={false}>
								<Text style={{ fontFamily: 'PopMed', fontSize: 9, color: '#749491', lineHeight: 12 }}>
									{e.body}
								</Text>
							</ScrollView>
						</View>
					))}
				</Swiper>
				<TouchableOpacity
					style={{
						backgroundColor: '#A5BB3D',
						width: 244,
						height: 60,
						borderRadius: 16,
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'row',
						alignSelf: 'flex-end',
						marginRight: 10
					}}
				>
					<Text
						style={{ fontFamily: 'Sembold', fontSize: 24, color: 'white', marginRight: 15 }}
						onPress={() => navigation.navigate('CheckupStart')}
					>
						Cek Sekarang
					</Text>
					<AntDesign name="doubleright" size={24} color="white" />
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

const style = StyleSheet.create({
	slide: {
		backgroundColor: 'white',
		borderRadius: 30,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 5,
		width: '95%',
		alignSelf: 'center',
		padding: 20,
		paddingVertical: 48,
		overflow: 'hidden',
		height: 460
	},

	text: {
		color: birumain,
		fontSize: 18,
		fontFamily: 'Sembold'
	}
});

export default Qnacovid;

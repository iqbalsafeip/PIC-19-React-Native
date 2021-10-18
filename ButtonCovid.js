import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View, Image } from 'react-native';

const birumain = '#184D47';

const ButtonCovid = ({ text, isActive, isActiveColor, imgProps, onPress, icon }) => {
	return (
		<TouchableOpacity style={{ width: 120, height: 120 }} onPress={onPress}>
			<View
				style={{
					width: 90,
					height: 90,
					borderRadius: 10,
					borderWidth: 3,
					borderColor: birumain,
					backgroundColor: isActive === true ? isActiveColor : 'white',
					justifyContent: 'center',
					alignItems: 'center',
					overflow: 'visible',
					alignSelf: 'center',
					marginTop: 10
				}}
			>
				{imgProps ? <Image source={imgProps} /> : icon}

				<Text style={{ fontFamily: 'Sembold', fontSize: 10, color: isActive ? 'white' : birumain }}>
					{text}
				</Text>
			</View>
			{isActive && (
				<Image source={require('./assets/img/Pilih.png')} style={{ position: 'absolute', right: 3, top: 0 }} />
			)}
		</TouchableOpacity>
	);
};

export default ButtonCovid;

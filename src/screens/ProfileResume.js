import React from 'react';
import { Alert, Image, Text, View } from 'react-native';
import FABRight from '../components/FABR'
import FABLeft from '../components/FABL'
import Icon from 'react-native-vector-icons/Feather';

import  styles  from '../styles/ProfileResumeStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
const fts = require('../../assets/avatar.jpg')
let lorem = 'على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النم لدخال في أي محرك';

const ProfileResume = ({ navigation, route}) => {
    
    function handleSocialIcons(icon_param) {
        switch (icon_param) {
            case 'facebook':
                Alert.alert("Esse é o meu face!", "www.facebook.com");                
                break;
            case 'github':
                Alert.alert("Aqui tem meus códigos aliens!", "www.github.com");                
                break;        
            case 'linkedin':
                Alert.alert("Quero arrumar um emprego na Terra", "www.linkedin.com");                
                break;
            case 'instagram':
                Alert.alert("As fotos da minha viagem intergalática", "www.instagram.com");                
                break;                
        }
    }
  
    return(
    <>
      <View style={styles.container}>
          <View style={styles.top}>
            <Image style={styles.img} source={fts}/>
            <Text style={styles.name}>Joe the Alien</Text>
            <Text style={styles.function}>Cargo: Extraterrestre</Text>
            <View style={styles.social_icons_container}>
                <TouchableOpacity onPress={()=> handleSocialIcons('facebook')}>
                    <Icon name={'facebook'} size={30} color={'#8bc34a'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> handleSocialIcons('github')} >
                    <Icon name={'github'}   size={30} color={'#8bc34a'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> handleSocialIcons('linkedin')} >
                    <Icon name={'linkedin'} size={30} color={'#8bc34a'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> handleSocialIcons('instagram')} >
                    <Icon name={'instagram'} size={30} color={'#8bc34a'} />
                </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bottom}>
            <View style={styles.card}>
                <Text style={styles.card_content_title}>About me:</Text>
                <Text style={styles.card_content_text}>{lorem}</Text>
            </View>
          </View>
      </View>
      <FABRight/>
      <FABLeft/>
    </>
  )
}

export default ProfileResume;
import React, {useEffect} from 'react';
import {View, Text, Dimensions, Platform, ScrollView} from 'react-native';
import {colors, fonts} from '../../utils/theme';
import {Navigation} from 'react-native-navigation';
import {trackScreenView} from '../../modules/Firebase/Analytics';
import {BackArrowAlt} from '../../layouts';
import {toggleMenu} from '../../navigation';
import {RoundedImage} from '../../components/shared';
import {USER_IMG} from '../../assets/media/images';
import IconText from '../../components/shared/Text/IconText';
import Icons from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('window');
import {SideMenu} from '../../components/screens';

function Index(props) {
  const {componentId} = props;
  useEffect(() => {
    const navigationEventListener = Navigation.events().registerComponentDidAppearListener(
      ({componentId: id}) => {
        // Check whether the event is fired in this screen.
        if (componentId !== id) return;
        // put your code here...
        trackScreenView('Side', 'Side');
      },
    );

    return () => {
      navigationEventListener.remove();
    };
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: 'white',
        paddingBottom: 30,
      }}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
          width: Platform.OS === 'ios' ? '70%' : '100%',
        }}>
        <RoundedImage
          source={USER_IMG}
          onPress={() => alert('a')}
          touchable={{onPress: () => alert('b')}}
        />
        <View style={{alignItems: 'center', marginTop: 10, width: '100%'}}>
          <Text style={[fonts.basicTitle]}>Lidia Aguilar</Text>
          <IconText
            textStyle={[fonts.footerImage, {color: colors.mainBlue}]}
            Icon={
              <Icons
                name="place"
                size={25}
                color={colors.mainBlue}
                style={{
                  alignSelf: 'center',
                }}
              />
            }
          />
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              paddingTop: 40,
            }}>
            <SideMenu />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Index;

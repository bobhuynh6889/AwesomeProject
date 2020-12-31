import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import remoteConfig from '@react-native-firebase/remote-config';

export default function RemoteConfig() {
  const [themeColor, setThemeColor] = React.useState('#ff7675');
  const [promotion, setPromotion] = React.useState(0);
  const [textColor, setTextColor] = React.useState('#f368e0');

  React.useEffect(() => {
    // remoteConfig()
    //   .fetch(120)
    //   .then((result) => {});

    remoteConfig().fetch(300);

    remoteConfig()
      .setDefaults({
        theme_color: '#ff7675',
        text_color: '#f368e0',
        holiday_promotion: 10,
      })
      .then(() => remoteConfig().fetchAndActivate())
      .then((fetchedRemotely) => {
        if (fetchedRemotely) {
          console.log('Configs were retrieved from the backend and activated.');
        } else {
          console.log(
            'No configs were fetched from the backend, and the local configs were already activated',
          );
        }
        const values = remoteConfig().getAll();
        setPromotion(values.holiday_promotion.asNumber());
        setThemeColor(values.theme_color.asString());
        setTextColor(values.text_color.asString());
      });
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themeColor,
      }}>
      <Text style={{color: textColor}}>Holiday Promotion : {promotion} % </Text>
    </SafeAreaView>
  );
}

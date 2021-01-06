import React from 'react';
import OneSignal from 'react-native-onesignal';
import {View, Text} from 'react-native';

export default function OneSignalExample() {
  React.useEffect(() => {
    OneSignal.init('ddf42114-cea8-4afe-aa73-df4249043316', {
      kOSSettingsKeyAutoPrompt: false,
      kOSSettingsKeyInAppLaunchURL: false,
      kOSSettingsKeyInFocusDisplayOption: 2,
    });
    OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.

    OneSignal.addEventListener('received', (notification) => {
      console.log('Notification received: ', notification);
    });

    OneSignal.addEventListener('opened', (openResult) => {
      console.log('Message: ', openResult.notification.payload.body);
      console.log('Data: ', openResult.notification.payload.additionalData);
      console.log('isActive: ', openResult.notification.isAppInFocus);
      console.log('openResult: ', openResult);
    });

    OneSignal.addEventListener('ids', (device) => {
      console.log('Device info: ', device);
    });

    return () => {
      OneSignal.removeEventListener('received');
      OneSignal.removeEventListener('opened');
      OneSignal.removeEventListener('ids');
    };
  }, []);

  return (
    <View>
      <Text></Text>
    </View>
  );
}

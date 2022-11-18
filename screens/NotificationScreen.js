import { View, Text, Button } from 'react-native'
import React, { useLayoutEffect, useState, useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
     handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: false,
          shouldSetBadge: false,
     }),
});

const NotificationScreen = () => {
     const [expoPushToken, setExpoPushToken] = useState('');
     const [notification, setNotification] = useState(false);
     const notificationListener = useRef();
     const responseListener = useRef();
     const navigation = useNavigation();

     useLayoutEffect(() => {
          navigation.setOptions({
               headerShown: false,
          })
     })

     useEffect(() => {
          registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

          // This listener is fired whenever a notification is received while the app is foregrounded
          notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
               setNotification(notification);
          });

          // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
          responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
               console.log(response);
          });

          return () => {
               Notifications.removeNotificationSubscription(notificationListener.current);
               Notifications.removeNotificationSubscription(responseListener.current);
          };
     }, []);

     return (
          <SafeAreaView style={{ flex: 1 }}>
               <View style={{ flex: 1, alignItems: 'center',
        justifyContent: 'space-around' }}>
                    <Text>Your expo push token: {expoPushToken}</Text>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                         <Text>Title: {notification && notification.request.content.title} </Text>
                         <Text>Body: {notification && notification.request.content.body}</Text>
                         <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
                    </View>
                    <Button
                         title="Press to Send Notification"
                         onPress={async () => {
                              await sendPushNotification(expoPushToken);
                         }}
                    />
               </View>
          </SafeAreaView>
     )
}

// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.dev/notifications
async function sendPushNotification(expoPushToken) {
     const message = {
          to: expoPushToken,
          sound: 'default',
          title: 'Original Title',
          body: 'And here is the body!',
          data: { someData: 'goes here' },
     };

     await fetch('https://exp.host/--/api/v2/push/send', {
          method: 'POST',
          headers: {
               Accept: 'application/json',
               'Accept-encoding': 'gzip, deflate',
               'Content-Type': 'application/json',
          },
          body: JSON.stringify(message),
     });
}

async function registerForPushNotificationsAsync() {
     let token;
     if (Device.isDevice) {
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
               const { status } = await Notifications.requestPermissionsAsync();
               finalStatus = status;
          }
          if (finalStatus !== 'granted') {
               alert('Failed to get push token for push notification!');
               return;
          }
          token = (await Notifications.getExpoPushTokenAsync()).data;
          console.log(token);
     } else {
          alert('Must use physical device for Push Notification');
     }

     if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
               name: 'default',
               importance: Notifications.AndroidImportance.MAX,
               vibrationPattern: [0, 250, 250, 250],
               lightColor: '#FF231F7C',
          });
     }

     return token;
}

export default NotificationScreen
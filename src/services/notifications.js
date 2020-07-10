import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { AsyncStorage } from "react-native";

export const setLocalNotification = async () => {
  let notiData = await AsyncStorage.getItem("Flashcard:NOTIFICATION");

  // puts this condition so notification reminder will not renew without attempting quiz
  if (notiData === null) {
    const notiPermission = await Permissions.askAsync(
      Permissions.NOTIFICATIONS
    );

    if (notiPermission.status === "granted") {
      let currentDate = new Date(); // current date
      let today = new Date();
      today.setDate(today.getDate() + 1); // setting date for next day reminder
      today.setHours(20);
      today.setMinutes(0);

      // seconds are calculated because notification schedule accepts the data in secondss
      const seconds = (today.getTime() - currentDate.getTime()) / 1000;

      Notifications.scheduleNotificationAsync({
        content: {
          title: "Quiz Reminder!",
          body: "You haven't attemped quiz today let's start to learn.",
          ios: {
            sound: true,
          },
          android: {
            sound: true,
            vibrate: true,
          },
        },
        trigger: {
          seconds: seconds,
          repeats: true,
        },
      });

      AsyncStorage.setItem("Flashcard:NOTIFICATION", "NotificationSet");
    }
  }
};

export const clearLocalNotification = async () => {
  await AsyncStorage.removeItem("Flashcard:NOTIFICATION");
  Notifications.cancelAllScheduledNotificationsAsync();
};

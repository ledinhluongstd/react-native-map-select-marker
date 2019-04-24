import { AlertIOS, Platform, ToastAndroid } from "react-native";

function showToast(message) {
  if (Platform.OS === 'android') ToastAndroid.show(message, ToastAndroid.SHORT);
  if (Platform.OS === 'ios') setTimeout(function () {
    AlertIOS.alert(message);
  }, 500)
}

function isEmpty(obj) {
  if (!obj) return !obj
  return (Object.getOwnPropertyNames(obj).length === 0);
}
export {showToast, isEmpty}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';
import Navigation from './src/navigations/Navigation';

export default function App() {
  return (
    // <View style={styles.container}>
       <Main/>
      //  <StatusBar style='auto'/>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f1f1f1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

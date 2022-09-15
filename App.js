import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogInStack from './src/navigations/LogInStack';
import Navigation from './src/navigations/navigation';
import LogInPage from './src/pages/begin/LogInPage';




export default function App() {
  return (
    // <View style={styles.container}>
       <LogInStack/>
      /* { <StatusBar style='auto'/>
    </View> }*/
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

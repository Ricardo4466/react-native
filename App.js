import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/MKOM_Simbolo_Pos_RGB_Verm.png')}
        style={{
          marginBottom: 20
        }}
      />
      <Text style={{
        fontSize: 50,
        color: '#F53340'
      }}>
        Hello
        <Text>
          {' '}
        </Text>
        <Text style={{
          fontSize: 50,
          color: 'rgb(0, 23, 138)'
        }}>
          World :)
        </Text>
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

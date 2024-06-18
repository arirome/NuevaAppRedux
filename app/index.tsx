import { Button, Text, View,  } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>holllaaa!!!</Text>
    
      <Link href="/registro">About</Link>

    </View>
  );
}

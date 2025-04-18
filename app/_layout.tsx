import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerTitleStyle: {
      color: '#e8e8e8',
      fontWeight: 'bold',
      fontSize: 30,
    },
    headerShown: false,
    headerStyle: {
      backgroundColor: '#292929',
    },
    headerTitleAlign: 'center',
    title: 'Tic-Tac-Toe'
  }}/>;
}

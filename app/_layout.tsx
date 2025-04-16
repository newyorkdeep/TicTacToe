import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerTitleStyle: {
      color: 'white',
    },
    headerStyle: {
      backgroundColor: '#383838',
    },
    headerTitleAlign: 'center',
    title: 'Tic-Tac-Toe'
  }}/>;
}

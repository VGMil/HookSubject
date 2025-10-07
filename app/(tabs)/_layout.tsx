import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function Layout() {
  return (
    <Tabs screenOptions={{
      headerShown:false
    }
    }>
    <Tabs.Screen 
        name="dashboard"
        options={{
            title: 'Inicio',
            tabBarIcon: () => <Feather name="home" size={24} color="black" />
        }} />
    

    <Tabs.Screen 
        name="settings"
        options={{
            title: 'Configuración',
            tabBarIcon: () => <Feather name="settings" size={24} color="black" />
        }} />
    </Tabs>
  );
}
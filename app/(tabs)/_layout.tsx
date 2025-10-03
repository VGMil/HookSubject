import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function Layout() {
  return (
    <Tabs>
    <Tabs.Screen 
        name="dashboard"
        options={{
            title: 'Inicio',
            tabBarIcon: () => <Text>✨</Text>,
        }} />
    

    <Tabs.Screen 
        name="settings"
        options={{
            title: 'Configuración',
            tabBarIcon: () => <Text>⚙️</Text>,
        }} />
    </Tabs>
  );
}
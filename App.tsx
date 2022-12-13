import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import Experience from "./src/screens/Experience";
import Home from "./src/screens/Home";
import Memes from "./src/screens/Memes";
import Skill from "./src/screens/Skill";
import Skills from "./src/screens/Skills";
import './src/i18n/i18n';

export default function App() {
  const Stack = createNativeStackNavigator();

  const linking = {
    config: {
        screens: {
            Home: '/home',
            About: '/about',
            Contact: '/contact',
            Experience: '/experience',
            Memes: '/memes',
            Skills: '/skills',
            Skill: '/skill'
        }
    }
};

  return (
    <NavigationContainer
    linking={linking}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Experience" component={Experience} />
        <Stack.Screen name="Memes" component={Memes} />
        <Stack.Screen name="Skills" component={Skills} />
        <Stack.Screen name="Skill" component={Skill} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

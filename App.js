
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import { AuthProvider } from './context/auth';
import MainScreen from "./screens/MainScreen";
import config from './auth0-configuration';
import { useAuth0, Auth0Provider } from 'react-native-auth0';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Auth0Provider domain={config.domain} clientId={config.clientId}>
          <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
          </Stack.Navigator>
        </Auth0Provider>
      </AuthProvider>
    </NavigationContainer >
  )
}

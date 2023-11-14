import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../screens/LoginScreen";
import { RegistrationScreen } from "../screens/RegistrationScreen";
import { Home } from "../screens/Home";
import { CommentsScreen } from "../screens/CommentsScreen";
import { MapScreen } from "../screens/MapScreen";

import { BackButtonComponent } from "./BackButtonComponent";

export const AppNavigation = () => {

    const MainStack = createStackNavigator();
    return(
        <NavigationContainer>
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Comments"
            component={CommentsScreen}
            options={{
              title: "Коментарі",
              headerTitleAlign: "center",
              headerShown: true,
              headerLeft: () => <BackButtonComponent />,
              headerStyle: {
                borderBottomWidth: 1,
              },
            }}
          />
          <MainStack.Screen
            name="Map"
            component={MapScreen}
            options={{
              title: "Мапа",
              headerTitleAlign: "center",
              headerShown: true,
              headerLeft: () => <BackButtonComponent />,
              headerStyle: {
                borderBottomWidth: 1,
              },
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    )
}
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Dictionary from "../screens/DictionaryContext";
import Settings from "../screens/Settings";

const { Navigator, Screen } = createDrawerNavigator();

const Navigation:React.FC = () => {

  return(
    <NavigationContainer>
      <Navigator initialRouteName="Dictionary">
        <Screen
          name="Dictionary"
          component={Dictionary}
        />
        <Screen
          name="Settings"
          component={Settings}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
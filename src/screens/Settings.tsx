import React from "react";
import { View, StyleSheet } from "react-native";
import { Title } from "react-native-paper";

type Props = {

}

const Settings:React.FC<Props> = () => {

  return(
    <View style={styles.container}>
      <Title>Settings</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Settings;
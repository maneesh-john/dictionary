import React, { useState, useContext } from "react";
import { Dispatch } from "redux";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text, Card, Title } from "react-native-paper";
import { connect } from "react-redux";
import { Audio } from "expo-av";

import { AppContext } from "../contexts/AppContext";
import { searchTerm } from "../actions/dictionaryActions";

type Props = {
  
}

const Dictionary:React.FC<Props> = () => {

  const [term, setTerm] = useState<string>("");
  const { dispatch, state }: any = useContext(AppContext);

  const handleSubmit = () => {
    searchTerm(term, dispatch);
  }

  const playSound = async (url: string) => {
    await Audio.Sound.createAsync(
      { uri: url },
      { shouldPlay: true }
    );
  }

  const renderDetails = () => {
    if(!state?.results?.length) return null;
    return state.results.map((item: Record<string, any>, index: number) => (
      <Card key={`${index}`} style={styles.card}>
        <Title>{item.word}</Title>
        {item.meanings?.map?.((meaning: Record<string, any>) => (
          <>
            <Text>{meaning?.definitions?.[0]?.definition}</Text>
            <Text style={{marginBottom: 10}}>Eg: {meaning?.definitions?.[0]?.example}</Text>
          </>
        ))}
        <Button onPress={() => playSound(`https:${item?.phonetics?.[0]?.audio}`)}>Play</Button>
      </Card>
    ));
  }

  return(
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={term}
        onChangeText={setTerm}
      />
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.button}
      >
        Search
      </Button>
      {renderDetails()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%"
  },
  button: {
    marginVertical: 10,
    paddingVertical: 8
  },
  card: {
    padding: 10
  }
});

export default Dictionary;
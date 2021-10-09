import React, { useState } from "react";
import { Dispatch } from "redux";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text, Card, Title } from "react-native-paper";
import { connect } from "react-redux";
import { Audio } from "expo-av";

import { searchTerm } from "../actions/dictionaryActions";

type Props = {
  dictionary: Record<string, any>;
  searchTerm: (s: string) => void;
}

const Dictionary:React.FC<Props> = ({ dictionary, searchTerm }) => {

  const [term, setTerm] = useState<string>("");

  const handleSubmit = () => {
    searchTerm(term);
  }

  const playSound = async (url: string) => {
    await Audio.Sound.createAsync(
      { uri: url },
      { shouldPlay: true }
    );
  }

  const renderDetails = () => {
    if(!dictionary?.results?.length) return null;
    return dictionary.results.map((item: Record<string, any>, index: number) => (
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

const mapStateToProps = (state: any) => ({
  dictionary: state.dictionary
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  searchTerm: (term: string) => searchTerm(term, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);
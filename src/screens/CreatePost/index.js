import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import styled from "styled-components/native";
const index = () => {
  const [description, setDescription] = useState("");

  const publish = () => {};
  return (
    <Section>
      <Input
        value={description}
        onChangeText={setDescription}
        numberOfLines={5}
        placeholder={"This is really awesome app!!!"}
      />
      <Button onPress={publish}>
        <View>
          <Text style={{ color: "#fff", fontWeight: 600 }}>Publish</Text>
        </View>
      </Button>
    </Section>
  );
};

export default index;

const Section = styled.View`
  flex: 1;
  justify-content: space-between;
`;
const Input = styled.TextInput`
  width: 100%;
  height: 150px;
  background-color: #fff;
`;
const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: #ff2b5a;
  margin: 10px;
  height: 40px;
  justify-content: center;
`;

import { Image, View, Text } from "react-native";

import tw from "twrnc";
import Container from "@/components/Container";
import SearchBar from "@/components/SearchBar";
import NavOptions from "@/components/NavOptions";
import Suggestions from "@/components/Suggestions";
import Title from "@/components/Title";

export default function HomeScreen() {
  return (
    <Container>
      <Image
        source={{ uri: "https://i.ibb.co.com/Xz5pKDQ/logo-black.png" }}
        style={tw`w-24 h-10`}
        resizeMode="contain"
      />

      <SearchBar />
      <NavOptions />
      <Suggestions />
      <View>
        <Title className="text-lg pt-2">Uber Ride Policy</Title>
        <Text style={tw`text-sm tracking-wide`}>
          Speak up if you want somebody
          Can't let him get away, oh no
          You don't wanna end up sorry
          The way that I'm feeling everyday
          No no no no
          There's no hope for the broken heart
          No no no no
          There's no hope for the broken
          There's a girl but I let her get away
        </Text>
      </View>
    </Container>
  );
}

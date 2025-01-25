import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  StyleSheet,
  Appearance,
  Dimensions,
} from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import { Colors, Theme } from "@/constants/Colors";
import HomeBtn from "@/components/Buttons/HomeBtn";
import { StatusBar } from "expo-status-bar";

const index = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.dark;
  const styles = homeStyles(theme);

//   // Get the screen height
//   const { height } = Dimensions.get("window");
// console.log(height);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View
          style={{
            width: "100%",
            // minHeight: height * 0.85,
          }}
        >
          <Image source={images.logo} style={styles.logo} />
          <Image source={images.cards} style={styles.card} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.heading}>
            Discover Endless{"\n"}
            Possibilities with <Text style={styles.highlightedText}>Aora</Text>
          </Text>

          <Image
            source={images.path}
            style={styles.path}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.subtitle}>
          Where Creativity Meets Innovation: Embark on a Journey of Limitless
          Exploration with Aora
        </Text>

        <HomeBtn
          title="Continue with Email"
          handlePress={() => router.push("/(auth)/sign_in")}
          containerStyles={{ width: "100%", maxWidth: 360, marginTop: 28 }}
        />

        <Link href="/(tabs)/home" asChild>
          <Pressable>
            <Text style={styles.text}>Profile</Text>
          </Pressable>
        </Link>
      </ScrollView>

      {/* <StatusBar backgroundColor="#161622" style="light" /> */}
    </SafeAreaView>
  );
};

export default index;

const homeStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignContent: "center",
      justifyContent: "center",
    },
    scrollView: {
      flexGrow: 1,
      justifyContent: "center",
    },
    logo: {
      width: 130,
      height: 84,
      resizeMode: "contain",
      justifyContent: "center",
      alignSelf: "center",
    },
    card: {
      maxWidth: 380,
      height: 298,
      resizeMode: "contain",
      alignSelf: "center",
    },
    textContainer: {
      marginTop: 10,
      position: "relative",
    },
    heading: {
      textAlign: "center",
      fontSize: 24,
      color: theme.text,
    },
    highlightedText: {
      color: "#FF8E01",
    },
    path: {
      width: 136,
      height: 15,
      position: "absolute",
      bottom: -10,
      right: 24,
      resizeMode: "contain",
    },
    subtitle: {
      fontSize: 14,
      fontWeight: "500",
      lineHeight: 24,
      textAlign: "center",
      color: theme.text,
      marginTop: 20,
      paddingHorizontal: 20,
    },
    text: {
      color: theme.text,
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 10,
      marginTop: 10,
    },
  });
};

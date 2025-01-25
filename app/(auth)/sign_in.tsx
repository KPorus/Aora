import {
  View,
  Text,
  Appearance,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Alert,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppColors, Colors, Theme } from "@/constants/Colors";
import { images } from "@/constants";
import FormField from "@/components/Form/FormField";
import HomeBtn from "@/components/Buttons/HomeBtn";
import { Link, router } from "expo-router";

const SignIn = () => {
  // const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);

    try {
      // await signIn(form.email, form.password);
      // const result = await getCurrentUser();
      // setUser("success");
      // setIsLogged(true);

      Alert.alert("Success", "User signed in successfully");
      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error);
    } finally {
      setSubmitting(false);
    }
  };
  const colorShcme = Appearance.getColorScheme();
  const theme = colorShcme === "dark" ? Colors.dark : Colors.dark;

  // Get the screen height
  const { height } = Dimensions.get("window");
  const styles = SigninStyle(theme, height);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.text}>Log in to Aora</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={{ marginTop: 28 }}
            autoCapitalize="none"
            placeholder="Enter your email address"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            placeholder="Enter a Password"
            handleChangeText={(e) => setForm({ ...form, password: e })}
          />
          <HomeBtn
            title="Sign In"
            handlePress={submit}
            containerStyles={{ marginTop: 16 }}
          />
          <Pressable style={{marginTop:10}}>
            <Link href={"/(auth)/sign-up"}>
              <Text style={{ color: theme.text, marginTop: 16 }}>
                Don't have account
              </Text>
            </Link>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const SigninStyle = (theme: Theme, height: number) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 20,
    },
    logoContainer: {
      width: "100%",
      minHeight: height * 0.85,
      paddingHorizontal: 16,
      marginTop: 30,
      marginBottom: 30,
      // alignSelf: "center",
      // alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: 115,
      height: 35,
    },
    text: {
      fontSize: 24,
      color: theme.text,
      fontWeight: "700",
      marginTop: 20,
    },
  });
};

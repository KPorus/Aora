import { icons, images } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Image,
} from "react-native";

interface FormFieldProps {
  title: string;
  value: string;
  handleChangeText: (e: string) => void;
  otherStyles?: ViewStyle; // Optional custom styles for the container
  autoCapitalize?: TextInputProps["autoCapitalize"];
  keyboardType?: TextInputProps["keyboardType"];
  placeholder?: TextInputProps["placeholder"];
}

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  autoCapitalize,
  keyboardType,
  placeholder,
}) => {
  const [showpass, setshowpass] = useState(false);
  return (
    <View style={[styles.formContainer, otherStyles]}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.inputBox}
          value={value}
          onChangeText={handleChangeText}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          secureTextEntry={title === "Password" && !showpass}
        />
        {title === "Password" && (
          <TouchableOpacity
            // style={styles.eyeIcon}
            onPress={() => setshowpass(!showpass)}
          >
            <Image
              source={!showpass ? icons.eye : icons.eyeHide}
              resizeMode="contain"
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: "flex-start",
    alignContent: "flex-start",
    marginTop: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    backgroundColor:"rgba(255,255,255,0.1)",
    borderColor: "black",
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
    flexDirection:"row",
    alignItems: "center",
  },
  inputBox: {
    flex: 1,
    color: "white",
    fontWeight: 700,
    fontSize: 16,
  },
});

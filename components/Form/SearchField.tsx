import { icons } from "@/constants";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
  Image,
} from "react-native";

interface FormFieldProps {
  title?: string;
  value: string;
  handleChangeText: (e: string) => void;
  autoCapitalize?: TextInputProps["autoCapitalize"];
  keyboardType?: TextInputProps["keyboardType"];
  placeholder?: TextInputProps["placeholder"];
}

const SearchInput: React.FC<FormFieldProps> = ({
  title,
  value,
  handleChangeText,
  autoCapitalize,
  keyboardType,
  placeholder,
}) => {
  const [showpass, setshowpass] = useState(false);
  const [isFocused, setFocused] = useState(true);
  return (
    <View style={styles.formContainer}>
      <Text style={styles.text}>{title}</Text>
      <View
        style={[
          styles.input,
          isFocused && { borderColor: "#FF9C01", borderWidth: 1 },
        ]}
      >
        <TextInput
          style={styles.inputBox}
          value={value}
          onChangeText={handleChangeText}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          onFocus={() => setFocused(true)} // Handle focus
          onBlur={() => setFocused(false)} // Handle blur
        />
        <TouchableOpacity onPress={() => setshowpass(!showpass)}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: "flex-start",
    alignContent: "flex-start",
    marginBottom: 8,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 10,
    // marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  inputBox: {
    flex: 1,
    color: "white",
    fontWeight: 700,
    fontSize: 16,
  },
});

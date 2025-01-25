import { TouchableOpacity, StyleSheet, Text, ViewStyle } from "react-native";
import React from "react";

interface HomeBtnProps {
  title: string; 
  handlePress: () => void; 
  containerStyles?: ViewStyle; 
}

const HomeBtn: React.FC<HomeBtnProps> = ({
  title,
  handlePress,
  containerStyles,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, containerStyles]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default HomeBtn;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    minHeight: 62,
    backgroundColor: "#FF8E01",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  text: {
    color: "#161622",
    fontWeight: "bold",
    fontSize: 20,
  },
});

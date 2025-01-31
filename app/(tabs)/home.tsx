import {
  View,
  Text,
  Appearance,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, Theme } from "@/constants/Colors";
import { images } from "@/constants";
import SearchInput from "@/components/Form/SearchField";

const Home = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    query: "",
  });
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.dark;

  const data = [
    { id: "1", name: "Item 1" },
    { id: "2", name: "Item 2" },
    { id: "3", name: "Item 3" },
  ];

  const renderItem = ({ item }: { item: { id: string; name: string } }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
  const styles = homeStyles(theme);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id + 1}
        renderItem={renderItem}
        ListHeaderComponent={
          <View>
            <View style={styles.headerContainer}>
              <View style={styles.header}>
                <Text style={styles.headerText}>{"Welcome to"}</Text>
                <Text style={[styles.headerText, { color: "#FF8E01" }]}>
                  {"Aora!"}
                </Text>
              </View>
              <View>
                <Image
                  source={images.logoSmall}
                  style={{ width: 36, height: 40 }}
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput
              value={form.query}
              handleChangeText={(e) => setForm({ ...form, query: e })}
              autoCapitalize="none"
              placeholder="Search..."
            />

            <View style={{paddingBottom:8}}>
              <Text style={{color:theme.text,fontSize:18}}>{"Latest Videos"}</Text>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Home;

const homeStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 20,
    },
    headerContainer: {
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
    },
    header: {
      padding: 16,
    },
    headerText: {
      fontSize: 24,
      fontWeight: "bold",
      color: theme.text,
    },
    listItem: {
      backgroundColor: theme.background,
      padding: 16,
      marginBottom: 8,
    },
    listItemText: {
      fontSize: 16,
      color: theme.text,
    },
    listItemSeparator: {
      height: 1,
      backgroundColor: theme.background,
    },
    listItemDeleteIcon: {
      color: "red",
    },
    // listItemUpdateIcon: {
    //   color: "#1",
    // },
    // listItemShareIcon: {
    //   color: theme.success,
    // },
  });
};

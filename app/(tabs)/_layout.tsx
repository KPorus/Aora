import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { icons } from "@/constants";

const TabIcon = ({
  icon,
  color
}: {
  icon: any;
  color: any;
}) => {
  return (
    <View 
    style={{
      alignContent: "center",
      justifyContent: "center",
      // gap: "2rem",
    }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={{
          width: 24,
          height: 24,
        }}
      />
    </View>
  );
};

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 80,
        },
        tabBarLabelStyle:{
          fontSize: 16,
          fontWeight: 700,
          marginTop: 2,
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color}) => (
            <TabIcon
              color={color}
              icon={icons.home}
            />
          ),
        }}
      />
       <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmarks",
          tabBarIcon: ({ color }) => (
            <TabIcon
              color={color}
              icon={icons.bookmark}
            />
          ),
        }}
      />
       <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color }) => (
            <TabIcon
              color={color}
              icon={icons.plus}
            />
          ),
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabIcon
              color={color}
              icon={icons.profile}
            />
          ),
        }}
      />
    </Tabs>
  );
}

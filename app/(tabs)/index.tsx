import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Pressable,
  useColorScheme,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const notes = [
  {
    id: 1,
    title: "Learning React Native",
    content: "Building notes app using FlatList and Pressable",
    date: "10 May",
  },
  {
    id: 2,
    title: "ReplyAI Idea",
    content: "Chrome extension for creators using AI replies",
    date: "11 May",
  },
  {
    id: 3,
    title: "Shopping List",
    content: "Milk, Bread, Coffee, Keyboard",
    date: "12 May",
  },
  {
    id: 4,
    title: "Gym Notes",
    content: "Push day and cardio session",
    date: "13 May",
  },
];

export default function Index() {
  const systemTheme = useColorScheme();

  const [theme, setTheme] = useState(systemTheme);
  const [search, setSearch] = useState("");

  const isDark = theme === "dark";

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: isDark ? "#0F172A" : "#F8FAFC",
        },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text
          style={[
            styles.heading,
            {
              color: isDark ? "#fff" : "#000",
            },
          ]}
        >
          My Notes
        </Text>

        <Pressable
          style={[
            styles.themeButton,
            {
              backgroundColor: isDark ? "#1E293B" : "#E2E8F0",
            },
          ]}
          onPress={() =>
            setTheme(isDark ? "light" : "dark")
          }
        >
          <Text
            style={{
              color: isDark ? "#fff" : "#000",
            }}
          >
            {isDark ? "Dark" : "Light"}
          </Text>
        </Pressable>
      </View>

      {/* Search */}
      <TextInput
        placeholder="Search notes..."
        placeholderTextColor={isDark ? "#94A3B8" : "#64748B"}
        value={search}
        onChangeText={setSearch}
        style={[
          styles.searchInput,
          {
            backgroundColor: isDark ? "#1E293B" : "#fff",
            color: isDark ? "#fff" : "#000",
            borderColor: isDark ? "#334155" : "#CBD5E1",
          },
        ]}
      />

      {/* Notes List */}
      <FlatList
        data={filteredNotes}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => alert(item.title)}
            style={[
              styles.noteCard,
              {
                backgroundColor: isDark ? "#1E293B" : "#fff",
              },
            ]}
          >
            <Text
              style={[
                styles.noteDate,
                {
                  color: isDark ? "#94A3B8" : "#64748B",
                },
              ]}
            >
              {item.date}
            </Text>

            <Text
              style={[
                styles.noteTitle,
                {
                  color: isDark ? "#fff" : "#000",
                },
              ]}
            >
              {item.title}
            </Text>

            <Text
              style={[
                styles.noteContent,
                {
                  color: isDark ? "#CBD5E1" : "#475569",
                },
              ]}
            >
              {item.content}
            </Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  heading: {
    fontSize: 30,
    fontWeight: "700",
  },

  themeButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },

  searchInput: {
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 20,
    fontSize: 16,
  },

  noteCard: {
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
  },

  noteDate: {
    fontSize: 12,
    marginBottom: 8,
  },

  noteTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },

  noteContent: {
    fontSize: 15,
    lineHeight: 22,
  },
});
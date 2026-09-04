import { ThemedView } from "@/components/themed-view";
import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export default function SignIn() {
  const passwd = useState<string | null>(null);
  const email = useState<string | null>(null);

  function sendCredentials() {}

  function verifyEmail() {
    const emailValue = email[0];
    if (emailValue && emailValue.includes("@")) {
      return true;
    }
    return false;
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          onChangeText={(text) => email[1](text)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          onChangeText={(text) => passwd[1](text)}
          secureTextEntry={true}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    margin: 0,
    backgroundColor: "transparent",
  },
  input: {
    width: 200,
    height: 50,
    borderColor: "#ADD8E6",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 30,
  },
});

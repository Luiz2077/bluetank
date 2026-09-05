import { ThemedView } from "@/components/themed-view";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignIn() {
  const passwd = useState<string | null>(null);
  const email = useState<string | null>(null);

  const router = useRouter();

  const [sending, setSending] = useState<boolean>(false);

  function showAlert() {
    Alert.alert("Aviso", "Por favor, verifique suas credenciais.", [
      { text: "OK", onPress: () => setSending(false) },
    ]);
    setInterval(() => {
      setSending(false);
    }, 2000);
  }

  function verifyEmail() {
    const emailValue = email[0];
    if (emailValue && emailValue.includes("@")) {
      return true;
    }
    return false;
  }

  function handleBackPress() {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  }

  return (
    <ThemedView style={styles.container}>
      <View
        style={{
          justifyContent: "flex-start",
          width: "100%",
          marginTop: 80,
          marginLeft: 40,
        }}
      >
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Ionicons name='arrow-back' size={24} color='white' />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <View
          style={{ alignItems: "center", justifyContent: "center", gap: 10 }}
        >
          <Text style={{ color: "black", fontSize: 24, fontWeight: "bold" }}>
            Bem-vindo de volta!
          </Text>
          <Text style={{ color: "black", fontSize: 16 }}>
            Por favor, informe com suas credenciais.
          </Text>
        </View>
      </View>
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

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSending(true);
            showAlert();
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            {sending ? "Enviando..." : "Entrar"}
          </Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 0,
    margin: 0,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "white",
    width: "100%",
    height: "30%",
    paddingTop: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
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
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    gap: 30,
  },
  buttonContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#16A085",
    borderRadius: 15,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    backgroundColor: "#16A085",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 99,
  },
});

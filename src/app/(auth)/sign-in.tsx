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

import { ThemedView } from "@/components/themed-view";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim());
}

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sending, setSending] = useState(false);

  function handleBackPress() {
    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.replace("/");
  }

  function showCredentialsAlert() {
    Alert.alert(
      "Aviso",
      "Por favor, verifique suas credenciais.",
      [
        {
          text: "OK",
          onPress: () => setSending(false),
        },
      ],
      {
        cancelable: false,
      },
    );
  }

  function handleSubmit() {
    setSending(true);

    const hasValidEmail = isValidEmail(email);
    const hasValidPassword = password.trim().length > 0;

    if (!hasValidEmail || !hasValidPassword) {
      showCredentialsAlert();
      return;
    }

    // TODO: substituir pela chamada da API de autenticação.
    showCredentialsAlert();
  }

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity
        accessibilityLabel='Voltar para a tela inicial'
        accessibilityRole='button'
        onPress={handleBackPress}
        style={styles.backButton}
      >
        <Ionicons name='arrow-back' size={24} color='#FFFFFF' />
      </TouchableOpacity>

      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Bem-vindo de volta!</Text>

          <Text style={styles.subtitle}>
            Por favor, informe suas credenciais.
          </Text>
        </View>
      </View>

      <ThemedView style={styles.inputContainer}>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          onChangeText={setEmail}
          placeholder='Email'
          placeholderTextColor='#8193A5'
          style={styles.input}
          value={email}
        />

        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={setPassword}
          placeholder='Password'
          placeholderTextColor='#8193A5'
          secureTextEntry
          style={styles.input}
          value={password}
        />
      </ThemedView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          accessibilityLabel='Entrar'
          accessibilityRole='button'
          disabled={sending}
          onPress={handleSubmit}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
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
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  backButton: {
    position: "absolute",
    top: 80,
    left: 40,
    zIndex: 1,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: "#16A085",
  },

  header: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: "#FFFFFF",
  },

  headerContent: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  title: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "700",
  },

  subtitle: {
    color: "#000000",
    fontSize: 16,
  },

  inputContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    paddingTop: 30,
  },

  input: {
    width: "80%",
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ADD8E6",
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    color: "#000000",
  },

  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: "#16A085",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});

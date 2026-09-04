import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View
        style={[
          styles.hero,
          {
            paddingTop: insets.top + 32,
          },
        ]}
      >
        <View style={styles.brandSymbol}>
          <Text style={styles.brandInitials}>BT</Text>
        </View>

        <Text style={styles.brandName}>BlueTank</Text>
        <Text style={styles.brandCaption}>Piscicultura inteligente</Text>
      </View>

      <View
        style={[
          styles.panel,
          {
            paddingBottom: Math.max(insets.bottom, 24),
          },
        ]}
      >
        <Text style={styles.title}>Bem-vindo ao BlueTank</Text>

        <Text style={styles.description}>
          Controle e monitore seus tanques de onde estiver.
        </Text>

        <View style={styles.actions}>
          <Link href='/(auth)/sign-in' asChild>
            <Pressable
              accessibilityRole='button'
              style={({ pressed }) => [
                styles.primaryButton,
                pressed && styles.buttonPressed,
              ]}
            >
              <Text style={styles.primaryButtonText}>Entrar</Text>
            </Pressable>
          </Link>

          <Link href='/(auth)/sign-up' asChild>
            <Pressable
              accessibilityRole='button'
              style={({ pressed }) => [
                styles.secondaryButton,
                pressed && styles.buttonPressed,
              ]}
            >
              <Text style={styles.secondaryButtonText}>Criar conta</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#1689D8",
  },
  hero: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  brandSymbol: {
    width: 72,
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    borderRadius: 36,
    backgroundColor: "rgba(255, 255, 255, 0.18)",
  },
  brandInitials: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
  },
  brandName: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
  },
  brandCaption: {
    marginTop: 6,
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 14,
  },
  panel: {
    minHeight: 340,
    paddingTop: 42,
    paddingHorizontal: 28,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    backgroundColor: "#FFFFFF",
  },
  title: {
    color: "#102A43",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },
  description: {
    marginTop: 12,
    color: "#627D98",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
  actions: {
    marginTop: 36,
    gap: 14,
  },
  primaryButton: {
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: "#1689D8",
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  secondaryButton: {
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#1689D8",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
  },
  secondaryButtonText: {
    color: "#1689D8",
    fontSize: 16,
    fontWeight: "700",
  },
  buttonPressed: {
    opacity: 0.75,
  },
});

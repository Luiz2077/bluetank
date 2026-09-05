import welcomeImage from "@/assets/images/welcome1.jpg";
import { Link } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={welcomeImage}
      style={styles.screen}
      imageStyle={styles.backgroundImage}
      resizeMode='cover'
    >
      <View style={styles.overlay} pointerEvents='none' />

      <View style={styles.content}>
        <View
          style={[
            styles.hero,
            {
              paddingTop: insets.top + 62,
            },
          ]}
        >
          <Text style={styles.brandName}>BlueTank</Text>

          <Text style={styles.brandCaption}>
            Controle e monitore seus tanques de onde estiver.
          </Text>
        </View>

        <View style={styles.actions}>
          <Link href='/sign-in' asChild>
            <TouchableOpacity
              accessibilityRole='button'
              style={styles.buttonStyle}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </Link>

          <Link href='/sign-up' asChild>
            <TouchableOpacity
              accessibilityRole='button'
              style={styles.buttonStyle}
            >
              <Text style={styles.buttonText}>Criar conta</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0B5E91",
  },

  backgroundImage: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(8, 48, 76, 0.18)",
  },

  content: {
    flex: 1,
    justifyContent: "space-between",
  },

  hero: {
    alignItems: "flex-start",
    paddingHorizontal: 24,
    backgroundColor: "transparent",
  },

  brandName: {
    color: "white",
    fontSize: 40,
    fontWeight: "700",
  },

  brandCaption: {
    marginTop: 6,
    color: "white",
    fontSize: 20,
  },

  actions: {
    marginTop: 32,
    gap: 14,
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  buttonStyle: {
    width: 300,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: "white",
    display: "flex",
  },

  buttonText: {
    color: "#1689D8",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "center",
  },

  buttonPressed: {
    opacity: 0.75,
  },
});

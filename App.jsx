import { LogBox, StyleSheet, Text, View } from "react-native";
LogBox.ignoreAllLogs();

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

// let AppEntryPoint = App;

// console.log(Constants.expoConfig.extra);

// if (Constants.expoConfig.extra.storybookEnabled === "true") {
AppEntryPoint = require("./.storybook").default;
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;

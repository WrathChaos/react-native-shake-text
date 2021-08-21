/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { Text, View, Image, Dimensions, SafeAreaView } from "react-native";
import ShakeText from "./lib/ShakeText";
import TextInput from "react-native-text-input-interactive";
import RNBounceable from "@freakycoder/react-native-bounceable";

const { width: ScreenWidth } = Dimensions.get("screen");

interface IProps {}

interface IState {
  isEmailShakeVisible: boolean;
  isPasswordShakeVisible: boolean;
  email?: string;
  password?: string;
}

export default class App extends React.Component<IProps, IState> {
  shakeEmailRef: ShakeText | null = null;
  shakePasswordRef: ShakeText | null = null;

  constructor(props: IProps) {
    super(props);
    this.state = {
      isEmailShakeVisible: false,
      isPasswordShakeVisible: false,
      email: undefined,
      password: undefined,
    };
  }

  renderHeader = () => (
    <View style={{ marginTop: 24 }}>
      <Text style={{ color: "#2a41cb", fontWeight: "bold", fontSize: 32 }}>
        Welcome Back 👋
      </Text>
      <Text style={{ color: "#8e9496", letterSpacing: 1, marginTop: 8 }}>
        I am so happy to see you. You can continue to login for manage your
        finance
      </Text>
    </View>
  );

  renderEmailShakeText = () =>
    this.state.isEmailShakeVisible && (
      <ShakeText
        style={{ fontSize: 16, color: "red", paddingBottom: 5 }}
        ref={(ref: any) => (this.shakeEmailRef = ref)}
      >
        Please enter a valid email
      </ShakeText>
    );

  renderPasswordShakeText = () =>
    this.state.isPasswordShakeVisible && (
      <ShakeText
        style={{ fontSize: 16, color: "red", paddingBottom: 5 }}
        ref={(ref: any) => (this.shakePasswordRef = ref)}
      >
        Please enter a valid password
      </ShakeText>
    );

  renderTextInputs = () => (
    <View style={{ marginTop: 52 }}>
      {this.renderEmailShakeText()}
      <TextInput
        textInputStyle={{ width: ScreenWidth * 0.88 }}
        onChangeText={(text: string) => this.setState({ email: text })}
      />
      <View style={{ marginTop: 12 }}>
        {this.renderPasswordShakeText()}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            placeholder="Password"
            secureTextEntry
            enableIcon
            textInputStyle={{ width: ScreenWidth * 0.7 }}
            iconImageSource={require("./assets/visibility-button.png")}
            onChangeText={(text: string) => this.setState({ password: text })}
            onIconPress={() => {}}
          />
          <RNBounceable
            style={{
              height: 50,
              width: 50,
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#2a41cb",
              borderWidth: 1,
              borderRadius: 8,
            }}
          >
            <Image
              source={require("./assets/fingerprint.png")}
              style={{ height: 25, width: 25, tintColor: "#2a41cb" }}
            />
          </RNBounceable>
        </View>
      </View>
      <RNBounceable style={{ marginLeft: "auto", marginTop: 16 }}>
        <Text style={{ color: "#2a41cb", fontWeight: "500" }}>
          Forgot Password?
        </Text>
      </RNBounceable>
    </View>
  );

  renderLoginButton = () => (
    <RNBounceable
      style={{
        height: 50,
        width: ScreenWidth * 0.88,
        backgroundColor: "#2a41cb",
        marginTop: ScreenWidth * 0.5,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        shadowRadius: 8,
        shadowOpacity: 0.3,
        shadowColor: "#2a41cb",
        shadowOffset: {
          width: 0,
          height: 5,
        },
      }}
      onPress={async () => {
        if (!this.state.email) {
          this.setState({ isEmailShakeVisible: true }, () => {
            this.shakeEmailRef?.startShakeAnimation();
          });
        } else {
          this.setState({ isEmailShakeVisible: false });
        }
        if (!this.state.password) {
          this.setState({ isPasswordShakeVisible: true }, () => {
            this.shakePasswordRef?.startShakeAnimation();
          });
        } else {
          this.setState({ isPasswordShakeVisible: false });
        }
      }}
    >
      <Text style={{ fontWeight: "bold", color: "#fff" }}>Login</Text>
    </RNBounceable>
  );

  renderDontHaveAccountButton = () => (
    <RNBounceable
      style={{ marginTop: ScreenWidth * 0.4, alignItems: "center" }}
    >
      <Text style={{ fontWeight: "700" }}>Don't have an account</Text>
    </RNBounceable>
  );

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          marginLeft: 24,
          marginRight: 24,
        }}
      >
        {this.renderHeader()}
        {this.renderTextInputs()}
        {this.renderLoginButton()}
        {this.renderDontHaveAccountButton()}
      </SafeAreaView>
    );
  }
}

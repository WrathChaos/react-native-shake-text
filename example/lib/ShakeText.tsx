import * as React from "react";
import { View, Text, Animated } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./ShakeText.style";

interface IProps {
  style?: any;
  TextComponent?: any;
}

interface IState {}

export default class ShakeText extends React.Component<IProps, IState> {
  shakeAnimation: Animated.Value;

  constructor(props: IProps) {
    super(props);
    this.shakeAnimation = new Animated.Value(0);
    this.state = {};
  }

  startShakeAnimation = () => {
    Animated.sequence([
      Animated.timing(this.shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(this.shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(this.shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(this.shakeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  render() {
    const { style, children, TextComponent = Text } = this.props;
    return (
      <Animated.View
        {...this.props}
        style={[
          {
            transform: [{ translateX: this.shakeAnimation }],
          },
          style,
        ]}
      >
        <TextComponent {...this.props}>{children}</TextComponent>
      </Animated.View>
    );
  }
}

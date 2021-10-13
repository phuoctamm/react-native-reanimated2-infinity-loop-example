import React from 'react';
import PropTypes from 'prop-types';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';

function Animation({process}) {
  const animateStyle = useAnimatedStyle(() => {
    const rotate = !process.value ? 0 : process.value;

    return {
      // opacity: rotate,
      transform: [
        {
          rotateZ: `${rotate}deg`,
        },
      ],
    };
  });

  return <Animated.View style={[styles.box, animateStyle]} />;
}

Animation.propTypes = {};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

export default Animation;

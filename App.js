import React, {useState} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import {
  useSharedValue,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';
import {withPause} from 'react-native-redash';
import Animation from './Animation';

function App(props) {
  const [isPlay, setIsPlay] = useState(false);
  const process = useSharedValue(null);
  const paused = useSharedValue(!isPlay);

  return (
    <>
      <View style={styles.content}>
        <Animation {...{process}} />
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          setIsPlay(!isPlay);
          paused.value = !paused.value;

          if (process.value === null) {
            process.value = withPause(
              withRepeat(
                withTiming(180, {
                  duration: 5000,
                  easing: Easing.linear,
                }),
                -1,
                false,
              ),
              paused,
            );
          }
        }}>
        <Text>Press me</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default App;

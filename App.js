import React from 'react';
import { View } from 'react-native';

import styles from './styles/style';
import Game from './src/Game';

export default function App() {
  return (
    <View style={styles.screen}>
      <Game />
    </View>
  );
}

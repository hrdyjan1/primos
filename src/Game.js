import React, { PureComponent } from 'react';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';
import Finger from './components/finger';
import Sumik from './components/sumik';
import { MoveFinger, Controls } from './systems';

const { width, height } = Dimensions.get('window');
const cx = width / 2;
const yOffset = (height - 465) / 2;
const platformHeight = 20;
const engine = Matter.Engine.create({ enableSleeping: false });
const { world } = engine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
});

export default class Game extends PureComponent {
  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[MoveFinger, Controls]}
        entities={{
          0: { position: [40, 200], renderer: <Finger /> }, // -- Notice that each entity has a unique id (required)
          sumik: Sumik(world, [cx, yOffset + 465 - platformHeight / 2 - 20], 30, 40),
        }}
      >
        <StatusBar hidden />
      </GameEngine>
    );
  }
}

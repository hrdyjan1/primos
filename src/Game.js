import React, { PureComponent } from 'react';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';

import Sumik from './components/sumik';
import Platform from './components/platform';
import Barrier from './components/barrier';

import { Controls, Physics } from './systems';

const { width, height } = Dimensions.get('window');
const cx = width / 2;
const cy = height / 2;
const yOffset = (height - 465) / 2 - 35;
const platformHeight = 20;
const platformWidth = Math.min(width, 430);
const engine = Matter.Engine.create({ enableSleeping: false });
const { world } = engine;
world.gravity = { x: 0, y: 2 };

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
        systems={[Controls, Physics]}
        entities={{
          physics: { engine, world },
          platform7: Platform(world, [cx, yOffset + 465], 0, platformWidth * 0.9, platformHeight),
          barrier1: Barrier(world, [cx - platformWidth / 2 + platformHeight / 2, cy]),
          barrier2: Barrier(world, [cx + platformWidth / 2 - platformHeight / 2, cy]),
          sumik: Sumik(world, [cx, yOffset + 465 - platformHeight / 2 - 140]),
        }}
      >
        <StatusBar hidden />
      </GameEngine>
    );
  }
}

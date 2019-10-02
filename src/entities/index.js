import React from 'react';
import { Dimensions } from 'react-native';
import Matter from 'matter-js';
import Finger from '../components/finger';
import Sumik from '../components/sumik';

Matter.Common.isElement = () => false; // -- Overriding this function because the original references HTMLElement

const { width, height } = Dimensions.get('window');
const cx = width / 2;
const yOffset = (height - 465) / 2;
const engine = Matter.Engine.create({ enableSleeping: false });
const { world } = engine;

export default {
  //   physics: { engine, world },
  //   mario: Sumik(world, [cx, yOffset + 465 - 50 / 2 - 20], 30, 40),
  finger: { position: [40, 200], renderer: <Finger /> },
};

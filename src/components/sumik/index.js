/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { StyleSheet, Image } from 'react-native';
import Matter from 'matter-js';
import Sumik from './sumik.png';

const styles = StyleSheet.create({
  sumik: {
    position: 'absolute',
  },
});

export class Renderer extends PureComponent {
  render() {
    const { size, body } = this.props;
    const width = size[0];
    const height = size[1];
    const x = body.position.x - width / 2;
    const y = body.position.y - height / 2;
    const { angle } = body;
    const { direction } = this.props;

    return (
      <Image
        source={Sumik}
        style={[
          styles.sumik,
          {
            left: x,
            top: y,
            transform: [
              { rotateZ: `${angle}rad` },
              { rotateY: `${direction === 'right' ? 180 : 0}deg` },
            ],
          },
        ]}
      />
    );
  }
}

export default (world, pos, width = 30, height = 40) => {
  const body = Matter.Bodies.rectangle(pos[0], pos[1], width, height, {
    density: 0.5,
    frictionAir: 0.5,
    friction: 1,
  });
  Matter.World.add(world, [body]);
  return {
    body,
    size: [width, height],
    direction: 'right',
    moving: false,
    renderer: <Renderer />,
  };
};

/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Matter from 'matter-js';
import _ from 'lodash';
import Platform from './platform.png';

const styles = StyleSheet.create({
  platform: {
    position: 'absolute',
    flexDirection: 'row',
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
    const images = _.range(0, width, 20).map((_x, i) => <Image key={i} source={Platform} />);

    return (
      <View
        style={[
          styles.platform,
          {
            left: x,
            top: y,
            transform: [{ rotateZ: `${angle}rad` }],
            width,
            height,
          },
        ]}
      >
        {images}
      </View>
    );
  }
}

export default (world, pos, angle, width, height) => {
  const body = Matter.Bodies.rectangle(pos[0], pos[1], width, height, {
    isStatic: true,
    angle,
    friction: 1,
  });
  Matter.World.add(world, [body]);
  return { platform: true, body, size: [width, height], renderer: <Renderer /> };
};

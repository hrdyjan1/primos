import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import Matter from 'matter-js';
import Sumik from './sumik.png';

function Renderer({ size, body, direction }) {
  const width = size[0];
  const height = size[1];
  const x = body.position.x - width / 2;
  const y = body.position.y - height / 2;
  const { angle } = body;

  return (
    <Image
      source={Sumik}
      style={{
        left: x,
        top: y,
        transform: [
          { rotateZ: `${angle}rad` },
          { rotateY: `${direction === 'right' ? 180 : 0}deg` },
        ],
      }}
    />
  );
}

export default (world, pos, width, height) => {
  const body = Matter.Bodies.rectangle(pos[0], pos[1], width, height, { angle: 0 });
  Matter.World.add(world, [body]);
  const renderer = <Renderer />;
  return { body, size: [width, height], moving: false, direction: 'right', renderer };
};

Renderer.propTypes = {
  size: PropTypes.array,
  body: PropTypes.object,
  direction: PropTypes.string,
};

Renderer.defaultProps = {
  size: [],
  body: {},
  direction: '',
};

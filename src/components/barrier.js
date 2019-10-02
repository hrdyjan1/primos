import Matter from 'matter-js';

export default (world, pos, width = 20, height = 465) => {
  const body = Matter.Bodies.rectangle(pos[0], pos[1], width, height, {
    isStatic: true,
    friction: 0,
  });
  Matter.World.add(world, [body]);
  return { body, size: [width, height] };
};

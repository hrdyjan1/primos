import Matter from 'matter-js';

export default (entities, { time }) => {
  const { engine } = entities.physics;

  Matter.Engine.update(engine, time.delta);

  return entities;
};

const direction = (touches, defaultDirection = 'right') => {
  const move = touches.find(x => x.type === 'move');

  if (move) {
    if (move.delta.locationX < -2) return 'left';

    if (move.delta.locationX > 2) return 'right';
  }

  return defaultDirection;
};

// Handle holding finger on screen
const holding = (touches, defaultMoving = false) => {
  const start = touches.find(x => x.type === 'start');

  if (start) return true;

  const end = touches.find(x => x.type === 'end');

  if (end) return false;

  return defaultMoving;
};

export default (entities, { touches }) => {
  const { sumik } = entities;

  sumik.direction = direction(touches, sumik.direction);
  sumik.moving = holding(touches, sumik.moving);

  return entities;
};

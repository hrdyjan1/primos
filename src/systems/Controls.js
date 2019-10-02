import Matter from 'matter-js';

const direction = (touches, defaultDirection = 'right') => {
  const move = touches.find(x => x.type === 'move');

  if (move) {
    if (move.delta.locationX < -2) return 'left';

    if (move.delta.locationX > 2) return 'right';
  }

  return defaultDirection;
};

const walking = (touches, defaultWalking = false) => {
  const start = touches.find(x => x.type === 'start');

  if (start) return true;

  const end = touches.find(x => x.type === 'end');

  if (end) return false;

  return defaultWalking;
};

const jumping = (sumik, platforms, touches) => {
  const sumikBody = sumik.body;
  const jump = touches.find(x => x.type === 'move');

  if (jump && jump.delta.locationY < -2) {
    const collisions = Matter.Query.point(platforms.map(x => x.body), {
      x: sumikBody.position.x,
      y: sumikBody.position.y + 25,
    });

    return collisions && collisions.length >= 1;
  }

  return false;
};

export default (entities, { touches }) => {
  const { sumik } = entities;
  const platforms = Object.keys(entities)
    .filter(key => entities[key].platform)
    .map(key => entities[key]);

  sumik.direction = direction(touches, sumik.direction);
  sumik.walking = walking(touches, sumik.walking);
  sumik.jumping = jumping(sumik, platforms, touches);

  if (sumik.walking) {
    // Matter.Body.setStatic(sumik.body, false);
    Matter.Body.applyForce(sumik.body, sumik.body.position, {
      x: sumik.direction === 'right' ? 2.5 : -2.5,
      y: 0,
    });
    // sumik.body.force = { x: sumik.direction === "right" ? 5.5 : -5.5, y: 0};
    // Matter.Body.setVelocity(sumik.body, { x: sumik.direction === "right" ? 2.5 : -2.5, y: 0});
    // Matter.Body.setPosition(sumik.body, { x: sumik.body.position.x + (sumik.direction === "right" ? 2.5 : -2.5), y: sumik.body.position.y })
  }
  // else
  // Matter.Body.setStatic(sumik.body, true);
  // Matter.Body.setPosition(sumik.body, sumik.body.position);

  if (sumik.jumping) {
    // console.log("jumping");
    Matter.Body.applyForce(sumik.body, sumik.body.position, {
      x: sumik.direction === 'right' ? 2.5 : -2.5,
      y: -40,
    });
  }

  Matter.Body.setAngle(sumik.body, 0);

  return entities;
};

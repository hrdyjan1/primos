const TapFinger = (entities, { touches }) => {
  // -- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
  // -- There's nothing stopping you from treating the game state as immutable and returning a copy..
  // -- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
  // -- That said, it's probably worth considering performance implications in either case.

  touches
    .filter(t => t.type === 'tap')
    .forEach(t => {
      console.log(t);
    });

  return entities;
};

export default TapFinger;

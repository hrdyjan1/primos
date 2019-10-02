import { StyleSheet } from 'react-native';

export const RADIUS = 30;

const style = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  finger: {
    borderWidth: 4,
    borderRadius: RADIUS * 2,
    borderColor: '#ff0',
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: 'pink',
    position: 'absolute',
  },
});

export default style;

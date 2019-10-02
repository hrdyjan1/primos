import { View } from 'react-native';
import React, { PureComponent } from 'react';
import styles, { RADIUS } from '../../../styles/style';

class Finger extends PureComponent {
  render() {
    // eslint-disable-next-line react/prop-types
    const { position } = this.props;
    const x = position[0] - RADIUS / 2;
    const y = position[1] - RADIUS / 2;
    return <View style={[styles.finger, { left: x, top: y }]} />;
  }
}

export default Finger;

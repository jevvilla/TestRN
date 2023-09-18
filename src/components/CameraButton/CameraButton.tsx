import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {style} from './CameraButton.style';

const CameraButton: React.FunctionComponent<TouchableOpacityProps> = props => {
  return (
    <TouchableOpacity {...props} style={[props.style, style.takePhotoButton]}>
      <AntDesign name="camerao" style={style.icon} />
    </TouchableOpacity>
  );
};

export default CameraButton;

import {StyleSheet} from 'react-native';

export default (imageWidth: number) =>
  StyleSheet.create({
    imageContainer: {
      width: imageWidth,
      height: imageWidth,
    },
    takePhotoButton: {
      width: imageWidth,
      height: imageWidth,
      backgroundColor: '#FFF',
    },
  });

import React from 'react';
import {Dimensions, FlatList, ListRenderItem} from 'react-native';

import {ImageAsset} from '../../types';
import FastImage from 'react-native-fast-image';
import AssetGalleryStyle from './AssetGallery.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera} from 'react-native-image-picker';
import CameraButton from '../CameraButton/CameraButton';

const NUMBER_OF_COLUMNS = 3;
const screenWidth = Dimensions.get('window').width;
const imageWidth = screenWidth / NUMBER_OF_COLUMNS;
const PLACEHOLDE_ASSET = '@placeholderAsset';
const STORAGE_KEY = '@ftgrpAssetList';

const style = AssetGalleryStyle(imageWidth);

export const AssetGallery: React.FunctionComponent = () => {
  const [assetList, setAssetList] = React.useState<ImageAsset[]>([]);

  React.useEffect(() => {
    getImagesFromAsynStorage();
  }, []);

  const getImagesFromAsynStorage = async () => {
    const assets = await AsyncStorage.getItem(STORAGE_KEY);
    if (assets !== null) {
      setAssetList(JSON.parse(assets));
    } else {
    }
  };

  const onOpenCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        presentationStyle: 'overFullScreen',
        saveToPhotos: true,
      },
      response => {
        const asset = response?.assets?.[0];
        if (asset && asset.fileName && asset.uri) {
          const assets = [
            ...assetList,
            {id: asset.id, fileName: asset.fileName, uri: asset.uri},
          ];

          saveAssetToAsyncStorage(assets);
        }
      },
    );
  };

  const saveAssetToAsyncStorage = async (data: ImageAsset[]) => {
    try {
      if (data && data.length) {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        setAssetList(data);
      }
    } catch (e) {
      console.log('ERROR: ', e);
    }
  };

  const renderItem: ListRenderItem<ImageAsset> = ({item}) => {
    if (item.fileName === PLACEHOLDE_ASSET) {
      return (
        <CameraButton onPress={onOpenCamera} style={style.takePhotoButton} />
      );
    } else {
      return (
        <FastImage
          style={style.imageContainer}
          source={{
            uri: item.uri,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      );
    }
  };

  return (
    <FlatList
      keyExtractor={item => item.fileName}
      data={[...assetList, {fileName: PLACEHOLDE_ASSET, uri: PLACEHOLDE_ASSET}]}
      renderItem={renderItem}
      numColumns={NUMBER_OF_COLUMNS}
    />
  );
};

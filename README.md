# Challenge

This app contains an application that gives the user the chance to take pictures and list them in a photo gallery grid, each photo uri is saved in the async storage to persist the photos in the gallery.

## Developer notes:

The following packages / technologies were used to build the app:

- React Native
- react-native-fast-image
- react-native-image-picker
- react-native-vector-icons
- @react-native-community/async-storage
- TypeScript

## Before we start

Please make sure you have `node (latest)`, `npm`, `git`, `cocoapods` installed correctly. In case you don't have any of those installed and setup, please go to [nodejs.org](https://nodejs.org/en/) to download and install the **Recommended For Most Users** version, or go [here](https://git-scm.com/downloads) to download `git`. `cocoapods` can be set up following this [link](https://reactnative.dev/docs/environment-setup).

## Setup

### React Native

Please refer the [React Native docs Getting Started guide](https://facebook.github.io/react-native/docs/getting-started) over the **React Native CLI Quickstart** tab. There, you can see all the detailed setup process for `Android` and `iOS` platforms.

### Clone repo

Once the above parts are setup, you can go ahead and clone the repo using the following command in your terminal:

```
git clone https://github.com/jevvilla/TestRN.git
```

#### NOTE: please make sure you are in the correct branch, `master` in this case.

Then go to the project root (project folder), and run the following commands to get the app running:

- `npm install` - Install project dependencies. (yarn can be used also).
- Install Pods, from the root path run `cd ios && pod install`.
- `npm run ios` - Run the app locally. By default this will run an iPhone X simulator.
- `npm run android` - To run app locally in a Android simulator.

### Note:

As this application has as main functionality the camera device, please make sure you run the application on a iOS or Android real device.

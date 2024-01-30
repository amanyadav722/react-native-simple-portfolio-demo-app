import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
  img: {
    width: 130,
    height: 120,
    marginTop: 15,
    borderRadius: 10,
  },
  tinyLogo: {
    width: 90,
    height: 90,
    marginTop: 15,
  },
  logo: {
    width: 66,
    height: 66,
    marginTop: 10,
    marginBottom: 10,
  },
  videoStyle: {
    width: 200,
    height: 220,
  },
});

const ImageDisplay = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../assets/nature.png')}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Image
        style={styles.logo}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
      <Video
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        style={styles.videoStyle}
        controls={true}
        // resizeMode="cover"
        hideShutterView={true}
        paused={true}
      />
    </View>
  );
};

export default ImageDisplay;
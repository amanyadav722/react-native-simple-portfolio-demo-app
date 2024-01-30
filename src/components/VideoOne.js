import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
    },
    videoStyle: {
        width: 200,
        height: 220,
    },
});

const VideoOne = () => {
    return (
        <View style={styles.container}>
            <Video
                source={{
                    uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                }}
                style={styles.videoStyle}
                controls={true}
                resizeMode="cover"
                hideShutterView={true}
                paused={true}
            />
        </View>
    );
};

export default VideoOne;
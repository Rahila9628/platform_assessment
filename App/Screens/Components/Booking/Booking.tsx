import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Canvas, { Image as CanvasImage } from 'react-native-canvas';
import { pinsData, width } from '@Utils/Constant';
import AppImages from '@Theme/AppImages';

const Booking = () => {
  // States
  const [selectedRoom, setSelectedRoom] = useState(null);

  const roomInfo: any[] = [];

  const handleCanvas = (canvas: any) => {
    if (!(canvas instanceof Canvas)) {
      return;
    }
    pinsData.forEach((room, index) => {
      const image = new CanvasImage(canvas);
      canvas.width = width;

      const context = canvas.getContext('2d');

      image.src = 'https://static.thenounproject.com/png/1426584-200.png';

      image.addEventListener('load', () => {
        const [x, y] = room.coordinates.split(',').map(Number);
        console.log({ x, y });
        context.drawImage(image, x * 0.06, y * 0.06, 25, 25);
        roomInfo[index] = {
          name: room.name,
          coordinates: [x, y],
        };
      });

      image.addEventListener('click', () => {
        //select room
      });
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: AppImages.floor }}
        style={{ height: width, width: width }}
        resizeMode="stretch"
      />
      <Canvas ref={handleCanvas} style={styles.canvas} />
      {selectedRoom && <Text style={styles.roomName}>{selectedRoom}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  canvas: {
    borderColor: 'black',
    position: 'absolute',
    width: width,
    zIndex: 500,
  },
  roomName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'red',
  },
});

export default Booking;

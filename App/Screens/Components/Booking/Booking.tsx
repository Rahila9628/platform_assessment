import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import Canvas from 'react-native-canvas';
import { Svg, Circle, Text as SvgText } from 'react-native-svg';
import { height, pinsData, width } from '@Utils/Constant';
import AppImages from '@Theme/AppImages';

const MeetRooms = () => {
  const canvasRef = useRef(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const roomInfo: any[] = [];

  const drawMeetRooms = (canvas: any) => {
    const ctx = canvas.getContext('2d');

    pinsData.forEach((room, index) => {
      const [x, y] = room.coordinates.split(',').map(Number);

      ctx.beginPath();
      ctx.arc(x, y, 20, 0, 2 * Math.PI);
      ctx.fillStyle = room.status === 'active' ? 'green' : 'red';
      ctx.fill();

      roomInfo[index] = {
        name: room.name,
        coordinates: [x, y],
      };
    });
  };

  const handlePress = (event: any) => {
    const { locationX, locationY } = event.nativeEvent;
    console.log({ event });

    for (let i = 0; i < roomInfo.length; i++) {
      const [x, y] = roomInfo[i].coordinates;
      const distance = Math.sqrt(
        Math.pow(locationX - x, 2) + Math.pow(locationY - y, 2),
      );

      if (distance <= 20) {
        setSelectedRoom(roomInfo[i].name);
        break;
      }
    }
  };

  return (
    <ImageBackground
      source={{ uri: AppImages.floor }}
      imageStyle={{ height: height, width: width, flex: 1 }}>
      <View style={styles.container}>
        <Canvas
          ref={canvasRef}
          style={styles.canvas}
          onDraw={drawMeetRooms}
          onPress={handlePress}
        />
        {selectedRoom && <Text style={styles.roomName}>{selectedRoom}</Text>}
      </View>
    </ImageBackground>
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
    borderWidth: 1,
    borderColor: 'black',
  },
  roomName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'red',
  },
});

export default MeetRooms;

import { Platform, Dimensions } from 'react-native';
import AppImages from '@Theme/AppImages';

export const isIOS = Platform.OS === 'ios';

export const { height, width } = Dimensions.get('window');

export const aspectRatio = height / width;
export const isiPad = aspectRatio < 1.6;

// Custom Fonts
export const fonts = {
  Regular: { fontFamily: 'Lexend-Regular' },
  Light: { fontFamily: 'Lexend-Light' },
  Medium: { fontFamily: 'Lexend-Medium' },
  SemiBold: { fontFamily: 'Lexend-SemiBold' },
  Bold: { fontFamily: 'Lexend-Bold' },
};

// Font Sizes
export const fontSizes = {
  xsmall: 10,
  small: 12,
  medium: 14,
  large: 16,
  xlarge: 18,
  xxlarge: 25,
  xxxlarge: 32,
};

export const alertData = {
  updateVersion: {
    title: 'New updates available',
    subTitle: 'To continue to use the BoilerPlate,\nyou must update your app.',
  },
};

export const articles = [
  {
    title: 'How to speed up your productivity',
    image:
      'https://i.postimg.cc/pXzg175r/360-F-284529974-4g-Qd-Vf3p-Gjh-WEd-S5-Fmla-Rdmfs-Xcwaa3-U.jpg',
  },
  {
    title: 'next holidays announced',
    image:
      'https://i.postimg.cc/6p6YL1dD/continental-breakfast-coffee-orange-juice-600nw-184835783.webp',
  },
];

export const notifications = [
  {
    notification: 'You have 3 new messages from R. Carlos',
  },
  {
    notification: 'John sent an image',
  },
  {
    notification: 'Jane shared a video with you',
  },
];

export const optionsData = [
  {
    id: 1,
    title: 'Book a meeting',
    image: AppImages.calendar,
  },
  {
    id: 2,
    title: 'Book a hotdesk',
    image: AppImages.workTable,
  },
  {
    id: 3,
    title: 'Check in',
    image: AppImages.qr,
  },
  {
    id: 4,
    title: 'Order from pantry',
    image: AppImages.coffee,
  },
  {
    id: 5,
    title: 'Raise a ticket',
    image: AppImages.danger,
  },
];

export const pinsData = [
  {
    "id": 54,
    "uuid": "d49ad48d-6b4a-4dfb-8b35-c945b7102b04",
    "name": "Public Meet Room",
    "status": "active",
    "coordinates": "2979.193189446831,1746.9744966442952"
  },
  {
    "id": 31,
    "uuid": "f38b442c-726c-46a5-bdbf-8b7486795b41",
    "name": "Special Meet Room",
    "status": "active",
    "coordinates": "430.21789406552097,476.12214765100674"
  },
  {
    "id": 26,
    "uuid": "36e89433-076f-47f4-a61d-449c9ae26cb2",
    "name": "Advisory Meet Room",
    "status": "active",
    "coordinates": "1389.6636513157896,841.2684563758389"
  },
  {
    "id": 25,
    "uuid": "5b83cae2-3411-4c09-803a-db70b5f97799",
    "name": "IT Meet Room",
    "status": "active",
    "coordinates": "827.6002785982814,1739.8147651006711"
  },
  {
    "id": 41,
    "uuid": "c250e2be-30cc-4b7a-a8a1-3e3d5076ffb5",
    "name": "HR Meet Room",
    "status": "active",
    "coordinates": "1010.1813741944146,1908.0684563758389"
  }
]
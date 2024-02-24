import Home from '@Components/Home/Home';
import Booking from '@Components/Booking/Booking';

enum Route {
  HomeScreen = 'Home',
  Booking = 'Booking',
}

const Routes = [
  {
    name: Route.HomeScreen,
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: Route.Booking,
    screen: Booking,
    navigationOptions: {
      headerShown: false,
    },
  },
];

export { Routes, Route };

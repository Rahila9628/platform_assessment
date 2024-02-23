import Home from '@Components/Home/Home';

enum Route {
  HomeScreen = 'Home',
}

const Routes = [
  {
    name: Route.HomeScreen,
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
];

export { Routes, Route };

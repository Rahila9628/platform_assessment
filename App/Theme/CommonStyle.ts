import { StyleSheet } from 'react-native';

const CommonStyle = StyleSheet.create({
  absoluteView: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  clearBack: {
    backgroundColor: 'transparent',
  },
  flexContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  androidRipple: {
    color: 'white',
  },
  flex1: { flex: 1 },
  overFlowHidden: { overflow: 'hidden' },
  alignSelfEnd: { alignSelf: 'flex-end' },
  alignSelfCenter: { alignSelf: 'center' },
  row: { flexDirection: 'row' },
  flexGrow: { flexGrow: 1 },
  uppercase: { textTransform: 'uppercase' },
  capitalize: { textTransform: 'capitalize' },
  normalText: { textTransform: 'none' },
  centerText: { textAlign: 'center' },
  justifyCenter: { justifyContent: 'center' },
  justifyBetween: { justifyContent: 'space-between' },
  alignCenter: { alignItems: 'center' },
  borderNun: { borderWidth: 0 },
  marginTop: { marginTop: 20 },
  marginBottom: { marginBottom: 20 },
  marginVertical: { marginVertical: 10 },
  marginHorizontal: { marginHorizontal: 20 },
  paddingHorizontal: { paddingHorizontal: 20 },
  paddingVertical: { paddingVertical: 10 },
  paddingBottom: { paddingBottom: 20 },
});

export default CommonStyle;

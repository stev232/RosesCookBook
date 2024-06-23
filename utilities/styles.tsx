import { StyleSheet } from 'react-native';

export const defaultStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 50,
    marginTop: 50,
    textAlign: 'center',
    width: '75%',
  },
  contentHolder: {
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  scrollViewStyle: {
    minHeight: '100%',
  },
  highlight: {
    fontWeight: '700',
  },
});
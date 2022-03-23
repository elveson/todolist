import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
  },
  text: {
    fontSize: 25,
    margin: 20,
    color: 'white',
    paddingTop: 20,
  },
  input: {
    backgroundColor: '#1f1e25',
    color: 'white',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginHorizontal: 20,
  },
});

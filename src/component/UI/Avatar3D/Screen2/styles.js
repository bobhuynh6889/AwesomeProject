import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#49426D',
  },
  header: {
    height: 85,
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  backButton: {
    flex: 1,
  },
  textHeader: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottom: {
    flex: 1,
    backgroundColor: '#3a2e5d',
    marginHorizontal: 30,
    borderRadius: 40,
    alignItems: 'center',
    flexDirection: 'row',
  },
  confirmButton: {
    flex: 1,
    marginLeft: 12,
  },
});
export default styles;

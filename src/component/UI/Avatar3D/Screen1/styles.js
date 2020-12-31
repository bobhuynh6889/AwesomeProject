import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#49426D',
  },
  header: {
    height: 100,
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  avatarHeader: {
    backgroundColor: '#342852',
    height: 80,
    width: 80,
    borderRadius: 20,
    borderColor: '#615186',
    borderWidth: 2,
  },
  avatarImage: {
    marginTop: -15,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 55,
    width: 55,
  },
  avatarText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#49426D',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  searchContainer: {
    flex: 5,
    marginHorizontal: 30,
    marginTop: 45,
  },
  searchContainerTop: {
    flex: 1,
    flexDirection: 'row',
  },
  searchButton: {
    height: 90,
    width: 90,
    shadowColor: '#000000',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 1,
  },
  nearbyTextContainer: {
    flex: 1,
    backgroundColor: '#392e5b',
    marginBottom: -15,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 30,
  },
  nearbyText: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchButtonBottom: {
    flex: 3,
    backgroundColor: '#392e5b',
    marginTop: 8,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },
  avatarPlus: {
    flex: 2,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: -40,
    marginRight: 6,
    shadowColor: '#000000',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 1,
  },
  recentlyText: {
    flex: 1,
    marginTop: 55,
    marginLeft: 20,
  },
  avatarName: {
    flex: 2,
    marginHorizontal: 20,
    marginTop: -10,
  },
});
export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FE5A27',
  },
  headerTitle: {
    color: '#101624',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  header: {
    marginTop: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  view: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#101624',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  img: {
    height: 50,
    width: 50,
  },
  progressionTitle: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5,
  },
  item: {
    backgroundColor: '#FFF',
    padding: 5,
    marginVertical: 6,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    color: '#101624',
  },
  flatList: {
    // backgroundColor: 'green',
    marginTop: 8,
    marginBottom: 50,
  },
  modalTitle: {
    color: 'red',
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    color: '#101624',
    fontSize: 28,
    fontWeight: 'bold',
  },
  modalView: {
    width: '100%',
    height: 500,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  viewCloseButton: {
    alignItems: 'flex-end',
    width: '100%',
  },
  closeButton: {
    marginBottom: 5,
  },
  closeTitle: {
    fontSize: 16,
    letterSpacing: 2,
    color: '#FF0000',
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: 45,
    borderRadius: 5,
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#44bd32',
  },
  dateText: {
    color: '#101624',
    fontSize: 18,
  },
  register: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#101624',
    fontSize: 20,
    marginTop: 22,
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 0.5,
    borderBottomWidth: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: '#FE5A27',
    width: '100%',
    color: '#101624',
    fontSize: 18,
    height: 50,
  },
  buttonDate: {
    width: '100%',
    height: 50,
    borderWidth: 0.5,
    borderBottomWidth: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: '#FE5A27',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

import React from 'react';
import {Text, View, Modal, Pressable} from 'react-native';
import styles from './AddTraining.styles';

type AddTrainingModalProps = {
  openModal: boolean;
  setOpenModal: Function;
};

const AddTrainingModal = ({openModal, setOpenModal}: AddTrainingModalProps) => (
  <View>
    <Modal
      animationType="slide"
      transparent={true}
      visible={openModal}
      onRequestClose={() => setOpenModal(!openModal)}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setOpenModal(!openModal)}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  </View>
);

export default AddTrainingModal;

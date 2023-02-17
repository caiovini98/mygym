import React, {useState} from 'react';
import {
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

import styles from './AddTraining.styles';

type AddTrainingModalProps = {
  openModal: boolean;
  setOpenModal: Function;
};

const AddTrainingModal = ({openModal, setOpenModal}: AddTrainingModalProps) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent
        visible={openModal}
        onRequestClose={() => setOpenModal(!openModal)}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <View style={styles.viewCloseButton}>
              <Pressable
                style={styles.closeButton}
                onPress={() => setOpenModal(!openModal)}>
                <Text style={styles.closeTitle}>FECHAR</Text>
              </Pressable>
            </View>
            <Text style={styles.title}>Registrar novo dia</Text>
            <Text style={styles.subtitle}>O que você treinou</Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.subtitle}>Dia do treino</Text>
            <TouchableOpacity
              style={styles.buttonDate}
              onPress={() => setOpen(true)}>
              <Text style={styles.dateText}>
                {date.toLocaleDateString('pt-BR')}
              </Text>
            </TouchableOpacity>
            <DatePicker
              mode="date"
              locale="pt-BR"
              cancelText="Cancelar"
              confirmText="Confirmar"
              title="Selecione a data do treino"
              modal
              open={open}
              date={date}
              onConfirm={dateConfirm => {
                setOpen(false);
                setDate(dateConfirm);
              }}
              maximumDate={new Date()}
              onCancel={() => {
                setOpen(false);
              }}
            />
            <TouchableOpacity
              style={styles.button}
              // disabled={!isRegistering}
              onPress={() => setIsRegistering(!isRegistering)}>
              {isRegistering ? (
                <Text style={styles.register}>REGISTRAR</Text>
              ) : (
                <ActivityIndicator size="large" color="#FE5A27" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddTrainingModal;

import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

import styles from './UpdateTrainingModal.styles';

import * as TrainingService from '../../service/training';
import {Training} from '../../models/Training';

import {toISOFormat} from '../../utils/toISOFormat';

type UpdateTrainingModalProps = {
  isEdit: boolean;
  setIsEdit: Function;
  treino?: Training;
};

const UpdateTrainingModal = ({
  isEdit,
  setIsEdit,
  treino,
}: UpdateTrainingModalProps) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [training, setTraining] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    if (treino) {
      setDate(new Date(toISOFormat(treino.date)));
      setTraining(treino.training);
    }
  }, [treino]);

  const handleDelete = async () => {
    if (treino) {
      await TrainingService.deleteTraining(treino.id);
    }
    setIsEdit(false);
  };

  const onSubmit = async () => {
    setIsRegistering(true);
    if (treino) {
      console.log('caiu aqui');
      const dados = {
        training,
        date: date.toLocaleDateString('pt-BR'),
      };
      TrainingService.updateTraining(dados, treino.id);
      Alert.alert('Treino atualizado com sucesso!!');
    }
    setIsRegistering(false);
    setIsEdit(false);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent
        visible={isEdit}
        onRequestClose={() => setIsEdit(!isEdit)}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <View style={styles.viewCloseButton}>
              <Pressable
                style={styles.closeButton}
                onPress={() => setIsEdit(!isEdit)}>
                <Text style={styles.closeTitle}>FECHAR</Text>
              </Pressable>
            </View>
            <Text style={styles.title}>Registrar novo dia</Text>
            <Text style={styles.subtitle}>O que você treinou</Text>
            <TextInput
              value={training}
              style={styles.textInput}
              onChangeText={text => setTraining(text)}
            />
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
              style={styles.deleteTraining}
              onPress={() => handleDelete()}>
              {!isRegistering ? (
                <Text style={styles.register}>DELETAR</Text>
              ) : (
                <ActivityIndicator size="large" color="#FE5A27" />
              )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onSubmit()}>
              {!isRegistering ? (
                <Text style={styles.register}>EDITAR</Text>
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

export default UpdateTrainingModal;

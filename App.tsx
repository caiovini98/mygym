/* eslint-disable react/no-unstable-nested-components */
import React, {useState, useEffect} from 'react';
import {
  Text,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import firebase from './src/service/firebaseConnection';

import styles from './App.styles';

import AddTrainingModal from './src/components/AddTrainingModal/AddTrainingModal';
import UpdateTrainingModal from './src/components/UpdateTrainingModal/UpdateTrainingModal';
import {Training} from './src/models/Training';

function App(): JSX.Element {
  const [openModal, setOpenModal] = useState(false);
  const [dados, setDados] = useState<Training[]>([]);
  const [treino, setTreino] = useState<Training>();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getTrainings();
  }, []);

  const getTrainings = async () => {
    await firebase
      .database()
      .ref('trainings')
      .on('value', snapshot => {
        const treinos: Training[] = [];

        snapshot.forEach(childItem => {
          treinos.push({
            id: childItem.val().id,
            date: childItem.val().date,
            day: childItem.val().day,
            training: childItem.val().training,
          });

          setDados(treinos);
        });
      });
  };

  const isEditMode = (id: Training) => {
    setIsEdit(true);
    setTreino(id);
  };

  const Item = ({training, day, date, id}: Training) => (
    <TouchableOpacity
      onPress={() => isEditMode({training, date, day, id})}
      style={styles.item}>
      <Text style={styles.title}>Dia {day}</Text>
      <Text style={styles.title}>{training}</Text>
      <Text style={styles.title}>{date}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar animated backgroundColor="#FE5A27" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('./assets/logo_musc.png')}
            style={styles.img}
          />
          <Text style={styles.headerTitle}>Minha Musculação</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.progressionTitle}>
            Acompanhe aqui sua progressão
          </Text>
          <Text style={styles.progressionTitle}>
            Objetivo: {dados.length}/200
          </Text>
          <FlatList
            style={styles.flatList}
            data={dados}
            renderItem={({item}) => (
              <Item
                date={item.date}
                day={item.day}
                training={item.training}
                key={item.id}
                id={item.id}
              />
            )}
            keyExtractor={item => item.id}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => setOpenModal(true)}>
            <Text style={styles.modalTitle}>REGISTRAR NOVO DIA</Text>
          </TouchableOpacity>
          <AddTrainingModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            treinos={dados}
          />
          <UpdateTrainingModal
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            treino={treino}
          />
        </View>
      </View>
    </>
  );
}

export default App;

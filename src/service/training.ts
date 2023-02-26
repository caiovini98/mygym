import {Training} from '../models/Training';
import firebase from './firebaseConnection';

export const createTraining = async (dados: Training, key: string) => {
  try {
    await firebase.database().ref('trainings').child(key).set(dados);
  } catch (error) {
    console.log('err: ', error);
  }
};

export const updateTraining = async (dados: any, key: string) => {
  try {
    await firebase.database().ref('trainings').child(key).update(dados);
  } catch (error) {
    console.log('err: ', error);
  }
};

export const deleteTraining = async (key: string) => {
  try {
    await firebase.database().ref(`trainings/${key}`).remove();
  } catch (error) {
    console.log('err: ', error);
  }
};

export const key = async () => {
  try {
    const chave = await firebase.database().ref('trainings').push().key;

    return chave;
  } catch (error) {
    console.log('err: ', error);
  }
};

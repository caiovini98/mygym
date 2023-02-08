import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import AddTrainingModal from './src/components/AddTraining.Modal';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <Text>Meu app</Text>
      <AddTrainingModal />
    </SafeAreaView>
  );
}

export default App;

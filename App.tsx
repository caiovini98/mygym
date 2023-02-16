/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {
  Text,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import styles from './App.styles';

import AddTrainingModal from './src/components/AddTrainingModal/AddTrainingModal';

function App(): JSX.Element {
  const [openModal, setOpenModal] = useState(false);

  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1--bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '-3da1-471f-bd96-',
      title: 'Third Item',
    },
    {
      id: '-3da1-47d1f-bd96-',
      title: 'Third Item',
    },
    {
      id: '--471fassa-bd96-',
      title: 'Third Item',
    },
    {
      id: '-471fr-bd96-',
      title: 'Third Item',
    },
    {
      id: '--47ewqe1f-bds96-',
      title: 'Third Item',
    },
    {
      id: '-3dasda-bd96-',
      title: 'Third Item',
    },
    {
      id: '-3dasdasda1--bd96-',
      title: 'Third Item',
    },
    {
      id: '-3daas1-k-',
      title: 'Third Item',
    },
    {
      id: '-3da1-471f-b9sssss6-',
      title: 'Third Item',
    },
  ];

  // TODO
  /**
   * Formulário no cadastro do dias []
   * Instalar o firebase e afins [V]
   * Ver as coisas do service e ajeitar []
   * Consumir as rotas []
   * Gerar APK e testar []
   */

  const Item = ({title}: {title: string}) => (
    <View style={styles.item}>
      <Text style={styles.title}>25</Text>
      <Text style={styles.title}>Tríceps e peito</Text>
      <Text style={styles.title}>25/08</Text>
    </View>
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
          <FlatList
            style={styles.flatList}
            data={data}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => setOpenModal(true)}>
            <Text style={styles.modalTitle}>REGISTRAR NOVO DIA</Text>
          </TouchableOpacity>
          <AddTrainingModal openModal={openModal} setOpenModal={setOpenModal} />
        </View>
      </View>
    </>
  );
}

export default App;

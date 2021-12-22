import * as React from 'react';

import { StyleSheet, Flatlist, View } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import Album from '../components/Album';

const album = {
  id: '1'
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <Flatlist
      data={categories}
      renderItems={({ item }) => (
        <AlbumCategory
          title={item.title}
          albums={item.albums.items}
        />
      )}
        keyExtractor={(item) => item.id}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

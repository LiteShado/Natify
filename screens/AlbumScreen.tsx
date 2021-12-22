import React, {useEffect, useState} from 'react';
import { View, Text, Flatlist } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';


import AlbumHeader from '../components/AlbumHeader';

const AlbumScreen = () => {

    return (
        <View>
            <Flatlist
                data={album.songs.items}
                renderItem={({ item }) => <SongListItem/song={item} />}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => <AlbumHeader
                album={album} />}

            />
        </View>

    )
}

export default AlbumScreen;

import React from 'react';
import { View, Image, Text} from 'react-native';
import styles from './styles.ts';

export type AlbumProps = {
    album: {
        id: string;
        imageUri: string;
        artistHeadline: string;
    }
}

const Album = (props: AlbumProps) => {

    <View styles={styles.container}>
        <Image source={{ uri: props.album.imageUri }}
        style = {styles.image}/>
        <Text source={ props.album.artistHeadline } style = {styles.text} />
    </View>

    return (
        <View>
            <Text> High from Album </Text>
        </View>
    )
}


export default Album;

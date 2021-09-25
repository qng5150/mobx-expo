import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from 'react-native-elements';
import {PlayerStore} from './stores/PlayerStore';
import {DisplayPlayer} from "./components/DisplayPlayer";
import {Player} from "./models/Player";
import {PlayerContext} from "./stores/PlayerContext";
import {ChangePlayer} from "./components/ChangePlayer";

export default function App() {
    return (
        <View style={styles.container}>
            <Header
                centerComponent={{text: 'Player', style: {color: '#fff'}}}
            />

            <View style={styles.content}>
                <PlayerContext.Provider value={new PlayerStore()}>
                    <DisplayPlayer/>
                    <ChangePlayer />
                </PlayerContext.Provider>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contents: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

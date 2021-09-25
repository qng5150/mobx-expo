import {Text, TextInput, View, StyleSheet} from "react-native";
import {Button} from "react-native-elements";
import React, {useContext, useState} from "react";
import {PlayerContext} from "../stores/PlayerContext";
import {Player} from "../models/Player";

export const ChangePlayer = () => {
    let playerCtx = useContext(PlayerContext);
    const [firstName, setFirstName] = useState(playerCtx.firstName);
    const [lastName, setLastName] = useState(playerCtx.lastName);

    const inputStyle = StyleSheet.create({
        input: {
            height: 40,
            minWidth: 200,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
    });

    function changePlayer() {
        let newPlayer = new Player();
        newPlayer.firstName = firstName;
        newPlayer.lastName = lastName;
        playerCtx.setPlayer(newPlayer);
    }
    return (
        <View>
            <Text style={{fontSize:24, fontWeight: "bold"}}>Change Player</Text>
            <Text>First Name:({firstName})</Text>
            <TextInput
                style={inputStyle.input}
                type="text"
                value={firstName}
                onChangeText={text => setFirstName(text)}
            />

            <Text>Last Name:({lastName})</Text>
            <TextInput
                type="text"
                style={inputStyle.input}
                value={lastName}
                onChangeText={text => setLastName(text)}
            />
            <Button onPress={changePlayer} title="Submit">
            </Button>
        </View>
    );
}
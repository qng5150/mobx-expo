import { observer} from "mobx-react";
import {Text, View} from "react-native";
import React, {useContext} from 'react';
import {PlayerContext} from "../stores/PlayerContext";

export const DisplayPlayer = observer(() => {
    let playerCtx = useContext(PlayerContext);
    return (
        <View style={{paddingBottom:40}}>
            <Text>Welcome {playerCtx.getFullName()}</Text>
        </View>
    );
})
import React from "react"
import {makeAutoObservable} from "mobx"

export class PlayerStore {
    player = null;
    constructor() {
        makeAutoObservable(this);
    }

    setPlayer(player) {
        this.player = player;
    }

    getFullName() {
        if (!this.player) {
            return '';
        }
        return this.player.firstName + ' ' + this.player.lastName;
    }
}

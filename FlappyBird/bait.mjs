"use strict";
<<<<<<< HEAD
import libSprite from "../../common/libs/libSprite.mjs";
import { GameProps, EGameStatus } from "./FlappyBird.mjs";
import lib2D from "../../common/libs/lib2d.mjs";

class TBait extends libSprite.TSprite {
=======
import lib2d from "../../common/libs/lib2d.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import { GameProps, EGameStatus } from "./FlappyBird.mjs";

export class TBait extends libSprite.TSprite {
>>>>>>> bd3bf36fe10914b3173701b82de8a468b0b65662
  #speed;
  #sineWave;
  constructor(aSpriteCanvas, aSpriteInfo, aPosition) {
    super(aSpriteCanvas, aSpriteInfo, aPosition);
    this.animateSpeed = 35;
<<<<<<< HEAD
    this.#speed = Math.ceil(Math.random() * 10) / 10 + 0.5; //Genererer en tilfeldig fart mellom 0.5 og 1.5 med step på 0.1
    //Genererer en tilfeldig amplitude mellom 1 og 3
    const amplitude = Math.ceil(Math.random() * 3) + 1;
    this.#sineWave = new lib2D.TSineWave(amplitude, 1.5);
    this.posY = this.#sineWave.value;
  }
  update() {
    if (GameProps.status === EGameStatus.playing) {
      this.translate(-this.#speed, this.#sineWave.value);
    } else {
=======
    //Genere tilfeldig hastighet mellom 0.5 og 1.5 med step på 0.1
    this.#speed = Math.ceil(Math.random() * 10) / 10 + 0.5;
    //Generer en tilfeldig amplitude mellom 1 og 3
    const amplitude = Math.ceil(Math.random() * 3);
    this.#sineWave = new lib2d.TSineWave(amplitude, 1);
    this.posY = this.#sineWave.value;
  }

  update() {
    if(GameProps.status === EGameStatus.playing){
      this.translate(-this.#speed, this.#sineWave.value);
    }else{
>>>>>>> bd3bf36fe10914b3173701b82de8a468b0b65662
      this.translate(this.#speed / 2, this.#sineWave.value);
    }
  }
}
<<<<<<< HEAD

export default TBait;
=======
>>>>>>> bd3bf36fe10914b3173701b82de8a468b0b65662

"use strict";
import lib2d from "../../common/libs/lib2d.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
<<<<<<< HEAD
import { GameProps, EGameStatus, playSound } from "./FlappyBird.mjs";
=======
import { GameProps, EGameStatus } from "./FlappyBird.mjs";
>>>>>>> bd3bf36fe10914b3173701b82de8a468b0b65662

class THero extends libSprite.TSprite {
  #spi;
  #gravity = 9.81 / 100;
  #velocity = 0;
  #sineWave;
  constructor(aSpriteCanvas, aSpriteInfo, aPosition) {
    super(aSpriteCanvas, aSpriteInfo, aPosition);
    this.#spi = aSpriteInfo;
    this.animateSpeed = 10;
    this.isDead = false;
<<<<<<< HEAD
    this.rotation = -15;
    this.#sineWave = new lib2d.TSineWave(1, 2);
=======
    this.rotation = 0;
    this.#sineWave = new lib2d.TSineWave(1.5, 2);
>>>>>>> bd3bf36fe10914b3173701b82de8a468b0b65662
  }

  draw() {
    super.draw();
  }

  update() {
    const groundY = GameProps.ground.posY;
    const bottomY = this.posY + this.#spi.height;
    if (bottomY < groundY) {
      if (this.posY < 0) {
        this.posY = 0;
        this.#velocity = 0;
      }
      this.translate(0, this.#velocity);
<<<<<<< HEAD
      this.rotation = this.#velocity * 10;
=======
      this.rotation = this.#velocity* 10;
>>>>>>> bd3bf36fe10914b3173701b82de8a468b0b65662
      this.#velocity += this.#gravity;
    } else {
      this.posY = groundY - this.#spi.height;
      GameProps.status = EGameStatus.gameOver;
      this.animateSpeed = 0;
      GameProps.sounds.running.stop();
    }
  }

  flap() {
    this.#velocity = -3;
  }
<<<<<<< HEAD
  updateIdle(){
    this.translate(0, this.#sineWave.value);
  }
=======

  updateIdle(){
    this.translate(0, this.#sineWave.value);
  }

>>>>>>> bd3bf36fe10914b3173701b82de8a468b0b65662
}

export default THero;

"use strict";
import libSprite from "../../common/libs/libSprite.mjs";
import lib2d from "../../common/libs/lib2d.mjs";
<<<<<<< HEAD
import { GameProps, playSound } from "./FlappyBird.mjs";
=======
import { GameProps } from "./FlappyBird.mjs";
>>>>>>> bd3bf36fe10914b3173701b82de8a468b0b65662

class TObstacle {
  #upper;
  #lower;
  #spi;
  constructor(aSpriteCanvas, aSpriteInfo) {
    this.#spi = aSpriteInfo;
    const minTop = -320 + 25;
    let top = Math.floor(Math.random() * minTop);
    let pos = new lib2d.TPosition(650, top);
    this.#upper = new libSprite.TSprite(aSpriteCanvas, aSpriteInfo, pos);
    this.#upper.index = 3;
    const groundY = GameProps.ground.posY;
    top += this.#spi.height + 150;
    const gap = top - groundY - 25;

    top = Math.floor(Math.random() * gap) + groundY - 25;
    pos.y = top;
    this.#lower = new libSprite.TSprite(aSpriteCanvas, aSpriteInfo, pos);
    this.#lower.index = 2;
    this.hasPassed = false;
  }

<<<<<<< HEAD
  draw() {
=======
  draw(){
>>>>>>> bd3bf36fe10914b3173701b82de8a468b0b65662
    this.#upper.draw();
    this.#lower.draw();
  }

<<<<<<< HEAD
  update() {
    this.#upper.translate(-1, 0);
    this.#lower.translate(-1, 0);
    const thisHasCollided = GameProps.hero.hasCollided(this.#upper) || GameProps.hero.hasCollided(this.#lower);

    if (thisHasCollided) {
=======
  update(){
    this.#upper.translate(-1, 0);
    this.#lower.translate(-1, 0);
    const hasCollided = 
    GameProps.hero.hasCollided(this.#upper) || 
    GameProps.hero.hasCollided(this.#lower);

    if(hasCollided){
>>>>>>> bd3bf36fe10914b3173701b82de8a468b0b65662
      GameProps.hero.flap();
      GameProps.hero.isDead = true;
    }
  }

<<<<<<< HEAD
  get right() {
    return this.#upper.posX + this.#spi.width;
  }

  get left() {
    return this.#upper.posX;
  }

  get posX() {
=======
  get right(){
    return this.#upper.right;
  }

  get left(){
    return this.#upper.left;
  }

  get posX(){
>>>>>>> bd3bf36fe10914b3173701b82de8a468b0b65662
    return this.#upper.posX;
  }
}

export default TObstacle;

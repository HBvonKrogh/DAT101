"use strict";
import lib2d from "../../common/libs/lib2d.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import { SpriteInfoList, GameProps, EGameStatus, startGame, playSound } from "./FlappyBird.mjs";

export class TMenu {
  #spFlappyBird;
  #spButtonPlay;
  #spInfoText;
  #spGameOver;
  #spMedal;
  #spNumber;
  #spcvs;
  #activeSprite;
  #posScore;
  #posBestScore;
  #posPlayScore;
  #ranking = { first: 0, second: 0, third: 0 };

  constructor(aSpriteCanvas) {
    this.#spcvs = aSpriteCanvas;

    //GameProps.status = EGameStatus.gameOver; // Endre GameStatus i forhold til hva jeg vil ha oppe i menyen

    const posFlappyBird = new lib2d.TPosition(200, 100);
    this.#spFlappyBird = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.flappyBird, posFlappyBird);

    const posButton = new lib2d.TPosition(235, 250);
    this.#spButtonPlay = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.buttonPlay, posButton);

    const posInfoText = new lib2d.TPosition(190, 120);
    this.#spInfoText = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.infoText, posInfoText);

    const posGameOver = new lib2d.TPosition(175, 120);
    this.#spGameOver = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.gameOver, posGameOver);

    const posMedal = new lib2d.TPosition(201, 163);
    this.#spMedal = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.medal, posMedal);

    const posNumber = new lib2d.TPosition(277, 182);
    this.#spNumber = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.numberBig, posNumber);
    this.#spNumber.index = 3; // Nedtelling starer på 3

    this.#posScore = new lib2d.TPosition(380, 170);
    this.#posBestScore = new lib2d.TPosition(380, 210);
    this.#posPlayScore = new lib2d.TPosition(70, 20);

    this.#spcvs.addEventListener("mousemove", this.#onMouseMove);
    this.#activeSprite = null; // Vi har ingen aktive sprites enda, når musen er over en sprite, vil denne bli satt til den aktive spriten
    this.#spcvs.addEventListener("click", this.#onClick);
  }

  draw() {
    switch (GameProps.status) {
      case EGameStatus.idle:
        this.#spFlappyBird.draw();
        this.#spButtonPlay.draw();
        break;

      case EGameStatus.getReady:
        this.#spInfoText.index = 0;
        this.#spInfoText.draw();
        this.#spNumber.draw();
        break;

      case EGameStatus.gameOver:
        this.#spGameOver.draw();
        this.#spMedal.draw();
        this.#spcvs.drawText(GameProps.score, this.#posScore);
        this.#spcvs.drawText(GameProps.bestScore, this.#posBestScore);
        this.#spButtonPlay.draw();
        playSound(GameProps.sounds.dead);
        if (EGameStatus.gameOver) {
          this.#spInfoText.index = 1;
          this.#spInfoText.posY = 60;
        }
        this.#spInfoText.draw();
        break;

      case EGameStatus.playing:
        this.#spcvs.drawText(GameProps.score, this.#posPlayScore);
        break;
    }
  } // End of draw

  incScore(aScore) {
    GameProps.score += aScore;
    if (GameProps.score > this.#ranking.first) {
      this.#ranking.third = this.#ranking.second;
      this.#ranking.second = this.#ranking.first;
      this.#ranking.first = GameProps.score;
      GameProps.bestScore = this.#ranking.first;
      this.#spMedal.index = 2; // Gullmedalje
    } else if (GameProps.score > this.#ranking.second) {
      this.#ranking.third = this.#ranking.second;
      this.#ranking.second = GameProps.score;
      this.#spMedal.index = 1; // Sølvmedalje
    } else if (GameProps.score > this.#ranking.third) {
      this.#ranking.third = GameProps.score;
      this.#spMedal.index = 3; // Bronsemedalje
    } else {
      this.#spMedal.index = 0; // Ingen medalje
    }
  }

  reset() {
    GameProps.score = 0;
    this.#spNumber.index = 3;
    this.#spInfoText;
  }

  // Ikke eksamensrelevant kode, men viktig for eventer i canvas
  #onMouseMove = (aEvent) => {
    const pos = this.#spcvs.getMousePos(aEvent);
    const boundRect = this.#spButtonPlay.boundingBox;
    switch (GameProps.status) {
      case EGameStatus.idle:
        if (boundRect.isPositionInside(pos)) {
          this.#spcvs.style.cursor = "pointer";
          this.#activeSprite = this.#spButtonPlay;
        } else {
          this.#spcvs.style.cursor = "default";
          this.#activeSprite = null; // Ingen sprite er aktiv
        }
        break;
    }
  };

  #onClick = () => {
    if (this.#activeSprite === this.#spButtonPlay) {
      GameProps.status = EGameStatus.getReady;
      this.#spcvs.style.cursor = "default";
      GameProps.sounds.countDown.stop();
      GameProps.sounds.countDown.play();
      setTimeout(this.#onCountDown, 1000);
    }
  };

  #onCountDown = () => {
    if (this.#spNumber.index > 1) {
      this.#spNumber.index--;
      setTimeout(this.#onCountDown, 1000);
    } else {
      startGame();
    }
  };
}

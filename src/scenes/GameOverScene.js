import Phaser from 'phaser';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('game-over');
  }

  create() {
    this.add.text(this.scale.width * 0.5, this.scale.height * 0.5, 'Game Over', { fontSize: 48, color: '#ade6ff' }).setOrigin();
  }
}
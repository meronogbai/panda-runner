import Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('title');
  }

  preload() {
    this.load.image('start', 'assets/start.png');
  }

  create() {
    const startButton = this.add.image(this.scale.width * 0.5, this.scale.height * 0.5, 'start');
    startButton.setInteractive({ useHandCursor: true });
    startButton.once('pointerdown', () => {
      this.scene.start('game');
    });
  }
}
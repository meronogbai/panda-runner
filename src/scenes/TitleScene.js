import Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('title');
  }

  preload() {
    this.load.image('start', 'assets/start.png');
    this.load.image('logo', 'assets/panda_title.png');
  }

  create() {
    // logo
    this.add.image(50, 80, 'logo').setScale(0.5);
    // title
    this.add.text(this.scale.width * 0.5, 80, 'Panda Runner', { fontSize: 70, color: '#1babab' }).setOrigin();
    // start button
    const startButton = this.add.image(this.scale.width * 0.5, this.scale.height * 0.5, 'start').setScale(0.5);
    startButton.setInteractive({ useHandCursor: true });
    startButton.once('pointerdown', () => {
      this.scene.start('game');
    });
    // credits
    this.add.text(this.scale.width * 0.5, this.scale.height - 100, 'Created by: Meron Ogbai', { fontSize: 24, color: '#1babab' });
  }
}
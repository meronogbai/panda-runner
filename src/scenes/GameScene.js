import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('game');
  }

  preload() {
    this.load.image('background', 'assets/background.png');
    this.load.image('ground', 'assets/ground_wood.png');
  }

  create() {
    this.add.image(400, 300, 'background');
    const platforms = this.physics.add.staticGroup();
    platforms.create(400, 650, 'ground').setScale(2.4).refreshBody();
    platforms.create(600, 400, 'ground').setScale(0.5).refreshBody();
    platforms.create(300, 280, 'ground').setScale(0.5).refreshBody();
    platforms.create(750, 220, 'ground').setScale(0.5).refreshBody();
  }
}
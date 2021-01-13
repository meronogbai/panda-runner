import Phaser from 'phaser';
import GameScene from './scenes/GameScene';

const config = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
      debug: true,
    },
  },
  scene: GameScene,
};

export default new Phaser.Game(config);
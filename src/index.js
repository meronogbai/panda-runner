import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import GameOverScene from './scenes/GameOverScene';
import TitleScene from './scenes/TitleScene';

const config = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: true,
    },
  },
  scene: [GameOverScene, TitleScene, GameScene],
  // lets u add dom stuff via phaser
  parent: '#container',
  dom: {
    createContainer: true,
  },
};

export default new Phaser.Game(config);
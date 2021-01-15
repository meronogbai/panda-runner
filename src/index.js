import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import GameOverScene from './scenes/GameOverScene';
import TitleScene from './scenes/TitleScene';
import LeaderBoardScene from './scenes/LeaderBoardScene';

const config = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
    },
  },
  scene: [TitleScene, GameScene, GameOverScene, LeaderBoardScene],
  // lets u add dom stuff via phaser
  parent: '#container',
  dom: {
    createContainer: true,
  },
  // center game
  autoCenter: true,
};

export default new Phaser.Game(config);
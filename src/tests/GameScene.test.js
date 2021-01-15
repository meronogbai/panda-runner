import Phaser from 'phaser';
import GameScene from '../scenes/GameScene';

test('game scene is a function', () => {
  expect(typeof GameScene).toBe('function');
});

test('game scene is a subclass of scene', () => {
  expect(GameScene.prototype instanceof Phaser.Scene).toBe(true);
});
import Phaser from 'phaser';
import TitleScene from '../scenes/TitleScene';

test('title scene is a function', () => {
  expect(typeof TitleScene).toBe('function');
});

test('game scene is a subclass of scene', () => {
  expect(TitleScene.prototype instanceof Phaser.Scene).toBe(true);
});
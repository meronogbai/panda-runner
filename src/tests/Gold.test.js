import Phaser from 'phaser';
import Gold from '../lib/Gold';

test('Gold is a function', () => {
  expect(typeof Gold).toBe('function');
});

test('game scene is a subclass of scene', () => {
  expect(Gold.prototype instanceof Phaser.Physics.Arcade.Sprite).toBe(true);
});

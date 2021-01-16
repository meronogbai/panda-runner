import Phaser from 'phaser';
import Gold from '../lib/Gold';

test('Gold is a function', () => {
  expect(typeof Gold).toBe('function');
});

test('Gold is a subclass of sprite', () => {
  expect(Gold.prototype instanceof Phaser.Physics.Arcade.Sprite).toBe(true);
});


test('Gold has a constructor', () => {
  expect(Gold.prototype.constructor).not.toBe(false);
});
import Phaser from 'phaser';
import Spikes from '../src/lib/Spikes';

test('Spikes is a function', () => {
  expect(typeof Spikes).toBe('function');
});

test('spikes is a subclass of sprite', () => {
  expect(Spikes.prototype instanceof Phaser.Physics.Arcade.Sprite).toBe(true);
});

test('spikes has a constructor', () => {
  expect(Spikes.prototype.constructor).not.toBe(false);
});
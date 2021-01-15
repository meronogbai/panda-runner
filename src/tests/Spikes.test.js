import Phaser from 'phaser';
import Spikes from '../lib/Spikes';

test('Spikes is a function', () => {
  expect(typeof Spikes).toBe('function');
});

test('game scene is a subclass of scene', () => {
  expect(Spikes.prototype instanceof Phaser.Physics.Arcade.Sprite).toBe(true);
});

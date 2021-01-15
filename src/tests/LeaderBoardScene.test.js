import Phaser from 'phaser';
import LeaderBoardScene from '../scenes/LeaderBoardScene';

test('leaderboard scene is a function', () => {
  expect(typeof LeaderBoardScene).toBe('function');
});

test('game scene is a subclass of scene', () => {
  expect(LeaderBoardScene.prototype instanceof Phaser.Scene).toBe(true);
});
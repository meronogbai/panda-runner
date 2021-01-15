import Phaser from 'phaser';
import { url, getScores } from '../lib/leaderboardApi';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('leaderboard');
  }

  create() {
    this.add.text(this.scale.width * 0.5, 30,
      'Leaderboard', { fontSize: 48, color: '#00b3ff' })
      .setOrigin();
    getScores(url)
      .then((data) => {
        const sortedData = data.result.sort((a, b) => b.score - a.score);
        for (let i = 0; i < 5; i += 1) {
          if (!sortedData[i]) {
            break;
          }
          const userAndScore = sortedData[i];
          this.add.text(this.scale.width * 0.5, this.scale.height * 0.3 + 20 * i,
            `${userAndScore.user}: ${userAndScore.score}`).setOrigin();
        }
      })
      .catch(() => {
        this.add.text(this.scale.width * 0.5, this.scale.height * 0.5, 'Network Error. Try again later.').setOrigin();
      });
  }
}
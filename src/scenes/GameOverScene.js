import Phaser from 'phaser';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('game-over');
  }

  init(data) {
    this.finalScore = data.score;
  }

  create() {
    // add text
    this.add.text(this.scale.width * 0.5, this.scale.height * 0.1, 'Game Over', { fontSize: 48, color: '#f00' }).setOrigin();
    this.add.text(this.scale.width * 0.5, this.scale.height * 0.2, `Final score: ${this.finalScore}`, { fontSize: 24 }).setOrigin();
    this.add.text(this.scale.width * 0.5, this.scale.height * 0.9, 'Press SPACE to try again.', { fontSize: 24 }).setOrigin();
    // setup new game
    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('game');
    });
    // submit score
    const form = document.createElement('form');
    form.innerHTML = `
      <input type="text" name="name" placeholder="Enter your name" required/>
      <button type="submit">Submit</button>
    `;
    form.addEventListener('submit', e => {
      e.preventDefault();
    });
    this.add.dom(this.scale.width * 0.5, this.scale.height * 0.5, form);
  }
}
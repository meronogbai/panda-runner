import Phaser from 'phaser';
import Gold from '../lib/Gold';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('game');
    this.score = 0;
  }

  preload() {
    this.load.image('background', 'assets/background.png');
    this.load.image('ground', 'assets/ground_wood.png');
    this.load.spritesheet('panda', 'assets/panda.png', { frameWidth: 32, frameHeight: 32 });
    this.load.image('gold', 'assets/gold.png');
  }

  create() {
    this.add.image(400, 300, 'background').setScrollFactor(0, 1);
    this.coins = this.physics.add.group({ classType: Gold });
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(100, this.scale.height + 150, 'ground').setScale(0.5).refreshBody();
    this.platforms.create(400, this.scale.height, 'ground').setScale(0.5).refreshBody();
    this.platforms.create(800, this.scale.height - 150, 'ground').setScale(0.5).refreshBody();
    this.platforms.children.iterate(platform => {
      this.addCoinAbove(platform);
    });
    // player & movement
    this.player = this.physics.add.sprite(100, 450, 'panda');
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('panda', { start: 9, end: 11 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('panda', { start: 6, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'turn',
      frames: [{ key: 'panda', frame: 0 }],
    });
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.platforms, this.coins);
    this.physics.add.overlap(
      this.player,
      this.coins,
      this.collectCoin,
      undefined,
      this,
    );
    this.cursors = this.input.keyboard.createCursorKeys();
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setDeadzone(0, this.scale.height * 1.5);
    // scores
    this.scoreText = this.add.text(10, 10, 'Score: 0',
      { color: '#000', fontSize: 24 })
      .setScrollFactor(0);
  }

  update() {
    this.platforms.children.iterate(platform => {
      const { scrollX } = this.cameras.main;
      if (platform.x <= scrollX - 100) {
        platform.x = scrollX + 900;
        platform.refreshBody();
        this.addCoinAbove(platform);
      }
    });
    this.coins.children.iterate(coin => {
      const { scrollY } = this.cameras.main;
      if (coin.y <= scrollY - 100) {
        this.coin.killAndHide(coin);
        this.physics.world.disableBody(coin.body);
        coin.body.updateFromGameObject();
      }
    });
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);

      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);

      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);

      this.player.anims.play('turn');
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-350);
    }
  }

  addCoinAbove(sprite) {
    const y = sprite.y - sprite.displayHeight;
    const coin = this.coins.get(Phaser.Math.Between(sprite.x - 60, sprite.x + 60), y, 'gold');
    coin.setActive(true);
    coin.setVisible(true);
    this.add.existing(coin);
    coin.body.setSize(coin.width, coin.height);
    this.physics.world.enable(coin);
    return coin;
  }

  collectCoin(_player, coin) {
    this.coins.killAndHide(coin);
    this.physics.world.disableBody(coin.body);
    this.score += 10;
    this.scoreText.text = `Score: ${this.score}`;
  }
}
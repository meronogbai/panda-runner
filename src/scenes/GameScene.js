import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('game');
  }

  preload() {
    this.load.image('background', 'assets/background.png');
    this.load.image('ground', 'assets/ground_wood.png');
    this.load.spritesheet('panda', 'assets/panda.png', { frameWidth: 32, frameHeight: 32 });
  }

  create() {
    this.add.image(400, 300, 'background').setScrollFactor(0, 1);
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(100, this.scale.height + 150, 'ground').setScale(0.5).refreshBody();
    this.platforms.create(400, this.scale.height, 'ground').setScale(0.5).refreshBody();
    this.platforms.create(800, this.scale.height - 150, 'ground').setScale(0.5).refreshBody();
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
    this.cursors = this.input.keyboard.createCursorKeys();
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setDeadzone(0, this.scale.height * 1.5);
  }

  update() {
    this.platforms.children.iterate(platform => {
      const { scrollX } = this.cameras.main;
      if (platform.x <= scrollX - 100) {
        platform.x = scrollX + 900;
        platform.refreshBody();
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
}
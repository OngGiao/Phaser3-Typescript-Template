import "phaser";
import { GameScene } from "./scenes/gameScene";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1000,
    height: 700,
    backgroundColor: '#efefef',
    scene: [GameScene],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

export class PathfinderGame extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }
}

window.onload = () => {
    var game = new PathfinderGame(config);
};
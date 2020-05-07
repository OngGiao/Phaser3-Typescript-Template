import "phaser";


export class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: "GameScene"
        });
    }
    init(): void {

    }
    preload(): void {

    }

    create(): void {
        var txt = this.make.text({
            x: 400,
            y: 300,
            text: 'Welcome to Ông Giáo Channel.',
            origin: 0.5,
            style: {
                font: 'bold 40px Didoni',               
                color: '#000000'
            }
        });        
    }
    update(): void {

    }
};

declare var THREE: any;
declare class GlobalScene {
    scene: any;
    camera: any;
    renderer: any;
    constructor(cameraRatio?: number);
    drawCube(): void;
}

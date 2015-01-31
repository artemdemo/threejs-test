// THREE is undefined parameter for TS, and as far as I know there is no TS definition for THREE (smth like threee.d.ts)
// therefor i'm using this quick hack in order to make it compilable
declare var THREE: any;

class GlobalScene {

    // Main reference to scene object
    scene = new THREE.Scene();

    // Setting up camera
    camera = new THREE.PerspectiveCamera(
        45, // Cameras field of view
        window.innerWidth / window.innerHeight, // aspect, in order to make picture look normal
        0.1, // clipping algorithm, allow to computer not to render parts that we do not see
        1000 // same as before
    );

    renderer = new THREE.WebGLRenderer();

    /*
     * Class constructor
     */
    constructor() {}

    drawCube() {
        var geometry, material, cube;
        var render;

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild( this.renderer.domElement );

        geometry = new THREE.BoxGeometry( 1, 1, 1 );
        material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        cube = new THREE.Mesh(geometry, material);

        this.scene.add(cube);
        this.camera.position.z = 5;

        render = function() {
            requestAnimationFrame( render );
            cube.rotation.x += 0.1;
            cube.rotation.y += 0.1;
        };

        render();
    }
}

window.onload = function(){
    var gscene = new GlobalScene();
    gscene.drawCube();
};

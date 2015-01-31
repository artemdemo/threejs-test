// THREE is undefined parameter for TS, and as far as I know there is no TS definition for THREE (smth like threee.d.ts)
// therefor i'm using this quick hack in order to make it compilable
declare var THREE: any;

class GlobalScene {

    // Main reference to scene object
    scene = new THREE.Scene();

    // Camera variable
    camera;

    renderer;

    /*
     * Class constructor
     */
    constructor( cameraRatio = 45 ) {
        //Setting up the camera
        this.camera = new THREE.PerspectiveCamera(
            cameraRatio, // Cameras field of view
            window.innerWidth / window.innerHeight, // aspect, in order to make picture look normal
            0.1, // clipping algorithm, allow to computer not to render parts that we do not see
            1000 // same as before
        );
        this.renderer = new THREE.WebGLRenderer();
        //this.renderer.setPixelRatio( window.devicePixelRatio );
    }

    /*
     * Drawing spinning cube
     */
    drawCube() {
        var geometry, material, cube;
        var render;

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild( this.renderer.domElement );

        geometry = new THREE.BoxGeometry(50, 50, 50 );
        material = new THREE.MeshBasicMaterial({ color: 0x398FC7 });
        cube = new THREE.Mesh(geometry, material);

        this.scene.add(cube);
        this.camera.position.z = 400;

        render = () => {
            requestAnimationFrame( render );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.03;

            this.renderer.render( this.scene, this.camera );
        };

        render();
    }
}

window.onload = function(){
    // Test #1
    var gscene = new GlobalScene();
    gscene.drawCube();

};

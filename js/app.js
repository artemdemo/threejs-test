var GlobalScene = (function () {
    /*
     * Class constructor
     */
    function GlobalScene(cameraRatio) {
        if (cameraRatio === void 0) { cameraRatio = 45; }
        // Main reference to scene object
        this.scene = new THREE.Scene();
        //Setting up the camera
        this.camera = new THREE.PerspectiveCamera(cameraRatio, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        //this.renderer.setPixelRatio( window.devicePixelRatio );
    }
    /*
     * Drawing spinning cube
     */
    GlobalScene.prototype.drawCube = function () {
        var _this = this;
        var geometry, material, cube;
        var render;
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        geometry = new THREE.BoxGeometry(50, 50, 50);
        material = new THREE.MeshBasicMaterial({ color: 0x398FC7 });
        cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
        this.camera.position.z = 400;
        render = function () {
            requestAnimationFrame(render);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.03;
            _this.renderer.render(_this.scene, _this.camera);
        };
        render();
    };
    return GlobalScene;
})();
window.onload = function () {
    // Test #1
    var gscene = new GlobalScene();
    gscene.drawCube();
};
//# sourceMappingURL=app.js.map
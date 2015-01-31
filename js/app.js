var GlobalScene = (function () {
    /*
     * Class constructor
     */
    function GlobalScene() {
        // Main reference to scene object
        this.scene = new THREE.Scene();
        // Setting up camera
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
    }
    GlobalScene.prototype.drawCube = function () {
        var geometry, material, cube;
        var render;
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        geometry = new THREE.BoxGeometry(1, 1, 1);
        material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
        this.camera.position.z = 5;
        render = function () {
            requestAnimationFrame(render);
            cube.rotation.x += 0.1;
            cube.rotation.y += 0.1;
        };
        render();
    };
    return GlobalScene;
})();
window.onload = function () {
    var gscene = new GlobalScene();
    gscene.drawCube();
};
//# sourceMappingURL=app.js.map
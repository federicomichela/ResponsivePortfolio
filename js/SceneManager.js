function SceneManager(canvas) {
    var clock = new THREE.Clock();
    var screenDimensions = {
        width: canvas.width,
        height: canvas.height
    };
    var scene = buildScene();
    var renderer = buildRender(screenDimensions);
    var camera = buildCamera(screenDimensions);
    var sceneSubjects = createSceneSubjects(scene);

    function buildScene() {
        var scene = new THREE.Scene();

        // scene.background = new THREE.Color("#000");

        return scene;
    }

    function buildRender({ width, height }) {
        var rendererOptions = {
          canvas: canvas,
          antialias: true,
          alpha: true
        };
        var renderer = new THREE.WebGLRenderer(rendererOptions);
        var DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;

        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);

        renderer.gammaInput = true;
        renderer.gammaOutput = true;

        return renderer;
    }

    function buildCamera({ width, height }) {
        var aspectRatio = width / height;
        var fieldOfView = 60;
        var nearPlane = 1;
        var farPlane = 100;
        var camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        return camera;
    }

    function createSceneSubjects(scene) {
        var sceneSubjects = [
            new GeneralLights(scene),
            new SceneSubject(scene)
        ];

        return sceneSubjects;
    }

    window.scene = scene;

    this.update = function() {
        var elapsedTime = clock.getElapsedTime();
        var i, ii;

        for (i=0, ii=sceneSubjects.length; i<ii; i++)
        {
          sceneSubjects[i].update(elapsedTime);
        }

        renderer.render(scene, camera);
    }

    this.onWindowResize = function() {
        var { width, height } = canvas;

        screenDimensions.width = width;
        screenDimensions.height = height;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    }
}
function SceneSubject(scene) {
  var geometry = new THREE.CircleBufferGeometry(5, 32);
  var texture = new THREE.TextureLoader().load( "images/textures/circle.png" );
  var uniforms = {
		pointTexture: { value: texture }
	};
  var material = new THREE.MeshBasicMaterial({
    map: texture,
    blending: THREE.AdditiveBlending,
		transparent: true,
    depthTest: true,
  });
  var shaderMaterial = new THREE.ShaderMaterial(
  {
		uniforms: uniforms,
		vertexShader: getVertexShader(),
		fragmentShader: getFragmentShader(),
		blending: THREE.AdditiveBlending,
		// depthTest: false,
		transparent: true,
		vertexColors: true
	} );
  var direction = [-1, 1];
  var group = new THREE.Group();
  var particles = 500;
  var i, mesh;
  var incrementalFactor = 0.01;

	for ( i = 0; i < particles; i ++ )
  {
		mesh = new THREE.Mesh( geometry, material );

    mesh.name = "mesh_"+i;
		mesh.position.x = Math.random() * 200 - 100;
		mesh.position.y = Math.random() * 200 - 100;
		mesh.position.z = Math.random() * 200 - 100;
		mesh.matrixAutoUpdate = true;
		mesh.updateMatrix();
		group.add( mesh );
	}
	scene.add( group );

	this.update = function(){
    for (i=0; i<particles; i++)
    {
      mesh = group.getObjectByName("mesh_"+i);

      mesh.position.x += incrementalFactor;
  		mesh.position.y += incrementalFactor
  		mesh.position.z += incrementalFactor;
    }
  };
}

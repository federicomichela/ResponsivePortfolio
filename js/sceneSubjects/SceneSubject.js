function SceneSubject(scene) {
	var geometry = new THREE.BufferGeometry();
	var vertices = [];
	var sprite = new THREE.TextureLoader().load( 'images/textures/circle.png' );
	var numberOfParticles = 50;
	var i, x, y, z;
	var particles;

	for ( i=0; i<numberOfParticles; i++ )
	{
		x = 2000 * Math.random() - 1000;
		y = 2000 * Math.random() - 1000;
		z = 2000 * Math.random() - 1000;

		vertices.push( x, y, z );
	}
	geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
	material = new THREE.PointsMaterial( {
		size: 50,
		sizeAttenuation: false,
		map: sprite,
		alphaTest: 0.5,
		transparent: true,
		blending: THREE.AdditiveBlending
	} );

	particles = new THREE.Points( geometry, material );

	scene.add( particles );

	this.update = function() {
		var positions = particles.geometry.attributes.position.array;

		for ( i=1; i<numberOfParticles*3; i+=3 )
		{
			positions[i] += 0.1 + Math.random();

			if (positions[i] >= 100)
			{
				positions[i-1] = 2000 * Math.random() - 1000;
				positions[i] = 2000 * Math.random() - 1000;
				positions[i+1] = 2000 * Math.random() - 1000;
			}
		}

		particles.geometry.attributes.position.needsUpdate = true;
		particles.geometry.setDrawRange( 0, numberOfParticles );
	}
}

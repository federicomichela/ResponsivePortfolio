function GeneralLights(scene) {
	var light = new THREE.PointLight("#ffffff", 1);

  scene.add(light);

	this.update = function(time) {
		// light.intensity = (Math.sin(time)+1.5)/1.5;
		// light.color.setHSL( Math.sin(time), 0.5, 0.5 );
	}
}

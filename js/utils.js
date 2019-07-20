function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function getVertexShader() {
    return `attribute float size;
			varying vec3 vColor;
			void main() {
				vColor = color;
				vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
				gl_PointSize = size * ( 300.0 / -mvPosition.z );
				gl_Position = projectionMatrix * mvPosition;
			}`
}

function getFragmentShader() {
  return `uniform sampler2D pointTexture;
			varying vec3 vColor;
			void main() {
				gl_FragColor = vec4( vColor, 1.0 );
				gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );
			}`
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function getVertexShader() {
    return `attribute vec3 aColor;
            varying vec3 vColor;

            void main() {
              vColor = aColor;
        
              vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
              gl_Position = projectionMatrix * modelViewPosition; 
            }`
}

function getFragmentShader() {
  return `varying vec3 vColor;

          void main() {
            gl_FragColor = vec4(vColor, 1);
          }`
}

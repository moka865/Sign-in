import { GLTFLoader } from './GLTFLoader';

const loader = new GLTFLoader();

loader.load( 'scene.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
const btn = document.getElementById('ShowBtn');

btn.addEventListener('click', function onClick(event) {
  // 👇️ change background color
  document.body.style.backgroundColor = 'salmon';

  // 👇️ optionally change text color
  // document.body.style.color = 'white';
});
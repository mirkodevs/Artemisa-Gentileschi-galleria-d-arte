import * as THREE from 'three';

import { paintingData } from '../informazioniDipinti';

export function creaDipinti(scene, textureLoader) {
  let paintings = [];

  paintingData.forEach((data) => {
    const painting = new THREE.Mesh( 
      new THREE.PlaneGeometry(data.width, data.height),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(data.imgSrc)})
    );

    painting.position.set(data.position.x, data.position.y, data.position.z); 
    painting.rotation.y = data.rotationY; 

    
    painting.userData = {
      type: 'painting', 
      info: data.info, 
      url: data.info.link
    };

    painting.castShadow = true; 
    painting.receiveShadow = true; 

    paintings.push(painting); 
  });

  return paintings; 
}